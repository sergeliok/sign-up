import {
  USER_CREATE_REQUESTED,
  USER_DELETE_REQUEST,
} from '../const';

export const createUser = user => ({
  type: USER_CREATE_REQUESTED,
  payload: user,
});

export const deleteUser = user => ({
  type: USER_DELETE_REQUEST,
  payload: user,
});
