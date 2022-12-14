import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${fonts.extraBold};
  color: ${colors.black};
  font-size: 25px;

  @media (max-width: 840px) {
    font-size: 20px; 
  }
`;

export const Divider = styled.div`
  width: 130px;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  
  @media(max-width: 840px) {
    margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 281px;
  margin-bottom: 60px;
`;

export const ScrollAreaContainer = styled.div`
  margin: 45px 0;
  width: 100%;

  @media (max-width: 840px) {
    margin: 20px 0;
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
