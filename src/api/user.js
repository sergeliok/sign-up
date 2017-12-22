import axios from 'axios';

export const createUser = (user) => (
  axios.post('/user', user)
  .then(res=>res)
  .catch(error=>error)
)
