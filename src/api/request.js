import axios from 'axios';

let client = axios;

export const setClient = (newClient) => {
  client = newClient;
};

export default (options) => {
  return client(options)
    .then(res => res.data);
};
