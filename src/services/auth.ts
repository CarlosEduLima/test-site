import api from './api';

export interface IRegisterUserProps {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export const RegisterUser = async (
  params: IRegisterUserProps,
): Promise<{
  message: string;
}> => {
  try {
    const response = await api.post<{ message: string }>('/auth/register-site', params);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('API POST error: /auth/register-site');
    console.log(error);
    throw error;
  }
};
