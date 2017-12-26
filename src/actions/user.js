import consts from '../const';

const {
  USER_CREATE_REQUESTED,
  USER_DELETE_REQUEST,
} = consts;

export const createUser = user => ({
  type: USER_CREATE_REQUESTED,
  payload: user,
});

export const deleteUser = user => ({
  type: USER_DELETE_REQUEST,
  payload: user,
});
