import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Input from '../Input';
import { Button } from '../Button';
import { TopImg, CenterProfessional, SubTitleProfessional } from './styles';
import { Services } from 'src/services/services';

export const HighProfessionals: React.FC = () => {

    const [data, setData] = useState([]);

    const AllServices = async () => {
        const response: any = await Services();
        setData(response.flatMap(item => item.sub_services).concat(response.map(item => { return { name: item.name } })).map(item => item.name).sort().slice(0, 4));
    };

    useEffect(() => {
        AllServices()
    }, []);

    return (
        <TopImg>
            <CenterProfessional>
                <SubTitleProfessional>Os <span>melhores profissionais,</span> a um clique de distância.</SubTitleProfessional>
                <Input
                    name='search'
                    icon='search'
                    placeholder='O que você precisa hoje?'
                    dataSearch={data}
                />
                <Link href="/Login">
                    <Button children={'Encontre um profissional'} variant={'primary'} widthCircle={''} heightCircle={''} />
                </Link>
            </CenterProfessional>
        </TopImg>
    );
};