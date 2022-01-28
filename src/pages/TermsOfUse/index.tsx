import React from 'react';
import { HeaderContainer } from './styles';
import { Header } from 'src/UI/components/Header';
import { Newsletter } from 'src/UI/components/newsletter';
import Footer from 'src/UI/components/footer';


const TermsOfUse: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>

            {/*  *** COMPONENTE TERMOS DE USO *** */}

            <Newsletter />
            <Footer />
        </>
    );
};

export default TermsOfUse;