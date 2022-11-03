import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import top from '../../../assets/top.png';
import backgroundContact from '../../../assets/backgroundContact.png';

export const TopWork = styled.div`
  width: 100%;
  height: 490px;
  background: linear-gradient(#373aadaa, #373aadaa), url(${top.src}) no-repeat;
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

export const TopCenterWork = styled.div`
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

  @media (max-width: 840) {
    font-size: 16px;
  }
`;

export const SubTitleWork = styled.h1`
  font-size: 30px;
  font-family: ${fonts.heading};
  color: ${colors.white};
  margin-bottom: 40px;
  margin-top: 40px;

  @media (max-width: 840) {
    font-size: 24px;
  }
`;
