import { all } from 'redux-saga/effects';
import { watchAuth } from './login/auth';
import { watchFetchOrders } from './order/fetch';
import { watchFetchUsers } from './user/fetch';
import { watchUpdateParcel, watchUpdateOrder } from './order/update';

export default function* rootSaga() {
  yield all([
    watchAuth(), 
    watchFetchOrders(), 
    watchFetchUsers(),
    watchUpdateParcel(),
    watchUpdateOrder()
  ]);
}