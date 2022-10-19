import api from './api';

export const GetRatingProfessionals = async () => {
  try {
    const { data } = await api.get('/evaluation/get-ratings');
    return data;
  } catch (error) {
    console.log('API GET error: /evaluation/get-ratings');
    console.log(error);
    throw error;
  }
};
