import request from './request';

export const createUserRequest = user => request('api/user', {
  method: 'POTS',
  user,
});

export const deleteUserRequest = user => request('api/user', {
  method: 'delete',
  user,
});
