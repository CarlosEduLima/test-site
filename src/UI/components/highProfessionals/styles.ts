import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import top from '../../../assets/highProfessionals.png';
import backgroundHome from '../../../assets/backgroundHome.png';

export const TopImg = styled.div`
  display: flex;
  justify-content: center;
  background: url(${top.src}) no-repeat;
  width: 100%;
  height: 973px;
  background-size: cover;
  
  @media (max-width: 840px) {
    background: url(${backgroundHome.src}) no-repeat;
    width: 100%;
    background-size: cover;
    height: 500px;  
  }
`;

export const CenterProfessional = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;

  @media (max-width: 840px) {
    padding: 25px;
    margin-top: 150px;
  }
`;

export const SubTitleProfessional = styled.h1`
  font-size: 35px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 48px;
  text-align: center;

  span {
    font-weight: 700;
  }

  @media (max-width: 840px) {
    font-size: 25px;
  }
`;

export const ContainerButton = styled.div`
  width: 80%;
  margin-top: 10px;
`;