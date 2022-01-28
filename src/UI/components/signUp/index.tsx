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
  Box,
  Container,

  ContainerText,
  Text,
  styleInput,
  styleError,
  ContainerImageStore,
} from './styles';
import { Button } from '../Button';

export default function App() {

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [resp, setResp] = useState({});

  const steps = [
    <StepOne next={handleNext} data={data} key={0} />,
    <StepTwo next={handleNext} data={data} key={1} />,
    <StepThree key={2} resp={resp} />,
  ];

  async function makeRequest(formData: IRegisterUserProps) {
    try {
      const resposta = await RegisterUser(formData);
      setResp(resposta)

      return resposta;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleNext(newData: IRegisterUserProps, final = false) {
    console.log(currentStep);
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      const resposta = await makeRequest(newData);
      if (resposta) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }
  return <div className="App">{<Container>{steps[currentStep]}</Container>}</div>;
}

const nameRegex = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const userSchema = yup.object({
  name: yup
    .string()
    .required('Preencha o campo Nome')
    .matches(nameRegex, 'O nome deve ser padronizado'),
  email: yup.string().email('Email inválido').required('Preencha o campo de e-mail'),
  phone: yup
    .string()
    .required('Preencha o campo telefone')
    .max(11, 'O telefone precisa 11 caracteres')
    .matches(phoneRegex, 'O número informado não é um número válido'),
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
            <Logo src={LogoImg} alt="Search" />
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
    .required('Preencha o campo da senha')
    .matches(
      senhaRegex,
      'A senha deve conter letras minúscula, maiúscula e caracteres especiais',
    ),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Verifique as senhas')
    .required('Por favor, confirme a senha'),
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
            <Logo src={LogoImg} alt="Search" />
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
                name="password_confirmation"
                style={styleInput(errors.password_confirmation)}
                type="password"
                placeHolder="Insira a senha novamente"
              />
              <ErrorMessage name="password_confirmation">
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

const StepThree = (props) => {

  return (
    <>
      {
        props.resp !== undefined && props.resp.message !== undefined &&
        (<Box>
          <Logo src={Check} alt="Search" />

          <ContainerText>
            <Text>Recebemos seu cadastro! Para continuar, baixe já o aplicativo.</Text>
          </ContainerText>

          <ContainerImageStore>
            <Logo src={googlePlay} alt="googlePlay" />
            <Logo src={AppStore} alt="AppStore" />
          </ContainerImageStore>
        </Box>)
      }
    </>
  );
};
