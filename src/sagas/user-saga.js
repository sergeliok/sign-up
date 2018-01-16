import { call, put } from 'redux-saga/effects';
import { createUserRequest } from '../api';

import {
  USER_CREATE_SUCCEEDED,
  USER_CREATE_FAILED,
} from '../const';

export default function* createUser(event) {
  try {
    const user = yield call(createUserRequest, event.payload);
    yield put({ type: USER_CREATE_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: USER_CREATE_FAILED, message: e.message });
  }
}
