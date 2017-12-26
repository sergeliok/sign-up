import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import propTypes from 'prop-types';
import validate from './validate';
import renderField from './render-field';

const SignUpFormFirstStep = props => (
  <form onSubmit={props.onSubmit}>
    <div className="title">Signup</div>
    <div className="step-1">
        <div className="progress-bar" />
        <Field name="email" component={renderField} label="Email" type="email" />
        <Field name="password" component={renderField} label="Password" type="password" />
        <Field name="confirmPassword" component={renderField} label="Confirm password" type="password" />
      </div>
      <div className="row buttons">
        <button type="submit" className="btn-next">Next &#8594;</button>
      </div>
  </form>
);

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SignUpFormFirstStep);
