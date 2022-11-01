import React from 'react';
import * as S from './styles';
import { Header } from 'src/UI/components/Header';
import { Newsletter } from 'src/UI/components/newsletter';
import { PrivacyPolicy } from 'src/UI/components/privacyPolicy';
import Footer from 'src/UI/components/footer';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <Header />
            <S.ContainerTermsOfUser>
                <PrivacyPolicy />
            </S.ContainerTermsOfUser>
            <Newsletter />
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;
