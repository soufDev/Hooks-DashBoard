import { put, call, takeEvery } from "redux-saga/effects";
import { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersError } from "../../actions/orders";
import { fetchOrders } from '../../../api/order';
import { FETCH_ORDERS } from "../../../const";
function* fetchOrder(action: any) {
  const { path } = action;
  yield put(fetchOrdersRequest());
  try {
    const orders = yield call(fetchOrders, path);
    yield put(fetchOrdersSuccess(orders));
  } catch (e) {
    console.log({ e });
    yield put(fetchOrdersError(e));
  }
}

export function* watchFetchOrders() {
  yield takeEvery(FETCH_ORDERS, fetchOrder);
}