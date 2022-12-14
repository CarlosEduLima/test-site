import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Services } from 'src/services/services';
import { useRouter } from 'next/router';
import Input from '../Input';
import * as S from './styles';

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
            return { name: item.name, id: item.id, description: item.description, main: true };
          }),
        ).map((item) => {
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
    <S.TopImg>
      <S.CenterProfessional>
        <S.SubTitleProfessional>
          Os <span>melhores profissionais,</span> a um clique de distância.
        </S.SubTitleProfessional>
        <Input
          name="search"
          icon="search"
          placeholder="O que você precisa hoje?"
          dataSearch={data}
        />

        <S.ContainerButton>
          <Button
            variant={'primary'}
            widthCircle={''}
            heightCircle={''}
            height={'37px'}
            onClick={() => {
              props.handleScroll();
            }}
          >
            Encontre um profissional
          </Button>
        </S.ContainerButton>
      </S.CenterProfessional>
    </S.TopImg>
  );
};
