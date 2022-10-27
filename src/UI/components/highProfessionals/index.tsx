import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Input from '../Input';
import { Button } from '../Button';
import { TopImg, CenterProfessional, SubTitleProfessional } from './styles';
import { Services } from 'src/services/services';
import { useRouter } from 'next/router';
interface Props {
  handleScroll?: () => void;
}

export const HighProfessionals: React.FC<Props> = (props) => {
  const [data, setData] = useState([]);

  const router = useRouter();

  const AllServices = async () => {
    const response: any[] = await Services();
    setData(
      response
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .flatMap((item: any) => item?.sub_services)
        .concat(
          response.map((item) => {
            return { name: item.name, id: item.id, description: item.description };
          }),
        )
        .map((item) => {
          return {
            name: item?.name,
            id: item?.id,
            description: item?.description,
            sup_name: item?.service_name,
            sup_id: item?.service_id,
            sup_description: item?.service_description,
          };
        }),
    );
  };

  useEffect(() => {
    void AllServices();
  }, []);

  return (
    <TopImg>
      <CenterProfessional>
        <SubTitleProfessional>
          Os <span>melhores profissionais,</span> a um clique de distância.
        </SubTitleProfessional>
        <Input
          name="search"
          icon="search"
          placeholder="O que você precisa hoje?"
          dataSearch={data}
        />

        <Button
          children={'Encontre um profissional'}
          variant={'primary'}
          widthCircle={''}
          heightCircle={''}
          onClick={() => {
            props.handleScroll();
          }}
        />
      </CenterProfessional>
    </TopImg>
  );
};
