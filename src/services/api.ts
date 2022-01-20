import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iziw.com.br/api/',
});

export default api;
