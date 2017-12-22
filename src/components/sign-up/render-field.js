import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="row">
      <label htmlFor={input.name}>{touched && error? (<span className="error">{error}</span>): label}</label>
      <input id={input.name} {...input} type={type} />
  </div>
)

export default renderField;
