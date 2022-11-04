import React from 'react';
import { TopWork, TextWhite, SubTitleWork, TopCenterWork } from './styles';

export const WorkWithUs: React.FC = () => {
  return (
    <TopWork>
      <TopCenterWork>
        <SubTitleWork>Trabalhe conosco</SubTitleWork>
        <TextWhite>
          Deseja trabalhar conosco? Envia seu CV para nós! - Temos que criar um e-mail ou podemos
          deixar os que já existem?
        </TextWhite>
      </TopCenterWork>
    </TopWork>
  );
};
