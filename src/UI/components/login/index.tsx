/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import LogoImg from '../../../assets/icon.png';
import { LoginUser, ILoginUserProps } from 'src/services/auth';
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
    ErrorLogin,
} from './styles';
import { Button } from '../Button';

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [resp, setResp] = useState({});
    console.log(resp === {})

    async function makeRequest(formData: ILoginUserProps) {
        try {
            const resposta = await LoginUser(formData);

            return resposta;
        } catch (error) {
            console.log(error);
        }
    }

    const userSchema = yup.object({
        email: yup
            .string()
            .email('Email inválido')
            .required('Preencha o campo de e-mail'),
        password: yup
            .string()
            .required('Preencha o campo da senha'),
    });

    const handleSubmit = async (values) => {
        setData({ ...values })
        console.log(values)

        const resposta = await makeRequest(values)
        setResp(resposta)
    }

    return (
        <Container>
            <Formik validationSchema={userSchema} initialValues={data} onSubmit={handleSubmit}>
                {({ errors }) => (
                    <Box>
                        <Form>
                            <Logo src={LogoImg} alt="Search" />
                            <ContainerText>
                                <Text>
                                    Faça seu Login
                                </Text>
                            </ContainerText>

                            <BoxInput>
                                <Field name="email" style={styleInput(errors.email)} placeHolder="Email" />
                                <ErrorMessage name="email">
                                    {(msg) => <div style={styleError}>{msg}</div>}
                                </ErrorMessage>
                            </BoxInput>

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

                            <BoxButton>
                                <Button
                                    variant={'primary'}
                                    children={'Prosseguir'}
                                    height={'54px'}
                                    widthCircle={''}
                                    heightCircle={''}
                                />
                            </BoxButton>
                            {resp === undefined && (<ErrorLogin>E-mail ou senha incorretos</ErrorLogin>)}
                        </Form>
                    </Box>
                )}
            </Formik>
        </Container>
    );
};
