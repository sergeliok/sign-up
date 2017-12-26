import axios from 'axios';

export default (url, option) => axios({
  url,
  ...option,
})
  .then(res => res.data);
