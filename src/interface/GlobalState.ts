import { Order } from "./Order";
import { User } from "./User";

export interface State {
  user: UserState;
  order: OrderState;
  login: LoginState;
}

export interface UserState {
  users?: User[];
  isLoad?: boolean;
  error?: string;
  path?: string;
}
export interface OrderState {
  path?: string;
  isLoad?: boolean;
  orders: Order[];
  error?: string;
  order?: Order;
  parcel?: Order;
}

export interface LoginState {
  username?: string;
  password?: string;
  error?: string;
  path?: string;
  isLoad?: boolean;
}

export interface ParcelState {
  path?: string;
  isLoad?: boolean;
  error?: string;
  parcel?: Order;
}