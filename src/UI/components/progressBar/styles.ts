import styled from 'styled-components';
import colors from '../../../utils/colors';

export interface PropsStyle {
  numberProgress: number;
}

export const Container = styled.div`
  margin: 45.5px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerBar = styled.div`
  height: 6px;
  width: 910px;
  background-color: ${colors.lightBlue3};
  border-radius: 50px;
  margin: 50px;
`;

export const FilterBar = styled.div<PropsStyle>`
  height: 100%;
  width: ${({ numberProgress }) => numberProgress}%;
  background-color: ${colors.purple};
  border-radius: inherit;
  text-align: right;
`;

export const LabelBar = styled.span`
  padding: 5px;
  color: ${colors.white};
  font-weight: bold;
`;
