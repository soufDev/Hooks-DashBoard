import { put, call, takeLatest } from "redux-saga/effects";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError } from "../../actions/users";
import { fetchUsers } from "../../../api/users";
import { FETCH_USERS } from "../../../const";

function* fetchUser(action: any) {
  const { path } = action;
  yield put(fetchUsersRequest());
  try {
    const users = yield call(fetchUsers, path);
    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersError(e));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUser);
}