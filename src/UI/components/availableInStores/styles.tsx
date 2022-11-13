import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: ${colors.purple};
  position: relative;
  padding: 55px 0 0 0;
  margin-top: 80px;
  z-index: 1;
  @media (max-width: 800px) {
    margin-top: 0;
    padding: 40px 0 0 0;
  }
`;

export const LeftSide = styled.div`
  flex: 0.5;
  margin-top: -210px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  flex-direction: column;
  flex: 1;
  max-width: 500px;
  padding-bottom: 55px;

  @media (max-width: 800px) {
    padding: 0 20px 55px 20px;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  line-height: 34px;
  margin: 5px 0;

  @media (max-width: 500px) {
    font-size: 20px;
    text-align: center;
    margin-top: 0;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 27px;
  margin-top: 20px;
  margin-bottom: 50px;

  @media (max-width: 840px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 840px) {
    justify-content: center;
  }
`;

export const BgDetailsConfig = styled.div`
  background: linear-gradient(180deg, ${colors.purple} 0%, ${colors.blue} 100%);
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

export const BgDetailsOne = styled(BgDetailsConfig)`
  border-radius: 67px 0 0 67px;
  width: 380px;
  height: 92px;
  bottom: 50px;
  right: 0;

  @media (max-width: 840px) {
    border-radius: 22px;
    width: 159px;
    height: 46px;
    bottom: 100px;
  }
`;

export const BgDetailsTwo = styled(BgDetailsConfig)`
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  width: 50px;
  height: 100px;
  bottom: 109px;

  @media (max-width: 840px) {
    bottom: 300px;
    height: 49px;
    width: 49px;
    border-radius: 100px;
    left: -15px;
  }
`;

export const BgDetailsThree = styled(BgDetailsConfig)`
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  width: 75px;
  height: 147px;
  top: 35px;
  right: 0;

  @media (max-width: 840px) {
    height: 49px;
    width: 25px;
    top: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: none;
  
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    margin-top: 30px;
  }
`;
