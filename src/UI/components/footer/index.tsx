import Image from 'next/image';
import React from 'react';

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
  const institucionalItens = ['Quem Somos', 'Trabalhe Conosco', 'Profissionais Verificados'];
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
  const footerFAQ = [
    'Ajuda',
    'Termos de Uso',
    'Firedev It Solutions 2021 - Todos os Direitos Reservados',
  ];

  return (
    <FooterContainer>
      <FooterUp>
        <FooterSection width="300px">
          <TextUp>Categorias</TextUp>
          <FooterList>
            {categoriasItens.map(item => <TextDown>{item}</TextDown>)}
          </FooterList>
        </FooterSection>
        <FooterSection>
          <TextUp>Institucional</TextUp>
          <FooterList>
            {institucionalItens.map(item => <TextDown>{item}</TextDown>)}
          </FooterList>
        </FooterSection>
        <FooterSection>
          <TextUp>Redes Sociais</TextUp>
          <FooterList>
            <FooterListImg>
              {imagensSociais.map((item) => (
                <ImageLocalDiv key={item.name}>
                  <ImageLocal>
                    {item.name === 'facebook' ? (
                      <Image src={item.local} width={15} height={30} />
                    ) : (
                      <Image src={item.local} height={500} />
                    )}
                  </ImageLocal>
                </ImageLocalDiv>
              ))}
            </FooterListImg>
            <TextUp>Parcerias</TextUp>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <TextUp>Downloads</TextUp>
          <FooterList>
            <DownloadImage>
              <Image src={googlePlay} width={150} height={50} />
            </DownloadImage>
            <DownloadImage>
              <Image src={appStore} width={150} height={50} />
            </DownloadImage>
          </FooterList>
        </FooterSection>
      </FooterUp>
      <FooterDown>
        <Image
          src={iziwIcon}
        />
        <FooterListImg>
          {footerFAQ.map(item => (
            <TextDown>{item}</TextDown>
          ))}
        </FooterListImg>
      </FooterDown>
    </FooterContainer>
  )
};

export default Footer;
