import React from 'react';
import { HeaderContainer } from './styles';
import { Header } from 'src/UI/components/Header';
import SignUp from 'src/UI/components/signUp';

const RegisterUser: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <SignUp />
    </>
  );
};

export default RegisterUser;
