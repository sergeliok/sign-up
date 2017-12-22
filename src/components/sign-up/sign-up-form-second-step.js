import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const SignUpFormSecondStep = props => {
  const { handleSubmit, previousPage } = props;
  const renderError = ({ meta: { touched, error } }) => touched && error ? <span className="error">{error}</span> : false
  const renderGenderError = ({ meta: { touched, error } }) => touched && error ? <label><span className="error">Gender is {error}</span></label> : <label>Gender</label> 
  return (
    <form onSubmit={handleSubmit}>
      <div className="title">Signup</div>
      <div className="step-2">
        <div className="progress-bar"></div>
        <div className="row">
          <div className="birth-date">
            <label>DATE OF BIRTH</label>
            <Field component={renderError} name="birthDay"/>
            <Field component={renderError} name="birthMonth"/>
            <Field component={renderError} name="birthYear"/>
            <div className="fields">
              <Field name="birthDay" maxLength="2" component="input" type="text" placeholder="DD" />
              <Field name="birthMonth" maxLength="2" component="input" type="text" placeholder="MM" />
              <Field name="birthYear" maxLength="4" component="input" type="text" placeholder="YYYY" />
            </div>
          </div>
        </div>
        <div className="row">
          <Field component={renderGenderError} name="sex" />
          <div className="gender">
            <div className="block">
              <Field id="male" name="sex" component="input" type="radio" value="male "/>
              <label htmlFor="male">Male</label>
            </div>
            <div className="block">
              <Field id="female" name="sex" component="input" type="radio" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="block">
              <Field id="unspecified" name="sex" component="input" type="radio" value="unspecified" />
              <label htmlFor="unspecified">Unspecified</label>
            </div>
          </div>
        </div>
        <div className="row">
          <label>Where did you hear about is?</label>
          <div>
            <div className="select-holder">
              <Field name="whereyouhear" component="select">
                <option />
                <option value="advertising">advertising</option>
              </Field>
            </div>
          </div>
        </div>
      </div>
      <div className="row buttons">
        <button onClick={previousPage} className="btn-back">Back</button>
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
})(SignUpFormSecondStep)
