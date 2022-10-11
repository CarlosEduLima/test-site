import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {
  FooterContainer,
  FooterUp,
  FooterDown,
  TextUp,
  TextDown,
  FooterSection,
  FooterList,
  FooterListImg,
  ImageLocal,
  ImageLocalDiv,
  DownloadImage,
  FooterListFAQ,
  TitlesList,
} from './styles';
import instagram from '../../../assets/instagram.png';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';
import googlePlay from '../../../assets/googlePlay.png';
import appStore from '../../../assets/appStore.png';
import iziwIcon from '../../../assets/icon.png';

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
    },
  ];

  return (
    <FooterContainer>
      <FooterUp>
        <FooterSection width={300}>
          <TextUp>Categorias</TextUp>
          <FooterList>
            {categoriasItens.map((item, i) => (
              <TextDown key={i}>{item}</TextDown>
            ))}
          </FooterList>
        </FooterSection>
        <FooterSection>
          <TextUp>Institucional</TextUp>
          <Link href="/whoWeAre">
            <TitlesList>Quem somos</TitlesList>
          </Link>
          <Link href="/pageWorkWithUs">
            <TitlesList>Trabalhe Conosco</TitlesList>
          </Link>
          <Link href="/verifiedProfessionals">
            <TitlesList>Profissionais Verificados</TitlesList>
          </Link>
        </FooterSection>
        <FooterSection>
          <TextUp>Redes Sociais</TextUp>
          <FooterList>
            <FooterListImg>
              {imagensSociais.map((item) => (
                <ImageLocalDiv key={item.name}>
                  <ImageLocal>
                    {item.name === 'facebook' ? (
                      <Image src={item.local} width={11} height={23} alt={item.name} />
                    ) : (
                      <Image src={item.local} height={500} alt={item.name} />
                    )}
                  </ImageLocal>
                </ImageLocalDiv>
              ))}
            </FooterListImg>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <TextUp>Downloads</TextUp>
          <FooterList>
            <a href="https://www.apple.com/br/app-store/">
              <DownloadImage>
                <Image src={googlePlay} width={220} height={66} alt="Google play store" />
              </DownloadImage>
            </a>
            <a href="https://play.google.com/store/apps">
              <DownloadImage>
                <Image src={appStore} width={220} height={66} alt="Apple Store" />
              </DownloadImage>
            </a>
          </FooterList>
        </FooterSection>
      </FooterUp>
      <FooterDown>
        <Image src={iziwIcon} alt="Iziw Icon" />
        <FooterListFAQ>
          <TextDown>Ajuda</TextDown>
          <Link href="/TermsOfUse">
            <TextDown>Termos de Uso</TextDown>
          </Link>
          <TextDown size={12} key="3">
            Firedev It Solutions 2021 - Todos os Direitos Reservados
          </TextDown>
        </FooterListFAQ>
      </FooterDown>
    </FooterContainer>
  );
};

export default Footer;
