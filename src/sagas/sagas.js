import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api';

function* createUser(action) {
  try {
    const user = yield call(Api.createUser, action.payload.user);
    yield put({ type: 'USER_CREATE_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_CREATE_FAILD', message: e.message });
  }
}

function* userSaga() {
  yield takeEvery('USER_CREATE_REQUESTED', createUser);
}

export default userSaga;
