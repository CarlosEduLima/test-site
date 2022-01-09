/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import LogoImg from '../../../assets/icon.png';
import Check from '../../../assets/check.png';
import AppStore from '../../../assets/AppStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import {
  Logo,
  Input,
  ContainerImageGooglePlay,
  Form,
  Box,
  Container,
  ContainerImage,
  ContainerText,
  Text,
} from './Styled';
import { Button } from '../Button';

const steps = [
  {
    id: 'screenEmailCel',
    title: 'Dados de cadastro',
  },
  {
    id: 'screenPassword',
    title: 'password',
  },
  {
    id: 'screenFinish',
    title: 'Finish',
  },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    email: '',
    celular: '',
    senha: '',
    senhaAgain: '',
  });

  function handleNext(e) {
    e.preventDefault();
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <Container>
        {steps[currentStep].id === 'screenEmailCel' ? (
          <Box>
            <Form onSubmit={handleNext}>
              <ContainerImage>
                <Logo src={LogoImg} alt="Search" />
              </ContainerImage>

              <ContainerText>
                <Text>
                  Cadastre-se e tenha acesso
                  <br />a milhares de oportunidades!
                </Text>
              </ContainerText>

              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={formValues.email}
                required
              />

              <Input
                type="tel"
                placeholder="Celular"
                name="celular"
                onChange={handleInputChange}
                value={formValues.celular}
                required
              />

              {currentStep < steps.length - 1 && (
                <Button
                  variant={'primary'}
                  children={'Prosseguir'}
                  height={'54px'}
                  widthCircle={''}
                  heightCircle={''}
                />
              )}
            </Form>
          </Box>
        ) : steps[currentStep].id === 'screenPassword' ? (
          <Box>
            <Form onSubmit={handleNext}>
              <ContainerImage>
                <Logo src={LogoImg} alt="Search" />
              </ContainerImage>

              <ContainerText>
                <Text>
                  Cadastre-se e tenha acesso
                  <br />a milhares de oportunidades!
                </Text>
              </ContainerText>
              <Input
                type="password"
                placeholder="Senha"
                name="senha"
                onChange={handleInputChange}
                value={formValues.senha}
                required
              />

              <Input
                type="password"
                placeholder="Insira a senha novamente"
                name="senhaAgain"
                onChange={handleInputChange}
                value={formValues.senhaAgain}
                required
              />
              {currentStep < steps.length - 1 && (
                <Button
                  variant={'primary'}
                  children={'Prosseguir'}
                  height={'54px'}
                  widthCircle={''}
                  heightCircle={''}
                />
              )}
            </Form>
          </Box>
        ) : (
          steps[currentStep].id === 'screenFinish' && (
            <div className="fields">
              <Box>
                <ContainerImage>
                  <Logo src={Check} alt="Search" />
                </ContainerImage>

                <ContainerText>
                  <Text>Recebemos seu cadastro! Para continuar, baixe já o aplicativo.</Text>
                </ContainerText>

                <ContainerImageGooglePlay>
                  <Logo src={googlePlay} alt="googlePlay" />
                </ContainerImageGooglePlay>

                <ContainerImage>
                  <Logo src={AppStore} alt="AppStore" />
                </ContainerImage>
              </Box>
            </div>
          )
        )}
      </Container>
    </div>
  );
}
