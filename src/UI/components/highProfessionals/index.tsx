import React from 'react';
import { TopImg, CenterProfessional, SubTitleProfessional } from './styles';


export const HighProfessionals: React.FC = () => {
    return (
        <TopImg>
            <CenterProfessional>
                <SubTitleProfessional>Os <span>melhores profissionais,</span> a um clique de distância.</SubTitleProfessional>
            </CenterProfessional>
        </TopImg>
    );
};