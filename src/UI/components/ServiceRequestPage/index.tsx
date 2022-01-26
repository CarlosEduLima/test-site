/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import LogoImg from '../../../assets/icon.png';
import Check from '../../../assets/check.png';
import AppStore from '../../../assets/AppStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import { RegisterUser, IRegisterUserProps } from 'src/services/auth';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  BoxButton,
  BoxInput,
  Logo,
  ContainerImageGooglePlay,
  Box,
  Container,
  ContainerImage,
  ContainerText,
  Text,
  styleInput,
  styleError,
} from './styles';
import { Button } from '../Button';

export default function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirm: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  //Passos para percorrer as etapas do formulario
  const steps = [
    <StepOne next={handleNext} data={data} key={0} />,
    <StepTwo next={handleNext} data={data} key={1} />,
    <StepThree key={2} />,
  ];

  //Requisição da API
  async function makeRequest(formData: IRegisterUserProps) {
    try {
      await RegisterUser(formData);
      setCurrentStep((prevState) => prevState + 1);
    } catch {
      console.log('Erro');
    }
  }
  //Função para mover as paginas e pedir a requisição quando for a penultima tela
  function handleNext(newData: IRegisterUserProps, final = false) {
    console.log(currentStep);
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      setCurrentStep((prev) => prev + 1);
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  }

  return <div className="App">{<Container>{steps[currentStep]}</Container>}</div>;
}

const nameRegex = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const userSchema = yup.object({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .matches(nameRegex, 'O nome deve ser padronizado'),
  email: yup.string().email('Email inválido').required('Preencha o campo de e-mail!'),
  phone: yup
    .string()
    .required('O telefone é obrigatório')
    .max(10, 'O telefone precisa ter menos de 10 caracteres')
    .matches(phoneRegex, 'O seu número não é um número válido'),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik validationSchema={userSchema} initialValues={props.data} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Box>
          <Form>
            <ContainerImage>
              <Logo src={LogoImg} alt="Search" />
            </ContainerImage>
            <ContainerText>
              <Text>
                Cadastre-se e tenha acesso
                <br />a milhares de oportunidades!
              </Text>
            </ContainerText>
            <BoxInput>
              <Field name="name" style={styleInput(errors.name)} placeHolder="Nome" />
              <ErrorMessage name="name">
                {(msg) => <div style={styleError}>{msg}</div>}
              </ErrorMessage>
            </BoxInput>

            <BoxInput>
              <Field name="email" style={styleInput(errors.email)} placeHolder="Email" />
              <ErrorMessage name="email">
                {(msg) => <div style={styleError}>{msg}</div>}
              </ErrorMessage>
            </BoxInput>

            <BoxInput>
              <Field name="phone" style={styleInput(errors.phone)} placeHolder="Celular" />
              <ErrorMessage name="phone">
                {(msg) => <div style={styleError}>{msg}</div>}
              </ErrorMessage>
            </BoxInput>

            <BoxButton>
              <Button
                variant={'primary'}
                children={'Prosseguir'}
                height={'54px'}
                widthCircle={''}
                heightCircle={''}
              />
            </BoxButton>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&-/]{8,}$/;
const userSchema2 = yup.object({
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('Preencha o campo de senha!')
    .matches(
      senhaRegex,
      'A senha deve conter letras minúscula, maiúscula, letras e caracteres especiais',
    ),
  confirm_password: yup.string().required('Por favor, confirme a senha'),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
    props.next(values, true);
  };

  return (
    <Formik validationSchema={userSchema2} initialValues={props.data} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Box>
          <Form>
            <ContainerImage>
              <Logo src={LogoImg} alt="Search" />
            </ContainerImage>
            <ContainerText>
              <Text>
                Cadastre-se e tenha acesso
                <br />a milhares de oportunidades!
              </Text>
            </ContainerText>
            <BoxInput>
              <Field
                name="password"
                style={styleInput(errors.password)}
                type="password"
                placeHolder="Senha"
              />
              <ErrorMessage name="password">
                {(msg) => <div style={styleError}>{msg}</div>}
              </ErrorMessage>
            </BoxInput>
            <BoxInput>
              <Field
                name="confirm_password"
                style={styleInput(errors.confirm_password)}
                type="password"
                placeHolder="Insira a senha novamente"
              />
              <ErrorMessage name="confirm_password">
                {(msg) => <div style={styleError}>{msg}</div>}
              </ErrorMessage>
            </BoxInput>
            <BoxButton>
              <Button
                variant={'primary'}
                children={'Cadastrar'}
                height={'54px'}
                widthCircle={''}
                heightCircle={''}
              />
            </BoxButton>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

const StepThree = () => {
  return (
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
  );
};
