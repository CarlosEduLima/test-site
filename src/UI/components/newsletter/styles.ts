import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import NextImage from 'next/image';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  position: relative;
`;

export const LeftContent = styled.div`
  padding: 123px 83px 123px 128px;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
`;

export const TextTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${fonts.bold};
  font-size: 40px;
  line-height: 54px;
  color: ${colors.white};
  margin-bottom: 15px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${fonts.regular};
  font-size: 30px;
  line-height: 41px;
  color: ${colors.white};
  margin-bottom: 15px;
`;

export const RightContent = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 29px 0px 36px 83px;
`;

export const ImageBg = styled.div`
  width: 385px;
  height: 385px;
  background-color: ${colors.darkBlue};
  position: absolute;
  bottom: 42px;
  border-radius: 50%;
`;

export const Image = styled(NextImage)`
  position: absolute;
  bottom: 0px;
`;
