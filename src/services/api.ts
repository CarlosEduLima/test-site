import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hlg.iziw.com.br/api/',
});

export default api;
