/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from '../Button';
import {
  Container,
  Title,
  Label,
  Box,
  BoxButton,
  BoxInput,
  styleError,
  styleInput,
  styleTextarea,
} from './styles';

import * as yup from 'yup';
import { PostHekps } from 'src/services/help';

const ContactBox: React.FC = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    subject: '',
    message: '',
    email: '',
    name: '',
  });
  const userSchema = yup.object({
    name: yup.string().required('Preencha o campo Nome'),
    email: yup.string().email('Email inválido').required('Preencha o campo de e-mail'),
    subject: yup.string().required('Preencha o campo Assunto'),
  });

  const handleSubmit = async (data, { resetForm }) => {
    console.log('teste', data);
    setLoading(true);
    try {
      await PostHekps(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      resetForm({ data: '' });
    }
  };
  return (
    <Container>
      <Formik validationSchema={userSchema} initialValues={data} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Box>
            <Form>
              <Title>Enviar email de suporte</Title>
              <Label htmlFor="name">Nome completo</Label>
              <BoxInput>
                <Field name="name" style={styleInput(errors.name)} placeHolder="Nome" />
                <ErrorMessage name="name">
                  {(msg) => <div style={styleError}>{msg}</div>}
                </ErrorMessage>
              </BoxInput>
              <Label htmlFor="email">E-mail</Label>
              <BoxInput>
                <Field name="email" style={styleInput(errors.email)} placeHolder="Email" />
                <ErrorMessage name="email">
                  {(msg) => <div style={styleError}>{msg}</div>}
                </ErrorMessage>
              </BoxInput>
              <Label htmlFor="subject">Assunto</Label>
              <BoxInput>
                <Field name="subject" style={styleInput(errors.subject)} placeHolder="Assunto" />
                <ErrorMessage name="subject">
                  {(msg) => <div style={styleError}>{msg}</div>}
                </ErrorMessage>
              </BoxInput>
              <Label htmlFor="message">Descreva seu problema</Label>
              <BoxInput>
                <div>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    rows={7}
                    cols={10}
                    placeholder="Descreva seu problema..."
                    style={styleTextarea(errors.message)}
                  />
                  <ErrorMessage name="subject">
                    {(msg) => <div style={styleError}>{msg}</div>}
                  </ErrorMessage>
                </div>
              </BoxInput>
              <BoxButton>
                <Button
                  variant={'secondary'}
                  widthCircle={''}
                  heightCircle="10px"
                  loading={loading}>
                  Enviar
                </Button>
              </BoxButton>
            </Form>
          </Box>
        )}
      </Formik>
      <Title>Ou entre em contato conosco pelo WhatsApp!</Title>
      <BoxButton>
        <>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5571996678685"
            style={{ textDecoration: 'none' }}>
            <Button variant={'primary'} widthCircle={''} heightCircle="10px">
              Fale pelo WhatsApp
            </Button>
          </a>
        </>
      </BoxButton>
    </Container>
  );
};
export default ContactBox;