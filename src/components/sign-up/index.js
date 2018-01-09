import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { nextStep, prevStep } from '../../actions/sign-up-step';
import { createUser } from '../../actions/user';
import './sign-up.scss';
import SignUpFormFirstStep from './sign-up-form-first-step';
import SignUpFormSecondStep from './sign-up-form-second-step';
import SignUpFormThirdStep from './sign-up-form-third-step';

const SignUp = (props) => (
  <div className="sign-up">
    <div className="sign-up-holder">
      {props.currentStep === 1
        ? <SignUpFormFirstStep onSubmit={props.nextStep} />
        : null}
      {props.currentStep === 2
        ? <SignUpFormSecondStep onSubmit={props.nextStep} previousPage={props.prevStep} />
        : null}
      {props.currentStep === 3
        ? <SignUpFormThirdStep onSubmit={props.createUser} />
        : null}
    </div>
  </div>
);

SignUp.propTypes = {
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentStep: state.signUpStep,
  };
}

const matchDispatchToProps = {
  nextStep,
  prevStep,
  createUser,
};

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
