import api from './api';

export interface IServiceProps {
  id: number;
  name: string;
  description: string;
  service_id: number;
  presence: string;
  has_products: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  is_highlight: number;
  icon_path: string;
  splash_path: string;
  desktop_image_path: string;
  sub_services: IServiceProps[];
}

export const ServiceHighlights = async (): Promise<IServiceProps[]> => {
  // try {
  //   const { data } = await api.get<IServiceProps[]>(
  //     '/servicos?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDEyMzQ0NjksIm5iZiI6MTY0MTIzNDQ2OSwianRpIjoiN2xUcmw0OU1JbWJWNHRLRSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sfZ3v5IZPDUfHE11tw7Gd6nHHD1NtWTcJGOzTPY30Vs',
  //   );
  //   return data;
  // } catch (error) {
  //   console.log('API GET error: /servicos?highlight=1');
  //   console.log(error);
  //   throw error;
  // }
};

export const Services = async () => {
  try {
    const { data } = await api.get('/services?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaGxnLml6aXcuY29tLmJyL2FwaS9zaWduLWluIiwiaWF0IjoxNjU3OTA1NDEwLCJuYmYiOjE2NTc5MDU0MTAsImp0aSI6InJmRUNHaEtYM0dzY2ZTM2EiLCJzdWIiOiIzNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Uuk_0KJ1rolu4yKMAGny5vFmek50zfP0ePJO44qRpcA');
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
    console.log('API GET ERROR: /services')
    throw error;
  }
};
