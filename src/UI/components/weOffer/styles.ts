import NextImage from 'next/image';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import column from '../../../assets/colunm.svg';
import circle from '../../../assets/circle.svg';
import half from '../../../assets/half.svg';

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
  padding: 50px 0 50px 0;
  position: relative;
  background-image: url(${column.src}), url(${circle.src}), url(${half.src});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 80px, 80px, 220px;
  background-position: top -35px left 60px, top 400px left 60px, bottom 70px right -10px;
`;
export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.blue};
`;
export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SubContent = styled.div`
  flex: -1;
  max-width: 500px;
`;
export const SubContentLeft = styled(SubContent)`
  height: 155px;
  width: 155px;
  background-color: #e0f7fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 40px;
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
