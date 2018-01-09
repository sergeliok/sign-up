import request from './request';
import config from '../config';

export const createUserRequest = user => request({
  url: `${config.endpoint}/user`,
  method: 'POST',
  data: {
    ...user
  },
  headers: {
    'Content-Type': 'application/json'
  }
});
