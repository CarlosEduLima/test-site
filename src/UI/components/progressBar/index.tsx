import React from 'react';
import { Container } from './styles';
import { BarProgress } from './bar';

export const ProgressBarContent: React.FC = () => {
  return (
    <Container>
      <BarProgress numberProgress={10} />
    </Container>
  );
};
