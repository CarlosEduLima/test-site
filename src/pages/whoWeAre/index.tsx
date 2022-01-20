import React from 'react';
import { Top, TextWhite, SubTitleWhite, TopCenter } from './styles';

export const WhoWeAre: React.FC = () => {
  return (
    <Top>
      <TopCenter>
        <SubTitleWhite>Quem somos</SubTitleWhite>
        <TextWhite>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </TextWhite>
      </TopCenter>
    </Top>
  );
};
