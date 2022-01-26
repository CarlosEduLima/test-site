import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import top from '../../../assets/highProfessionals.png';

export const TopImg = styled.div`
  width: 100%;
  height: 973px;
  background: url(${top.src}) no-repeat;
  display: flex;
  justify-content: center;
  background-size: cover;
`;

export const CenterProfessional = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitleProfessional = styled.h1`
  font-size: 35px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 48px;
  text-align: center;
  margin-bottom: 270px;

  span {
    font-weight: 800;
  }
`;