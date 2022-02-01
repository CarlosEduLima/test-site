import fonts from '../../../../utils/fonts';
import styled from 'styled-components';
import colors from '../../../../utils/colors';

export const Title = styled.p`
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  max-width: 390px;
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 16px;
  text-align: center;
  &.noMargin {
    margin-top: 0px;
  }
  &.marginDescription {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  font-family: ${fonts.regular};
  font-size: 20px;
  background: ${colors.lightBlue};
  width: 350px;
  height: 50px;
  border: 0px;
  border-radius: 10px;
  text-align: center;
  ::placeholder {
    color: ${colors.gray};
  }
`;
