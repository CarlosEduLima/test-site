import React from 'react';
import { Icon, ContainerButton, DivHeader, List, ContainerList, ContainerImage } from './styles';
import LogoImg from '../../../assets/icon-white.png';
import { Button } from '../Button';
import Link from 'next/link';

interface Props {
  opacity?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <DivHeader opacity={props.opacity === true ? 0.45 : 1.0}>
        <ContainerImage>
          <Link href="/Home">
            <Icon src={LogoImg} alt="Logo IZIW" />
          </Link>
        </ContainerImage>
        <ContainerList>
          <Link href="/Home">
            <List>Home</List>
          </Link>
          <Link href="/firstStepsPage">
            <List>Como funciona?</List>
          </Link>
          <List>Categorias</List>
          <Link href="/PageFaq">
            <List>FAQ</List>
          </Link>
          <ContainerButton>
            <Link href="/RegisterUser">
              <Button variant={'primary'} height={'30px'} widthCircle={''} heightCircle={''}>
                Quero me cadastrar
              </Button>
            </Link>
          </ContainerButton>
        </ContainerList>
      </DivHeader>
    </div>
  );
};
