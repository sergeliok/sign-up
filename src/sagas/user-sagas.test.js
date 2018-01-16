import { call, put } from 'redux-saga/effects';

import { createUserRequest } from '../api';
import createUser from './user-saga';

describe('user saga', () => {
  const event = {
    payload: {
      email: 'email@email.com',
    },
  };

  const generator = createUser(event);

  it('it should dispatch create user succeed ', () => {
    expect(generator.next().value).toEqual(call(createUserRequest, event.payload));
  });

  it('it should call effect ', () => {
    expect(generator.next().value).toEqual(put({ type: 'USER_CREATE_SUCCEEDED', user: undefined }));
  });

  it('it should return undefined', () => {
    expect(generator.next().value).toBeUndefined();
  });
});
