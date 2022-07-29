import fonts from 'src/utils/fonts';
import styled from 'styled-components';
import colors from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  height: 490px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  padding: 45px;
  flex-wrap: wrap;
`;

export const CardLink = styled.a`
  font-family: ${fonts.heading};
  font-size: 34px;
`;
