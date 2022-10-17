import React from 'react';
import colors from 'src/utils/colors';
import { StarIcon } from '../iconStar/icon';
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
            render.push(
                // <StarIcon color={colors.yellow} key={i} size={17} />
            );
        }
        for (let i = 5; filterRating < i; i--) {
            render.push(
                // <StarIcon color={colors.labelInput} key={i} size={17} />
            );
        }

        return render || <></>;
    };


    // *********** TIRAR COMPONENTE DA HOME ****************** //
    // *********** COMPONENTE StarIcon ****************** //

    return (
        <S.ContainerCard>
            <S.ContainerHeader>
                <S.Description>{description}</S.Description>
            </S.ContainerHeader>
            <S.ContainerFooter>
                <S.Name>{nameProfessional}</S.Name>
                <S.ContainerRating>
                    <S.NumberRating>{numberRating}</S.NumberRating>
                    {RenderStars()}
                </S.ContainerRating>
            </S.ContainerFooter>
        </S.ContainerCard>
    )
}