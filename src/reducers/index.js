import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { signUpStep } from './sign-up-step';

const allRedusers = combineReducers({
  form: formReducer,
  signUpStep,
});

export default allRedusers;
