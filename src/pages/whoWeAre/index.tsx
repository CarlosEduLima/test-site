import React from 'react';
import Link from 'next/link';
import {
  Container,
  ContentLine,
  Text,
  Divider,
  SubTitle,
  Title,
  Image,
  SubContentRight,
  SubContentLeft,
  Top,
  StyledLink,
} from './styles';
import top from '../../assets/top.png';
import askingQuestions from '../../assets/asking-questions.png';
import startupIdea from '../../assets/startup-idea.png';
import workRiskFree from '../../assets/work-risk-free.png';

export const WhoWeAre: React.FC = () => {
  return (
    <Container>
      <Top>
        <SubTitle>Quem somos</SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </Text>
      </Top>
      <Title>A Iziw</Title>
      <Divider />
      <ContentLine>
        <SubContentLeft>
          <Image src={askingQuestions} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>Quem somos</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <SubTitle>Como surgiu</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </SubContentLeft>
        <SubContentRight>
          <Image src={workRiskFree} alt="" />
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <Image src={startupIdea} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>O que fazemos</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </SubContentRight>
      </ContentLine>
    </Container>
  );
};
