import { createModel } from '@rematch/core';
import initialState from '../initialeState';

import { fetchOrders as fetchOrdersApi, updateOrder } from '../../api/order';


export const order = createModel({
  state: initialState.orders,
  reducers: {
    fetch: (orders: any, state: any) => ({
      ...state,
      orders,
    }),
    catchError: (error: any, state: any) => ({
      ...state,
      error,
      orders: []
    }),
    update: (response: any, state: any) => {
      const orders = [
        ...state.orders
          .filter((order: any) => order.id !== response.data.id), response.data
      ].sort((a, b) => a.id - b.id);
      return {
        ...state,
        error: null,
        orders,
      }
    }
  },
  effects: {
    async fetchOrders(path: string) {
      try {
        const orders = await fetchOrdersApi(path);
        this.fetch(orders);
      } catch (error) {
        this.catchError(error);
      }
    },
    async update(path: string, data: any) {
      try {
        const response = await updateOrder(path, data);
        this.update(response);
      } catch (error) {
        this.catchError(error);
      }
    }
  }
})