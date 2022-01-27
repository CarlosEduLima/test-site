import React from 'react';
import { Button } from '../Button';
import { TopImg, CenterProfessional, SubTitleProfessional } from './styles';


export const HighProfessionals: React.FC = () => {
    return (
        <TopImg>
            <CenterProfessional>
                <SubTitleProfessional>Os <span>melhores profissionais,</span> a um clique de distância.</SubTitleProfessional>
                <SubTitleProfessional>***Adicionar Input***</SubTitleProfessional>
                <Button children={'Encontre um profissional'} variant={'primary'} widthCircle={''} heightCircle={''} />
            </CenterProfessional>
        </TopImg>
    );
};