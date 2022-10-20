import api from './api';

export interface RatingProfessionalsProps {
  rating: number;
  description: string;
  status: string;
  user_form: string;
  user_to: string;
}

export const GetRatingProfessionals = async () => {
  try {
    const { data } = await api.get<RatingProfessionalsProps>('/evaluation/get-ratings');
    return data;
  } catch (error) {
    console.log('API GET error: /evaluation/get-ratings');
    console.log(error);
    throw error;
  }
};

export const GetRating = async (id: number | null) => {
  try {
    const { data } = await api.get(`/services/average-ratings/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
