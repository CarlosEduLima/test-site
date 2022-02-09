import React from 'react';
import { ContainerBar, FilterBar, LabelBar } from './styles';

interface Props {
  numberProgress: number;
}

export const BarProgress: React.FC<Props> = ({ numberProgress }) => {
  return (
    <ContainerBar>
      <FilterBar numberProgress={numberProgress}>
        <LabelBar />
      </FilterBar>
    </ContainerBar>
  );
};
