import styled from 'styled-components';
import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';

export const Card = styled.div`
  height: 410px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
  background: ${colors.white};
  color: ${colors.black};
  filter: drop-shadow(0px 3.39496px 6.78992px rgba(0, 0, 0, 0.161));
  border-radius: 10px;
`;

export const Imagebackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Name = styled.div`
  font-family: ${fonts.heading};
  font-size: 34px;
  margin-top: 30px;
`;
