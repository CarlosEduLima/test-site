import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import NextImage from 'next/image';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 30px;
  text-align: center;
`;
export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`;
export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.lightBlue};
`;
export const ContentLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export const SubContent = styled.div`
  max-width: 500px;
`;
export const SubContentLeft = styled(SubContent)`
  max-width: 500px;
`;
export const SubContentRight = styled(SubContent)`
  max-width: 500px;
`;
export const SubTitle = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.purple};
`;
export const Text = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  margin-bottom: 55px;
`;
export const StyledLink = styled.a`
  font-size: 25px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
`;
export const Image = styled(NextImage)`
  width: 545px;
`;
export const ContentLineReverse = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: center;
`;
