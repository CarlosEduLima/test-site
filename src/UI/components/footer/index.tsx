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
  FooterListFAQ,
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
        <FooterSection width={300}>
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
                      <Image src={item.local} width={11} height={23} />
                    ) : (
                      <Image src={item.local} height={500} />
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
            <DownloadImage>
              <Image src={googlePlay} width={220} height={66} />
            </DownloadImage>
            <DownloadImage>
              <Image src={appStore} width={220} height={66} />
            </DownloadImage>
          </FooterList>
        </FooterSection>
      </FooterUp>
      <FooterDown>
        <Image src={iziwIcon}/>
        <FooterListFAQ>
          {footerFAQ.map(item => (
            <TextDown key={item.length}>{item}</TextDown>
          ))}
        </FooterListFAQ>
      </FooterDown>
    </FooterContainer>
  );
};

export default Footer;
