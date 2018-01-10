import * as actions from './index';
import * as types from '../const';

describe('sign up action creators', () => {
  test('should create an action to transfer on next step', () => {
    const expectedAction = { type: types.NEXT_STEP };
    expect(actions.nextStep()).toEqual(expectedAction);
  });

  test('should create an action to transfer on prev step', () => {
    const expectedAction = { type: types.PREV_STEP };
    expect(actions.prevStep()).toEqual(expectedAction);
  });

  test('should create an action to create new user', () => {
    const data = { name: 'Name' };
    const expectedAction = {
      type: types.USER_CREATE_REQUEST,
      payload: data,
    }
    expect(actions.createUser(data)).toEqual(expectedAction);
  });
});
