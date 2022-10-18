import api from './api';

export const GetFaq = async () => {
  try {
    const { data } = await api.get('/faq/category');
    console.log('dadsdasdsadas', data)
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

