import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './render-field'

const SignUpFormFirstStep = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="title">Signup</div>
      <div className="step-1">
        <div className="progress-bar"></div>
        <Field name="email" component={renderField} label="Email" type="email" />
        <Field name="password" component={renderField} label="Password" type="password" />
        <Field name="confirmPassword" component={renderField} label="Confirm password" type="password" />
      </div>
      <div className="row buttons">
        <button type="submit" className="btn-next">Next &#8594;</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignUpFormFirstStep)