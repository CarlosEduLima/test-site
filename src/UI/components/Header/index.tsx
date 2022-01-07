/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { Icon, ContainerButton, Header, List, ContainerList, ContainerImage } from './styles';
import LogoImg from '../../../assets/icon-white.png';
import { Button } from '../Button';

interface props {
  opacidade: boolean;
}

export default class index extends Component<props> {
  render() {
    return (
      <div>
        <Header colocarOpacidade={this.props.opacidade === true ? 0.84 : 1.0}>
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
        </Header>
      </div>
    );
  }
}
