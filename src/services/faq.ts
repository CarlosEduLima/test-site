import api from './api';

export interface IQuestionProps {
  id: number;
  previous_answer: string;
  question: string;
}
export interface IFAQProps {
  id: number;
  name: string;
  questions: IQuestionProps[];
}

export const GetFaq = async () => {
  try {
    const { data } = await api.get<IFAQProps[]>('/faq/category');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
