import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 25px;
  font-weight: 700;
`;

export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 125px;
  height: 0;
  border: 2px solid ${colors.blue};
`;

export const HorizontalScrollArea = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollAreaContainer = styled.div`
  margin: 47px 0;
  width: 100%;
`;

export const ButtonRegister = styled.button`
  width: 280px;
  height: 37px;
  background: ${colors.blue};
  color: ${colors.white};
  border: 0px;
  border-radius: 30px;
  font-family: ${fonts.regular};
  font-size: 14px;
  cursor: pointer;
  :active {
    background: ${colors.darkBlue};
  }
`;
