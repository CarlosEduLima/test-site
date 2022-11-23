import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hlg.iziwork.com.br/api/',
});

export default api;
