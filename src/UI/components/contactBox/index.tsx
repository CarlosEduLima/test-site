/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
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
// import api from 'src/services/api';

const ContactBox: React.FC = (props) => {
  // const [resp, setResp] = useState({});
  // const [data, setData] = useState({
  //   name: '',
  //   email: '',
  // });

  const userSchema = yup.object({
    name: yup.string().required('Preencha o campo Nome'),
    email: yup.string().email('Email inválido').required('Preencha o campo de e-mail'),
    subject: yup.string().required('Preencha o campo Assunto'),
  });

  const handleSubmit = (data) => {
    console.log('teste', data);
    // try {
    //   const resposta =  api.post(`/faq/help/email/`, {
    //     subject: data.subject,
    //     message: data.message,
    //     email: data.email,
    //     name: data.name,
    //   });
    //   setResp(resposta);

    //   return resposta;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Formik validationSchema={userSchema} initialValues={props} onSubmit={handleSubmit}>
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
                </div>
              </BoxInput>
              <BoxButton>
                <Button variant={'secondary'} widthCircle={''} heightCircle="10px">
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
