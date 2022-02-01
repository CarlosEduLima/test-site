import styled from 'styled-components';
import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 2px solid ${colors.blue};
`;

export const Subtitle = styled.p`
  font-family: ${fonts.bold};
  font-size: 18px;
  text-align: center;
  color: ${colors.black};
  margin: 30px 0px;
  max-width: 770px;
`;
