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

export const GetRating = async (id: number | any) => {
  try {
    console.log('jhh', id)
    const { data } = await api.get(`/services/average-ratings/${parseInt(id)}`);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
