import React from 'react';
import { connect } from 'react-redux';

import { nextStep, prevStep } from '../../actions/sign-up-step';
import { createUser } from '../../actions/user';
import './sign-up.scss';
import SignUpFormFirstStep from './sign-up-form-first-step';
import SignUpFormSecondStep from './sign-up-form-second-step';
import SignUpFormThirdStep from './sign-up-form-third-step';

const SignUp = (props) => {
  return (
    <div className="sign-up">
      <div className="sign-up-holder">
        { props.currentStep === 1 ? <SignUpFormFirstStep onSubmit={props.nextStep} /> : false }
        { props.currentStep === 2 ? <SignUpFormSecondStep onSubmit={props.nextStep} previousPage={props.prevStep} /> : false }
        { props.currentStep === 3 ? <SignUpFormThirdStep onSubmit={props.createUser} /> : false}
      </div>
    </div>
  )
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
