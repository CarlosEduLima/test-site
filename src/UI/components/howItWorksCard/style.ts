import styled from 'styled-components';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 30%;

  padding: 0 5px;

  @media (max-width: 800px) {
    width: 80%;
    padding: 0px 5px;
    padding-top: 40px;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-family: ${fonts.regular};
  padding: 20px 0px;
`;
