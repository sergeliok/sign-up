import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate';

const SignUpFormThirdStep = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="title">Thank you!</div>
      <div className="step-3">
        <div className="progress-bar"></div>
        <div className="check-success">&#10003;	</div>
        <a type="submit" className="btn-go-to-dashboard">Go to dashboard &#8594;</a>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignUpFormThirdStep)
