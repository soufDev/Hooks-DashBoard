import AuthService from '../Auth';
import { AxiosPromise } from 'axios';
import { Order } from '../interface/Order';

export interface ParcelUpdate {
  status?: string; 
  pickedup_at?: number;
  delivered_at?: number;
}

export const fetchOrders = async (path: string): Promise<Order[]> => {
  const response = await AuthService.fetch(path, { method: 'GET'});
  return response.data;
}

export const updateParcel = (path: string, data: ParcelUpdate): AxiosPromise<Response> => {
  const response = AuthService.fetch(path, { method: 'PATCH', data });
  return response;
};

export const updateOrder = (path: string, data: { assignee: number }): AxiosPromise<Response> => {
  const response = AuthService.fetch(path, { method: 'PATCH', data });
  return response;
};
