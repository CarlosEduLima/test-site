import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.purple};
  position: relative;
  padding: 55px 0;
  margin: 0;
  margin-top: 113px;
  z-index: -10;
`;

export const LeftSide = styled.div`
  flex: 0.5;
`;

export const RightSide = styled.div`
  flex-direction: column;
  flex: 1;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  line-height: 34px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 27px;
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: -15px;
`;

export const BgDetailsConfig = styled.div`
  background: linear-gradient(180deg, ${colors.purple}50, ${colors.blue}50);
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
