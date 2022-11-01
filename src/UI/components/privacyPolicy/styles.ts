import styled from 'styled-components';
import fonts from '../../../utils/fonts';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font: ${fonts.bold};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 35.81px;

  @media (max-width: 840px) {
    font-size: 23px;
  }
`;

export const Border = styled.div`
  padding-bottom: 40px;
  border-top: 3.07692px solid #29abe2;
  width: 200px;

  @media (max-width: 840px) {
    border-top: 1px solid #29abe2;
    width: 150px;
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  padding: 15px 10% 100px;
  font: ${fonts.regular};
  font-size: 25px;
  line-height: 34.1px;
  width: 100%;

  @media (max-width: 840px) {
    font-size: 16px;
  }

  span.crosshair {
    cursor: crosshair;
  }
`;

export const Break = styled.div`
  margin: 30px 0;
  width: 100%;
`;

export const Site = styled.div`
  width: 100%;
  text-align: center;
`;
