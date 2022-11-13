import React, { useState } from 'react';
import { Button } from '../Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import newLogoWhite from '../../../assets/newLogoWhite.svg';
import Link from 'next/link';
import * as S from './styles';
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
      <S.DivHeader opacity={props.opacity === true ? 0.45 : 1.0}>
        <S.HeaderContent>
          <S.ContainerImage>
            <Link href="/">
              <S.Icon src={newLogoWhite} alt="Logo IZIW" />
            </Link>
          </S.ContainerImage>
          <S.ContainerList>
            <S.LinkContainer>
              <Link href="/">
                <S.List>Home</S.List>
              </Link>
              {/*<S.Link href="/primeiros-passos">
                <S.List>Como funciona?</S.List>
                  </S.Link>*/}
              <S.List
                onClick={() => {
                  if (router.pathname === '/') {
                    props.handleScroll()
                  } else {
                    router.push({
                      pathname: '/',
                      query: { scroll: true },
                    }, '/');
                  }
                }
                }>
                Categorias
              </S.List>
              <Link href="/perguntas-frequentes">
                <S.List>FAQ</S.List>
              </Link>
              <Link href="/contato">
                <S.List>Contatos</S.List>
              </Link>
            </S.LinkContainer>
            <S.ContainerButton>
              <Link href="/cadastro">
                <Button variant={'primary'} height={'30px'} widthCircle={''} heightCircle={''}>
                  <S.ButtonText>Quero me cadastrar</S.ButtonText>
                </Button>
              </Link>
            </S.ContainerButton>
            <S.MenuIconContainer>
              {open ? (
                <AiOutlineClose onClick={handleClose} size={24} />
              ) : (
                <AiOutlineMenu onClick={handleOpen} size={24} />
              )}
            </S.MenuIconContainer>
          </S.ContainerList>
        </S.HeaderContent>
      </S.DivHeader>
      <S.MobileMenu open={open}>
        <S.MobileLinkContainer>
          <Link href="/">
            <S.List style={{ marginBottom: 25 }}>Home</S.List>
          </Link>
          <S.List style={{ marginBottom: 25 }}
            onClick={() => {
              if (router.pathname === '/') {
                props.handleScroll()
              } else {
                router.push({
                  pathname: '/',
                  query: { scroll: true },
                }, '/');
              }
            }
            }
          >
            Categorias
          </S.List>
          <Link href="/perguntas-frequentes">
            <S.List style={{ marginBottom: 25 }}>FAQ</S.List>
          </Link>
          <Link href="/contato">
            <S.List>Contatos</S.List>
          </Link>
        </S.MobileLinkContainer>
      </S.MobileMenu>
    </div>
  );
};
