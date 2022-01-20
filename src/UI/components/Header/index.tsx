import React from 'react';
import { Icon, ContainerButton, DivHeader, List, ContainerList, ContainerImage } from './styles';
import LogoImg from '../../../assets/icon-white.png';
import { Button } from '../Button';

interface Props {
  opacity?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <DivHeader opacity={props.opacity === true ? 0.45 : 1.0}>
        <ContainerImage>
          <Icon src={LogoImg} alt="Logo IZIW" />
        </ContainerImage>
        <ContainerList>
          <List>Home</List>
          <List>Como funciona?</List>
          <List>Categorias</List>
          <List>FAQ</List>
          <ContainerButton>
            <Button variant={'primary'} height={'30px'} widthCircle={''} heightCircle={''}>
              Quero me cadastrar
            </Button>
          </ContainerButton>
        </ContainerList>
      </DivHeader>
    </div>
  );
};
