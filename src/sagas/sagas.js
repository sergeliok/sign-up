import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api';
import consts from '../const';

const {
  USER_CREATE_REQUESTED,
  USER_CREATE_SUCCEEDED,
  USER_CREATE_FAILD,
} = consts;

function* createUser(action) {
  try {
    const user = yield call(Api.createUserRequest, action.payload.user);
    yield put({ type: USER_CREATE_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: USER_CREATE_FAILD, message: e.message });
  }
}

function* userSaga() {
  yield takeEvery(USER_CREATE_REQUESTED, createUser);
}

export default userSaga;
