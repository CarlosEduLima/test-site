import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const TitleText = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 30px;
`;
export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.LightBlue};
`;
