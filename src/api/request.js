import axios from 'axios';

export default (options) => {
  return axios(options)
    .then(res => res.data);
};
