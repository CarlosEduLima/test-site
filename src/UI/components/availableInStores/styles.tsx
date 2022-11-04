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
  max-width: 485px;
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
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 27px;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
  margin-left: -15px;
  margin-bottom: 20px;
  @media (max-width: 500px) {
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
  width: 309px;
  height: 92px;
  bottom: 37px;
  right: 0;
`;

export const BgDetailsTwo = styled(BgDetailsConfig)`
  border-radius: 0 67px 67px 0;
  width: 40px;
  height: 97px;
  bottom: 109px;
  left: 0;
`;

export const BgDetailsThree = styled(BgDetailsConfig)`
  border-radius: 67px 0 0 67px;
  width: 65px;
  height: 97px;
  top: 40px;
  right: 0;
`;

export const ButtonContainer = styled.div`
  display: none;
  
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    padding: 0 30px;
  }
`;
