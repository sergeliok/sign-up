import { call, put, takeEvery, fork } from 'redux-saga/effects';
import Api from '../api';
import {
  USER_CREATE_REQUESTED,
  USER_CREATE_SUCCEEDED,
  USER_CREATE_FAILED,
} from '../const';

function* createUser({ payload }) {
  try {
    const user = yield call(Api.createUserRequest, payload.user);
    if (!user) throw Error('user doesn\'t created');
    yield put({ type: USER_CREATE_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: USER_CREATE_FAILED, message: e.message });
  }
}

export default function* rootSaga() {
  yield* [
    fork(takeEvery, USER_CREATE_REQUESTED, createUser),
  ];
}
