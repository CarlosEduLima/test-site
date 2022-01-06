import React, { Component, useState } from 'react'
import LogoImg from '../../../assets/icon.png';
import Check from '../../../assets/check.png';
import AppStore from '../../../assets/AppStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import {Logo, Input, ContainerImageGooglePlay, Formulario, Box, MeuBotao, Container, ContainerImage, ContainerTexto, Texto} from './Styled';
import fakeApi from "./api";
import Image from 'next/image'
import img from '../../../assets/imagemFundoCadastro.png';


const steps = [
    {
      id: "telaEmaileCel",
      title: "Dados pessoais"
    },
    {
      id: "telaSenha",
      title: "Endereço de entrega"
    },
    {
      id: "telaFinalizado",
      title: "Dados de pagamento"
    }
  ];
  

  export default function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
      email: "",
      celular: "",
      senha: "",
      senhaAgain: "",
    });

  
    function handleNext(e) {
      e.preventDefault();
      setCurrentStep((prevState) => prevState + 1);
    }
  
    function handleInputChange(event) {
      const { name, value } = event.target;
  
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      console.log("Form sent...", formValues);
      setLoading(true);

      // simulate api
      await fakeApi(() => setLoading(false), 2000);
    }


    return (
      <div className="App">

        <Container >
          {(steps[currentStep].id === "telaEmaileCel") ? (
            <Box>
            
              <Formulario onSubmit={handleNext}>
                <ContainerImage >
                    <Logo src={LogoImg} alt="Search" />
                </ContainerImage>

                <ContainerTexto>
                  <Texto>Cadastre-se e tenha acesso
                    <br />a milhares de oportunidades!
                  </Texto>
                </ContainerTexto>

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
                  <MeuBotao type="submit">
                    Prosseguir
                  </MeuBotao>
                )}

              </Formulario>
            </Box>

          ) : steps[currentStep].id === "telaSenha" ? (
            <Box>
                <Formulario onSubmit={handleNext}>
                    <ContainerImage >
                        <Logo src={LogoImg} alt="Search" />
                    </ContainerImage>

                    <ContainerTexto>
                      <Texto>Cadastre-se e tenha acesso
                        <br />a milhares de oportunidades!
                      </Texto>
                    </ContainerTexto>
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
                  <MeuBotao type="submit">
                    Prosseguir
                  </MeuBotao>
                )}

              </Formulario>
            </Box>
              
            ) : steps[currentStep].id === "telaFinalizado" && (
              <div className="fields">
                <Box>
                  <ContainerImage >
                          <Logo src={Check} alt="Search" />
                  </ContainerImage>

                  <ContainerTexto>
                      <Texto>Recebemos seu cadastro! Para continuar, baixe já o aplicativo.
                      </Texto>
                  </ContainerTexto>

                  <ContainerImageGooglePlay >
                          <Logo src={googlePlay} alt="googlePlay" />
                  </ContainerImageGooglePlay>

                  <ContainerImage >
                          <Logo src={AppStore} alt="AppStore" />
                  </ContainerImage>
                </Box>
              </div>
            )}

            
        </Container>

            {currentStep === steps.length - 1 && (
              <button className="button submit" type="submit">
                Enviar
              </button>
            )}
  
            {loading && <h1 className="loader">Enviando...</h1>}
          </div>
    );
  }
  