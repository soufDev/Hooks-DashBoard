import { call, put, takeLatest } from 'redux-saga/effects';
import AuthService from '../../../Auth';
import { loginSuccess, loginError } from '../../actions/login';
import { LOGIN_REQUEST } from '../../../const';

function* Auth(action:any) {
  console.log(action)
  const { data: { username, password }, history } = action;
  const { login } = AuthService;
  try {
    const response = yield call(login, username, password);
    console.log(response);
    if (response.token) {
      console.log('token', response.token);
      yield put(loginSuccess());
      yield history.push('/home');
    } else {
      console.error('there is no token');
      yield put(loginError({ error: 'there is no token' }));
    }
  } catch (error) {
    yield put(loginError({ error }));
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, Auth);
}