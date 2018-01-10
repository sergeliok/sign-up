import { signUpStep } from './sign-up-step';
import * as types from '../const';

describe('sign up steps reducer', () => {
  it('should return the initial state ', () => {
    expect(signUpStep(undefined, {})).toEqual(1);
  });

  it('should return the second step ', () => {
    expect(signUpStep(1, { type: types.NEXT_STEP })).toEqual(2);
  });

  it('should return the first step ', () => {
    expect(signUpStep(2, { type: types.PREV_STEP })).toEqual(1);
  });
});
