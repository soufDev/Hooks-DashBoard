import initialState from "../initialeState";
import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_ERROR, FETCH_ORDERS_SUCCESS, UPDATE_PARCEL_REQUEST, UPDATE_PARCEL_ERROR, UPDATE_PARCEL_SUCCESS, UPDATE_ORDER_REQUEST, UPDATE_ORDER_ERROR, UPDATE_ORDER_SUCCESS } from "../../const";

const orderReducer = (state = initialState.orders, action: any) => {
  switch (action.type) {
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case FETCH_ORDERS_ERROR:
      return {
        ...state,
        isLoad: action.isLoad,
        error: action.error,
        orders: [],
      };
    case FETCH_ORDERS_SUCCESS: 
      return {
        ...state,
        isLoad: action.isLoad,
        orders: action.orders,
        error: null,
      }
    case UPDATE_PARCEL_REQUEST:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case UPDATE_PARCEL_ERROR:
      return {
        ...state,
        isLoad: action.isLoad,
        error: action.error,
      };
    case UPDATE_PARCEL_SUCCESS:
      return {
        ...state,
        isLoad: action.isLoad,
        error: null,
        parcel: action.response,
      };
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case UPDATE_ORDER_ERROR:
      return {
        ...state,
        isLoad: action.isLoad,
        error: action.error,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoad: action.isLoad,
        error: null,
        order: action.response,
      };
    default:
      return state;
  }
}

export default orderReducer;