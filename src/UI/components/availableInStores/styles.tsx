import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.purple};
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
  /* border: 1px solid red; */
  align-items: flex-start;
`;
