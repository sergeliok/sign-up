import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let SignUpFormThirdStep = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">Thank you!</div>
      <div className="step-3">
        <div className="progress-bar" />
        <div className="check-success">&#10003;	</div>
        <button type="submit" className="btn-go-to-dashboard">Go to dashboard &#8594;</button>
      </div>
    </form>
  );
};

SignUpFormThirdStep.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

SignUpFormThirdStep = reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SignUpFormThirdStep);

export default SignUpFormThirdStep;
