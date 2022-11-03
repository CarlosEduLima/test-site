import styled from 'styled-components';
import Image from 'next/image';
import fonts from 'src/utils/fonts';
import img from '../../../assets/ImagemFundoCadastro.png';

export const Container = styled.div`
  background: url(${img.src}) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const Logo = styled(Image)`
  margin-bottom: 30px;
  display: flex;
`;

export const Text = styled.h3`
  font: ${fonts.regular};
  font-size: 27px;
  font-weight: 600;
`;

export const ContainerImageStore = styled.div`
  display: flex;
  margin-top: 20px;
  width: 237px;
  flex-direction: column;
  gap: 25px;
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
  marginTop: 6,
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
  position: absolute;
  bottom: -25px;
  right: 55%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 5rem 1.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1100px) {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BoxInput = styled.div`
  border-radius: 50%;
  color: '#F00';
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const BoxButton = styled.div`
  padding-top: 15px;
`;
