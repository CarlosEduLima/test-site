import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import instagram from '../../../assets/instagram.png';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';
import googlePlay from '../../../assets/googlePlay.png';
import appStore from '../../../assets/appStore.png';
import iconPlayStore from '../../../assets/iconPlayStore.png';
import iconAppleStore from '../../../assets/iconAppleStore.png';
import iziwIcon from '../../../assets/icon.png';
import * as S from './styles';

const Footer = () => {
  const categoriasItens = [
    'Assistência Técnica',
    'Auto',
    'Aulas',
    'Consultorias',
    'Design e Tecnologia',
    'Eventos',
    'Moda e Beleza',
    'Reformas',
    'Saúde',
    'Serviços Domésticos',
  ];

  const imagensSociais = [
    {
      name: 'instagram',
      local: instagram,
    },
    {
      name: 'facebook',
      local: facebook,
    },
    {
      name: 'twitter',
      local: twitter,
    },
    {
      name: 'linkedin',
      local: linkedin,
      onclick: () => {
        <Link href="https://www.facebook.com/profile.php?id=100070007527103"></Link>;
      },
    },
  ];

  return (
    <S.FooterContainer>
      <S.FooterUp>
        {/* <S.FooterSection width={300}>
          <S.TextUp>Categorias</S.TextUp>
          <S.FooterList>
            {categoriasItens.map((item, i) => (
              <S.TextItens key={i}>{item}</S.TextItens>
            ))}
          </S.FooterList>
        </S.FooterSection> */}

        <S.FooterSection>
          <S.TextUp>Institucional</S.TextUp>
          <Link href="/whoWeAre">
            <S.TitlesList>Quem somos</S.TitlesList>
          </Link>
          <Link href="/pageWorkWithUs">
            <S.TitlesList>Trabalhe conosco</S.TitlesList>
          </Link>
          <Link href="/verifiedProfessionals">
            <S.TitlesList>Profissionais Verificados</S.TitlesList>
          </Link>
        </S.FooterSection>

        <S.FooterSection>
          <S.TextUp>Redes Sociais</S.TextUp>
          <S.FooterList>
            <S.FooterListImg>
              {imagensSociais.map((item) => (
                <S.ImageLocalDiv key={item.name}>
                  <S.ImageLocal>
                    {item.name === 'facebook' ? (
                      <Link href="https://www.facebook.com/profile.php?id=100070007527103">
                        <Image src={item.local} width={11} height={23} alt={item.name} />
                      </Link>
                    ) : item.name === 'instagram' ? (
                      <Link href="https://www.instagram.com/iziwapp/">
                        <Image src={item.local} height={500} alt={item.name} />
                      </Link>
                    ) : item.name === 'twitter' ? (
                      <Link href="https://twitter.com/iziwapp">
                        <Image src={item.local} height={500} alt={item.name} />
                      </Link>
                    ) : (
                      <Link href="https://www.linkedin.com/company/iziw">
                        <Image src={item.local} height={500} alt={item.name} />
                      </Link>
                    )}
                  </S.ImageLocal>
                </S.ImageLocalDiv>
              ))}
            </S.FooterListImg>
          </S.FooterList>
          {/* <S.TextUp>Parceiros</S.TextUp> */}
        </S.FooterSection>
        <S.FooterSection>
          <S.TextUp>Downloads</S.TextUp>
          <S.FooterList>
            <S.DownloadImage>
              <a href="https://play.google.com/store/apps">
                <Image src={googlePlay} width={220} height={66} alt="Google play store" />
              </a>
            </S.DownloadImage>
            <S.DownloadImage>
              <a href="https://www.apple.com/br/app-store/">
                <Image src={appStore} width={220} height={66} alt="Apple Store" />
              </a>
            </S.DownloadImage>
            <S.ContainerIcons>
              <S.ContainerIconStore>
                <a href="https://play.google.com/store/apps">
                  <Image src={iconPlayStore} width={36} height={36} alt="Google play store" />
                </a>
              </S.ContainerIconStore>
              <S.ContainerIconStore>
                <a href="https://www.apple.com/br/app-store/">
                  <Image src={iconAppleStore} width={36} height={36} alt="Apple Store" />
                </a>
              </S.ContainerIconStore>
            </S.ContainerIcons>
          </S.FooterList>
        </S.FooterSection>
      </S.FooterUp>
      <S.FooterDown>
        <S.ContainerLogo>
          <Image src={iziwIcon} alt="Iziw Icon" />
        </S.ContainerLogo>
        <Link href="/faq">
          <S.TextDownFooter>Ajuda</S.TextDownFooter>
        </Link>
        <Link href="/TermsOfUse">
          <S.TextDownFooter>Termos de Uso</S.TextDownFooter>
        </Link>
        <S.TextFiredev>Firedev It Solutions 2021 - Todos os Direitos Reservados</S.TextFiredev>
      </S.FooterDown>
    </S.FooterContainer>
  );
};

export default Footer;
