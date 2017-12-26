import request from './request';

export const createUserRequest = user => request('api/user', {
  method: 'POTS',
  user,
});
