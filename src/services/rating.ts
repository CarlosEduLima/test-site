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
