import { takeEvery, fork } from 'redux-saga/effects';
import createUser from './user-saga';

import {
  USER_CREATE_REQUEST,
} from '../const';

export default function* rootSaga() {
  yield* [
    fork(takeEvery, USER_CREATE_REQUEST, createUser),
  ];
}
