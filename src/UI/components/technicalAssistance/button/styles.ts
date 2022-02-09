import fonts from '../../../../utils/fonts';
import styled from 'styled-components';
import colors from '../../../../utils/colors';

export const Button = styled.button`
  width: 268px;
  height: 35px;
  font-family: ${fonts.regular};
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.darkBlue};
  border: 0px;
  border-radius: 30px;
  cursor: pointer;
  :active {
    background-color: ${colors.blue};
  }
  &.on {
    margin-top: 90px;
  }
  &.off {
    margin-top: 0px;
  }
`;
