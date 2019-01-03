import { call, put, takeLatest } from 'redux-saga/effects';
import AuthService from '../../../Auth';
import { loginSuccess, loginError } from '../../actions/login';
import { LOGIN_REQUEST } from '../../../const';

function* Auth(action:any) {
  console.log(action)
  const { data: { username, password } }= action;
  const { login } = AuthService;
  try {
    const response = yield call(login, username, password);
    console.log(response);
    if (response.token) {
      console.log(response);
      yield put(loginSuccess({ path: '/home' }));
    } else {
      yield put(loginError({ error: 'there is no token' }));
    }
  } catch (error) {
    yield put(loginError({ error }));
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, Auth);
}