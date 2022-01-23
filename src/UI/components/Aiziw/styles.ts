import NextImage from 'next/image';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 30px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 50px 0;
`;
export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.blue};
`;
export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const SubContent = styled.div`
  align-self: flex-end;
  flex: 1;
  max-width: 500px;
`;
export const SubContentLeft = styled(SubContent)`
  text-align: right;
`;
export const SubContentRight = styled(SubContent)`
  text-align: left;
`;
export const SubTitle = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.purple};
  margin-top: 70px;
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