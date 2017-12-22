const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password required'
  } else if (values.password.length < 6){
    errors.password = 'Minimum 6 characters'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirmation password required'
  } else if (values.confirmPassword !== values.password ){
    errors.confirmPassword = 'Confirmation should match the password'
  }
  if (!values.birthDay) {
    errors.birthDay = 'Day is Required'
  } else if (isNaN(Number(values.birthDay))) {
    errors.birthDay = 'Day must be a number'
  } else if (Number(values.birthDay) > 31) {
    errors.birthDay = 'Invalid day'
  }
  if (!values.birthMonth) {
    errors.birthMonth = 'Month is Required'
  } else if (isNaN(Number(values.birthMonth))) {
    errors.birthMonth = 'Month must be a number'
  } else if (Number(values.birthMonth) > 12) {
    errors.birthMonth = 'Invalid month'
  }
  if (!values.birthYear) {
    errors.birthYear = 'Year is Required'
  } else if (isNaN(Number(values.birthYear))) {
    errors.birthYear = 'Year must be a number'
  } else if (new Date().getFullYear() < Number(values.birthYear)) {
    errors.birthYear = 'Invalid year'
  } else if ((new Date().getFullYear() - Number(values.birthYear)) < 18) {
    errors.birthYear = 'Sorry, you must be at least 18 years old'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}

export default validate