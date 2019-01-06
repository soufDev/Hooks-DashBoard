import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_ERROR, FETCH_ORDERS, FETCH_ORDERS_SUCCESS, UPDATE_PARCEL, UPDATE_PARCEL_REQUEST, UPDATE_PARCEL_SUCCESS, UPDATE_PARCEL_ERROR, UPDATE_ORDER, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_ERROR } from "../../const";
import { ParcelUpdate } from "../../api/order";

export const fetchOrders = (path: string) => ({
  path,
  type: FETCH_ORDERS, 
})
export const fetchOrdersRequest = () => ({
  isLoad: true,
  type: FETCH_ORDERS_REQUEST,
})

export const fetchOrdersError = (error: string) => ({
  error,
  isLoad: false,
  type: FETCH_ORDERS_ERROR,
});

export const fetchOrdersSuccess = (orders: any[]) => ({
  orders,
  isLoad: false,
  type: FETCH_ORDERS_SUCCESS,
});

export const updateParcel = (path: string, data: ParcelUpdate) => ({
  path,
  data,
  type: UPDATE_PARCEL,
});

export const updateParcelRequest = () => ({
  isLoad: false,
  type: UPDATE_PARCEL_REQUEST,
});

export const updateParcelSuccess = (response: any) => ({
  isLoad: false,
  response,
  type: UPDATE_PARCEL_SUCCESS
});

export const updateParcelError = (error: string) => ({
  error,
  isLoad: false,
  type: UPDATE_PARCEL_ERROR,
})

export const updateOrder = (path: string, data: { assignee: number }) => ({
  path,
  data,
  type: UPDATE_ORDER,
});

export const updateOrderRequest = () => ({
  isLoad: false,
  type: UPDATE_ORDER_REQUEST,
});

export const updateOrderSuccess = (response: any) => ({
  isLoad: false,
  response,
  type: UPDATE_ORDER_SUCCESS
});

export const updateOrderError = (error: string) => ({
  error,
  isLoad: false,
  type: UPDATE_ORDER_ERROR,
})