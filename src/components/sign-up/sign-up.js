import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextStep } from '../../actions/next-step';
import { prevStep } from '../../actions/prev-step';
import { createUser } from '../../actions/user';
import './sign-up.scss';
import SignUpFormFirstStep from './sign-up-form-first-step';
import SignUpFormSecondStep from './sign-up-form-second-step';
import SignUpFormThirdStep from './sign-up-form-third-step';

const SignUp = (state) => {
  return (
    <div className="sign-up">
      <div className="sign-up-holder">
        { state.currentStep === 1 ? <SignUpFormFirstStep onSubmit={state.nextStep} /> : false }
        { state.currentStep === 2 ? <SignUpFormSecondStep onSubmit={state.nextStep} previousPage={state.prevStep} /> : false }
        { state.currentStep === 3 ? <SignUpFormThirdStep onSubmit={state.createUser} /> : false}
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    // formValues: state.form,
    currentStep: state.signUpStep,
  };
}

const matchDispatchToProps = {
  nextStep,
  prevStep,
  createUser,
};

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
