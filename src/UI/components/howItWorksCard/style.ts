import styled from 'styled-components';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 80%;
  width: 30%;

  padding: 0 5px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-family: ${fonts.regular};
`;
