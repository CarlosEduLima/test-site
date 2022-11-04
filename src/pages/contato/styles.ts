import styled from 'styled-components';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import firstStep from '../../assets/top.png';
import backgroundContact from '../../assets/backgroundContact.png';

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

  @media (max-width: 840px) {
    background: url(${backgroundContact.src}) no-repeat;
    width: 100%;
    background-size: cover;
    height: 400px;  
    margin-bottom: 30px;
  }
`;

export const TopCenter = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
`;

export const SubTitleWhite = styled.h1`
  font-size: 35px;
  font-family: ${fonts.heading};
  color: ${colors.white};
  margin-bottom: 40px;

  @media (max-width: 840) {
    font-size: 24px;
  }
`;

export const TextWhite = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  max-width: 400px;

  @media (max-width: 840) {
    font-size: 16px;
  }
`;


