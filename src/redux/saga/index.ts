import { all } from 'redux-saga/effects';
import { watchAuth } from './login/auth';

export default function* rootSaga() {
  yield all([watchAuth()]);
}