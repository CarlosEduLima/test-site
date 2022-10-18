import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uat.iziw.com.br/api/',
});

export default api;
