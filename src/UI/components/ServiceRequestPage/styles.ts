import styled from 'styled-components';
import Image from 'next/image';
import fonts from 'src/utils/fonts';
import img from '../../../assets/imagemFundoCadastro.png';

export const Container = styled.div`
  background: url(${img.src}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20%;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled(Image)`
  width: 30px;
`;

export const Text = styled.h3`
  font: ${fonts.regular};
  font-size: 27px;
  font-weight: 600;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerImageGooglePlay = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const styleInput = (isError) => {
  return {
    paddingLeft: '25px',
    borderRadius: '50px',
    border: isError ? '#F00 solid 1px' : '#f4fafd',
    display: 'flex',
    backgroundColor: '#f4fafd',
    width: '357px',
    height: '50px',
    marginBottom: '0em',
    marginTop: '0.4em',
    outline: 'none !important',
    boxShadow: '0  0 0 2px #98887',
    color: 'black',
  };
};

export const styleError = {
  color: '#F00',
};

export const Input = styled.input`
  box-shadow: none !important;
  padding: 0.5em;
  background: #f4fafd;
  border: none !important;
  border-radius: 3px;
  width: 357px;
  height: 50px;
  margin-bottom: 1.5em;
  margin-top: 0.4em;
`;

export const Box = styled.div`
  background-color: white;
  width: 458px;
  height: 612px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const BoxInput = styled.div`
  border-radius: 50%;
  color: '#F00';
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const BoxButton = styled.div`
  padding-top: 15px;
`;
