import {
  USER_CREATE_REQUEST,
} from '../const';

export const createUser = user => ({
  type: USER_CREATE_REQUEST,
  payload: user,
});
