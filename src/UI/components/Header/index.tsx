/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Icon, ContainerButton, DivHeader, List, ContainerList, ContainerImage } from './styles';
import LogoImg from '../../../assets/icon-white.png';
import { Button } from '../Button';

interface Props {
  opacity?: boolean;
}

const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <DivHeader colocarOpacidade={props.opacity === true ? 0.45 : 1.0}>
        <ContainerImage>
          <Icon src={LogoImg} alt="Logo IZIW" />
        </ContainerImage>
        <ContainerList>
          <List>Home</List>
          <List>Como funciona?</List>
          <List>Categorias</List>
          <List>FAQ</List>
          <ContainerButton>
            <Button
              variant={'primary'}
              children={'Quero me cadastrar'}
              height={'30px'}
              widthCircle={''}
              heightCircle={''}
            />
          </ContainerButton>
        </ContainerList>
      </DivHeader>
    </div>
  );
};

export default Header;
