import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  background-color: ${colors.blue};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  overflow: auto;
  --ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LeftContent = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 840px) {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const TextTitle = styled.h1`
  font-family: ${fonts.bold};
  font-size: 40px;
  line-height: 54px;
  color: ${colors.white};
  margin-bottom: 15px;

  @media (max-width: 840px) {
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
    line-height: 31px;
    width: 100vw;
  }
`;

export const Text = styled.p`
  font-family: ${fonts.regular};
  max-width: 625px;
  font-size: 30px;
  line-height: 41px;
  color: ${colors.white};
  margin-top: 15px;
  margin-bottom: 15px;

  @media (max-width: 840px) {
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const RightContent = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 29px 83px 36px 83px;
`;

export const ElementBall = styled.div`
  width: 385px;
  height: 385px;
  background-color: ${colors.darkBlue};
  position: absolute;
  bottom: 42px;
  border-radius: 50%;

  @media (max-width: 840px) {
    height: 212px;
    width: 212px;
    bottom: 65px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;

    @media (max-width: 840px) {
    display: flex;
    height: 268px;
    width: 214px;
    margin-bottom: 30px;
  }
`;

export const InteractionContainer = styled.div`
  width: 410px;
  margin-top: 30px;

  @media (max-width: 840px) {
    padding: 0 24px;
    width: 100vw;
    height: 40px;
  }
`;

const BgDetail = styled.div`
  opacity: 0.5;
  background: linear-gradient(180deg, ${colors.darkBlue} 0%, ${colors.blue} 100%);
  position: absolute;
  z-index: -1;
`;

export const ElementMiniBall = styled(BgDetail)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: ${colors.darkBlue};
  top: 50px;
  right: 85%;

  @media (max-width: 840px) {
    height: 60px;
    width: 60px;
    right: 70%;
    top: 25px;
  }
`;

export const ElementBallFooter = styled(BgDetail)`
  height: 80px;
  width: 80px;
  border-top-right-radius: 80px;
  background: ${colors.darkBlue};
  bottom: 0px;
  left: 0px;

  @media (max-width: 840px) {
    display: flex;
    height: 40px;
    width: 40px;
  }
`;

export const ElementRectangleRight = styled(BgDetail)`
  height: 96px;
  width: 405px;
  border-top-left-radius: 96px;
  border-bottom-left-radius: 96px;
  top: 50px;
  left: 85%;

    @media (max-width: 840px) {
    height: 43px;
    width: 212px;
    left: 65%;
    top: 15px;
  }
`;

export const ElementRectangleHeader = styled(BgDetail)`
  height: 96px;
  width: 512px;
  border-top-right-radius: 96px;
  border-bottom-right-radius: 96px;
  top: 0;
  left: -138px;

  @media (max-width: 840px) {
    display: flex;
    height: 40px;
    width: 217px;
    left: -70px;
  }
`;

export const ElementRectangleCenter = styled(BgDetail)`
  height: 96px;
  width: 412px;
  border-radius: 96px;
  bottom: 40px;
  right: 35%;

  @media (max-width: 840px) {
    display: flex;
    height: 40px;
    width: 230px;
    right: 50%;
    top: 255px;
  }
`;
