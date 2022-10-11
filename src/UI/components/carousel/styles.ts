import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 25px;
`;

export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 124px;
  height: 0;
  border: 1px solid ${colors.lightBlue};
`;

export const HorizontalScrollArea = styled.div<{
  alignCenter: boolean;
}>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.alignCenter === true ? 'center' : 'flex-start')};
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
