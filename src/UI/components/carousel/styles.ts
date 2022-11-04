import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 25px;
`;

export const Container = styled.div`
  margin: 45.5px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 130px;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  margin-bottom: 30px;
`;

export const ScrollAreaContainer = styled.div`
  padding-bottom: 20px;
  margin: 45px 0;
  width: 100%;

  @media (max-width: 840px) {
    margin: 5px 0;
    margin-bottom: 0px;
    padding: 0px;
  }
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
