import AuthService from '../Auth';

export interface ParcelUpdate {
  status?: string; 
  pickedup_at?: number;
  delivered_at?: number;
}

export const fetchOrders = (path: string): Promise<Response> => {
  const response = AuthService.fetch(path, null);
  return response;
}

export const updateParcel = (path: string, data: ParcelUpdate): Promise<Response> => {
  const response = AuthService.fetch(path, { method: 'PATCH', body: JSON.stringify(data), credentials: 'same-origin' });
  return response;
};

export const updateOrder = (path: string, data: { assignee: number }): Promise<Response> => {
  const response = AuthService.fetch(path, { method: 'PATCH', body: JSON.stringify(data), credentials: 'same-origin' });
  return response;
};
