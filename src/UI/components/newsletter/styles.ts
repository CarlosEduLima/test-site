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
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

export const LeftContent = styled.div`
  padding: 123px 83px 123px 128px;
  display: flex;
  flex-direction: column;
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
  width: 625px;
  font-size: 30px;
  line-height: 41px;
  color: ${colors.white};
  margin-bottom: 15px;
`;

export const RightContent = styled.div`
  position: relative;
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

export const InteractionContainer = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled(NextImage)`
  position: absolute;
  bottom: 0px;
`;

const BgDetail = styled.div`
  opacity: 0.5;
  background: linear-gradient(180deg, ${colors.darkBlue} 0%, ${colors.blue} 100%);
  position: absolute;
  z-index: -1;
`;

export const BgDetailOne = styled(BgDetail)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: ${colors.darkBlue};
  top: 50px;
  right: 85%;
`;

export const BgDetailTwo = styled(BgDetail)`
  height: 80px;
  width: 80px;
  border-top-right-radius: 80px;
  background: ${colors.darkBlue};
  bottom: 0px;
  left: 0px;
`;

export const BgDetailThree = styled(BgDetail)`
  height: 96px;
  width: 205px;
  border-top-left-radius: 96px;
  border-bottom-left-radius: 96px;
  top: 50px;
  right: 0;
`;

export const BgDetailFour = styled(BgDetail)`
  height: 96px;
  width: 512px;
  border-top-right-radius: 96px;
  border-bottom-right-radius: 96px;
  top: 0;
  left: -138px;
`;

export const BgDetailFive = styled(BgDetail)`
  height: 96px;
  width: 412px;
  border-radius: 96px;
  bottom: 40px;
  right: 25%;
`;
