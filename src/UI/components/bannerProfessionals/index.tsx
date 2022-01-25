import React from 'react';
import { Top, TextWhite, SubTitleWhite, TopCenter } from './styles';

const bannerProfessionals: React.FC = () => {
  return (
    <Top>
      <TopCenter>
        <SubTitleWhite>Profissionais verificados</SubTitleWhite>
        <TextWhite>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </TextWhite>
      </TopCenter>
    </Top>
  );
};

export default bannerProfessionals;
