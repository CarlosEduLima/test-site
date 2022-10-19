import React from 'react';
import { StarYellow } from '../../../assets/starYellow.tsx';
import { StarBlue } from '../../../assets/StarBlue.tsx';
import * as S from './styles';

interface CardProps {
  description: string;
  nameProfessional: string;
  numberRating: number;
}

export const CardRating = ({ description, nameProfessional, numberRating }: CardProps) => {
  const filterRating = Math.round(numberRating);

  const RenderStars = () => {
    const render = [];

    for (let i = 0; filterRating > i; i++) {
      render.push(<StarYellow />);
    }
    for (let i = 5; filterRating < i; i--) {
      render.push(<StarBlue />);
    }

    return render || <></>;
  };

  return (
    <S.ContainerCard>
      <S.ContainerHeader>
        <S.Description>{description}</S.Description>
      </S.ContainerHeader>
      <S.ContainerFooter>
        <S.Name>{nameProfessional}</S.Name>
        <S.ContainerRating>
          <S.NumberRating>{numberRating}</S.NumberRating>
          <div>{RenderStars()}</div>
        </S.ContainerRating>
      </S.ContainerFooter>
    </S.ContainerCard>
  );
};
