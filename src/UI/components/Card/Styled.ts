import styled from "styled-components"
import Image from 'next/image';
import colors from "src/utils/colors";
import fonts from "src/utils/fonts";
import img from '../../../assets/imagemFundoCadastro.png';


export const Container = styled.div`
  background: url(${img.src}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid red;
  padding-left: 20%;
  height: 100vh;
  width: 100vw;
`;

export const Fundo = styled(Image)`
  position: fixed;
  width: 100%;
  height: 100%;
`;


export const Logo = styled(Image)`
  width: 30px;
`;

export const Texto = styled.h3`
  font: ${fonts.regular};
  font-size: 27px;
  font-weight: 600;
`;


export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerImageGooglePlay = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ContainerTexto = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const Input = styled.input`
    box-shadow: none !important;
    padding: 0.5em;
    background: #F4FAFD;
    border: none !important;
    border-radius: 3px;
    width: 357px;
    height: 50px;
    margin-bottom: 1.5em;
    margin-top: 0.4em;
`;

export const Formulario = styled.form`
    font: ${fonts.bold};
    display:flex;
    flex-direction:column;
    border-radius: 3px;
    padding: 1rem 1.5rem;
    width:100%;
    
    font-family: Nunito;
    font-size: 18px;
    line-height: 30px;
    text-align: left;
`;

export const Box = styled.div`
background-color: white;
    width: 458px;
    height: 612px;
    display:flex;
    flex-direction: column;
    border-radius: 3px;
    border: solid black 2px;
    color: black;
    font-size: 18px;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`;

export const MeuBotao = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 40px;
  width: 357px;
  height: 54px;
  border: none;
  cursor: pointer;
  background-color: #29ABE2;
  color: white;
  font-size: 14px;
  `;

  