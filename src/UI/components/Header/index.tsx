import React, { useState } from 'react';
import {
  Icon,
  ContainerButton,
  DivHeader,
  List,
  ContainerList,
  ContainerImage,
  LinkContainer,
  MobileLinkContainer,
  HeaderContent,
  ButtonText,
  MobileMenu,
  MenuIconContainer,
} from './styles';
import LogoImg from '../../../assets/icon-white.png';
import { Button } from '../Button';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
interface Props {
  opacity?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <DivHeader opacity={props.opacity === true ? 0.45 : 1.0}>
        <HeaderContent>
          <ContainerImage>
            <Link href="/Home">
              <Icon src={LogoImg} alt="Logo IZIW" />
            </Link>
          </ContainerImage>
          <ContainerList>
            <LinkContainer>
              <Link href="/Home">
                <List>Home</List>
              </Link>
              <Link href="/firstStepsPage">
                <List>Como funciona?</List>
              </Link>
              <List>Categorias</List>
              <Link href="/faq">
                <List>FAQ</List>
              </Link>
              <Link href="/ContactFaq">
                <List>Contato</List>
              </Link>
            </LinkContainer>
            <ContainerButton>
              <Link href="/RegisterUser">
                <Button variant={'primary'} height={'30px'} widthCircle={''} heightCircle={''}>
                  <ButtonText>Quero me cadastrar</ButtonText>
                </Button>
              </Link>
            </ContainerButton>
            <MenuIconContainer>
              {open ? (
                <AiOutlineClose onClick={handleClose} size={24} />
              ) : (
                <AiOutlineMenu onClick={handleOpen} size={24} />
              )}
            </MenuIconContainer>
          </ContainerList>
        </HeaderContent>
      </DivHeader>
      <MobileMenu open={open}>
        <MobileLinkContainer>
          <Link href="/Home">
            <List style={{ marginBottom: 25 }}>Home</List>
          </Link>
          <Link href="/firstStepsPage">
            <List style={{ marginBottom: 25 }}>Como funciona?</List>
          </Link>
          <List style={{ marginBottom: 25 }}>Categorias</List>
          <Link href="/PageFaq">
            <List style={{ marginBottom: 25 }}>FAQ</List>
          </Link>
          <Link href="/ContactFaq">
            <List>Contato</List>
          </Link>
          <Link href="/faq">
            <List>FAQ</List>
          </Link>
        </MobileLinkContainer>
      </MobileMenu>
    </div>
  );
};
