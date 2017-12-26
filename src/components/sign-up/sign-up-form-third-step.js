import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';

let SignUpFormThirdStep = (props) => {
  const { values } = props;
  console.log(values);
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="title">Thank you!</div>
      <div className="step-3">
        <div className="progress-bar" />
        <div className="check-success">&#10003;	</div>
        <button type="submit" className="btn-go-to-dashboard">Go to dashboard &#8594;</button>
      </div>
    </form>
  );
};

SignUpFormThirdStep = reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SignUpFormThirdStep);

const selector = formValueSelector('signUp');

SignUpFormThirdStep = connect((state) => {
  const values = selector(state, 'email');
  return {
    values,
  };
})(SignUpFormThirdStep);

export default SignUpFormThirdStep;
