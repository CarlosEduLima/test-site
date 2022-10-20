import api from './api';
export const PostHekps = async (data) => {
  try {
    const resp = await api.post('/faq/help/email/', data);
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
