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
import { useRouter } from 'next/router';
interface Props {
  opacity?: boolean;
  handleScroll?: () => void;
}

export const Header: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

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
              {/*<Link href="/firstStepsPage">
                <List>Como funciona?</List>
                  </Link>*/}
              <List
                onClick={() => {
                  if (router.pathname === '/Home') {
                    props.handleScroll()
                  } else {
                    router.push({
                      pathname: '/Home',
                      query: { scroll: true },
                    });
                  }
                }
                }>
                Categorias
              </List>
              <Link href="/faq">
                <List>FAQ</List>
              </Link>
              <Link href="/ContactFaq">
                <List>Contatos</List>
              </Link>
            </LinkContainer>
            <ContainerButton>
              <Link href="/RegisterUser">
                <Button
                  variant={'primary'}
                  height={'37px'}
                  widthCircle={''}
                  heightCircle={''}
                >
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
          <List style={{ marginBottom: 25 }} onClick={() => {
            if (router.pathname === '/Home') {
              props.handleScroll()
            } else {
              router.push({
                pathname: '/Home',
                query: { scroll: true },
              });
            }
          }
          }
          >
            Categorias
          </List>
          <Link href="/faq">
            <List style={{ marginBottom: 25 }}>FAQ</List>
          </Link>
          <Link href="/ContactFaq">
            <List>Contatos</List>
          </Link>
        </MobileLinkContainer>
      </MobileMenu>
    </div>
  );
};
