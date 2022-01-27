import React from 'react';
import {
  ContentLine,
  Text,
  Divider,
  SubTitle,
  Title,
  Image,
  SubContentRight,
  SubContentLeft,
  Container,
} from './styles';
import ok from '../../../assets/ok.svg';
import lock from '../../../assets/lock.svg';
import money from '../../../assets/money.svg';

const WeOffer: React.FC = () => {
  return (
    <Container>
      <Title>O que Oferecemos</Title>
      <Divider />
      <ContentLine>
        <SubContentLeft>
          <Image src={ok} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>As Melhores Oportunidades</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <Image src={lock} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>Segurança e Confiança</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <Image src={money} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>Comece a lucrar</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </SubContentRight>
      </ContentLine>
    </Container>
  );
};

export default WeOffer;
