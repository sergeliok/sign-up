import { call, put } from 'redux-saga/effects';
import createUser from './user-saga';

import { setClient } from '../api/request';
import { createUserRequest } from '../api';

describe('user saga', () => {
  const event = {
    payload: {
      email: 'email@email.com',
    },
  };

  const client = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(event.payload), 1000);
  });

  setClient(client);

  const generator = createUser(event);

  it('it should dispatch create user succeed ', () => {
    expect(generator.next().value).toEqual(call(createUserRequest, event.payload));
  });

  it('it should call effect ', () => {
    expect(generator.next().value).toEqual(put({ type: 'USER_CREATE_SUCCEEDED', user: event.payload }));
  });

  it('it should return undefined', () => {
    expect(generator.next().value).toBeUndefined();
  });
});
