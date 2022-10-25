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
    const response: any = await Services();
    setData(
      response
        .flatMap((item) => item.sub_services)
        .concat(
          response.map((item) => {
            return { name: item.name };
          }),
        )
        .map((item) => item.name)
        .sort(),
    );
  };

  useEffect(() => {
    AllServices();
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
            if (router.pathname === '/Home') {
              props.handleScroll();
            } else {
              router.push({
                pathname: '/Home',
                query: { scroll: true },
              });
            }
          }}
        />
      </CenterProfessional>
    </TopImg>
  );
};
