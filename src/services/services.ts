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

export const ServiceHighlightsShow = async (id: string): Promise<IServiceProps> => {
  const { data } = await api.get<IServiceProps>(`/services/${id}`);
  return data;
};

export const ServiceHighlights = async (): Promise<IServiceProps[]> => {
  try {
    const { data } = await api.get<IServiceProps[]>('/services/all');
    return data;
  } catch (error) {
    console.log('API GET error: /servicos?highlight=1');
    console.log(error);
    throw error;
  }
};

export const Services = async () => {
  try {
    const { data } = await api.get<IServiceProps[]>('/services');
    return data;
  } catch (error) {
    console.log(error);
    console.log('API GET ERROR: /services');
    throw error;
  }
};
