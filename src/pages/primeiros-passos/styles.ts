import styled from 'styled-components';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import firstStep from '../../assets/firstStep.png';

export const HeaderContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9999;
`;

export const NewsletterContainer = styled.div`
  margin-top: 100px;
`;

export const Top = styled.div`
  width: 100%;
  height: 490px;
  background: linear-gradient(#373aadaa, #373aadaa), url(${firstStep.src}) no-repeat;
  display: flex;
  justify-content: center;
  background-size: cover;
`;

export const TopCenter = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
`;

export const TextWhite = styled.p`
  font-size: 20px;
  line-height: 34px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  max-width: 500px;
`;

export const SubTitleWhite = styled.h1`
  font-size: 30px;
  font-family: ${fonts.heading};
  color: ${colors.white};
  margin-bottom: 40px;
`;
