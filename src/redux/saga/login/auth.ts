import { call, put, takeLatest } from 'redux-saga/effects';
import AuthService from '../../../Auth';
import { loginSuccess, loginError } from '../../actions/login';
import { LOGIN_REQUEST, FETCH_ORDERS, FETCH_USERS } from '../../../const';

function* Auth(action:any) {
  const { data: { username, password }, history } = action;
  const { login } = AuthService;
  try {
    const response = yield call(login, username, password);
    if (response.token) {
      yield put(loginSuccess());
      const { role, id } = AuthService.getProfile(); 
      if (role === 'ROLE_ADMIN') {
        yield put({ type: FETCH_ORDERS, path : '/api/orders'})
        yield put({ type: FETCH_USERS, path : '/api/users'})
      } else {
        yield put({ type: FETCH_ORDERS, path : `/api/orders?assignee=${id}`})
      }
      yield put({ type: 'GO_HOME', history: history.push('/home') });
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