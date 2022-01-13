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
`;
export const Border = styled.div`
  padding-bottom: 40px;
  border-top: 3.07692px solid #29abe2;
  width: 200px;
`;

export const Container = styled.div`
  top: 0;
  overflow-y: scroll;
  height: 800px;
  padding: 15px 10% 100px;
  font: ${fonts.regular};
  font-size: 25px;
  line-height: 34.1px;
  cursor: pointer;
  width: 100%;
`;
