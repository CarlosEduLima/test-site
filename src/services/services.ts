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

export const ServicesHighlight = async (): Promise<IServiceProps | Error> => {
  try {
    const { data } = await api.get<IServiceProps>('/servicos?highlight=1');
    return data;
  } catch (error) {
    console.log('API GET error: /servicos?highlight=1');
    console.log(error);
    throw error;
  }
};
