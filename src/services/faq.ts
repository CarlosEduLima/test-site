import api from './api';

export interface IQuestionProps {
  id: number;
  previous_answer: string;
  question: string;
  highlight: number
}
export interface IFAQProps {
  id: number;
  name: string;
  questions: IQuestionProps[];
}

export interface IAnswerReviewProps {
  canReview: boolean;
}

export interface IAnswerFeedbackProps {
  faq_answser_id: number;
  helped: boolean;
}
export interface IAnswerProps {
  id: number;
  answers: [
    {
      id: number;
      answer: string;
    },
  ];
}

export interface IWhatsProps {
  description: string;
  value: string;
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

export const GetFaqAnswerReview = async (answerId: number) => {
  try {
    const { data } = await api.get<IAnswerReviewProps>(`/faq/answers-review/${answerId}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PostAnswerFeedback = async (formData: IAnswerFeedbackProps) => {
  try {
    const { data } = await api.post('/faq/answers-review', formData);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GetAnswer = async (questionId: number) => {
  try {
    const { data } = await api.get<IAnswerProps>(`/faq/questions-and-answers/${questionId}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GetWhatsappNumber = async () => {
  try {
    const { data } = await api.get<IWhatsProps>('/support/whatsapp');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
