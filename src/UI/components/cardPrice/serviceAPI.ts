import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hlg.iziw.com.br/api/',
});

export interface DadosApi {
  id: number;
  name: string;
  active: number;
  value: number;
  description: string;
  highlight: number;
  product_category_id: number;
  created_at: Date;
  updated_at: Date;
  category: {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
  };
  value_with_discount: number;
}

export const ServiceHighlightsDadosApi = async (): Promise<DadosApi[]> => {
  try {
    const { data } = await api.get<DadosApi[]>(
      '/produtos-iziw?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDEyMzQ0NjksIm5iZiI6MTY0MTIzNDQ2OSwianRpIjoiN2xUcmw0OU1JbWJWNHRLRSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sfZ3v5IZPDUfHE11tw7Gd6nHHD1NtWTcJGOzTPY30Vs',
    );
    return data;
  } catch (error) {
    console.log(
      'API GET error: /produtos-iziw?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDEyMzQ0NjksIm5iZiI6MTY0MTIzNDQ2OSwianRpIjoiN2xUcmw0OU1JbWJWNHRLRSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sfZ3v5IZPDUfHE11tw7Gd6nHHD1NtWTcJGOzTPY30Vs',
    );
    console.log(error);
    throw error;
  }
};
