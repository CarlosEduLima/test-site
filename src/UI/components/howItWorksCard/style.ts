import styled from 'styled-components';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 70%;
  width: 30%;

  padding: 0 5px;

  @media (max-width: 800px) {
    width: 80%;
    padding: 25px 5px;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-family: ${fonts.regular};

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;
