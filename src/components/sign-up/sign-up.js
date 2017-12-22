import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { nextStep } from '../../actions/next-step';
import { prevStep } from '../../actions/prev-step';
import './sign-up.scss';
import SignUpFormFirstStep from './sign-up-form-first-step';
import SignUpFormSecondStep from './sign-up-form-second-step';
import SignUpFormThirdStep from './sign-up-form-third-step';

// class SignUp extends Component {

//   render () {
//     return (
//       <div className="sign-up">
//       <div className="sign-up-holder">
//         {this.props.currentStep === 1 && <SignUpFormFirstStep onSubmit={this.props.nextStep} />}
//         {this.props.currentStep === 2 && <SignUpFormSecondStep onSubmit={this.props.nextStep} previousPage={this.props.prevStep} />}
//         {this.props.currentStep === 3 && <SignUpFormThirdStep onSubmit={this.props.nextStep} />}
//       </div>
//       </div>
//     );
//   }
// }

const SignUp = (state) => {
  
  return (
    <div className="sign-up">
      <div className="sign-up-holder">
        { state.currentStep === 1 ? <SignUpFormFirstStep onSubmit={state.nextStep} /> : false }
        { state.currentStep === 2 ? <SignUpFormSecondStep onSubmit={state.nextStep} previousPage={state.prevStep} /> : false }
        { state.currentStep === 3 ? <SignUpFormThirdStep onSubmit={state.nextStep} /> : false}
      </div>
    </div>
  )
};


function mapStateToProps(state) {
  return {
    currentStep: state.signUpStep,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ nextStep, prevStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
