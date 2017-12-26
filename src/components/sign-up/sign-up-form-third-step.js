import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

let SignUpFormThirdStep = (props) => {
  console.log(props.formValues);
  const {
    handleSubmit,
    formValues,
  } = props;

  return (
    <form onSubmit={ handleSubmit }>
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
})(SignUpFormThirdStep);

const selector = formValueSelector('signUp');

SignUpFormThirdStep = connect((state) => {
  const formValues = selector(state, 'email', 'password', 'birthDay', 'birthMonth', 'birthYear', 'sex');
  return {
    formValues,
  };
})(SignUpFormThirdStep);

export default  SignUpFormThirdStep;
