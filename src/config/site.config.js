import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_PUBLIC_URL_API,
});

export { api };
