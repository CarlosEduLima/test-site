import styled from 'styled-components';
import Image from 'next/image';
import fonts from 'src/utils/fonts';
import img from '../../../assets/imagemFundoCadastro.png';

export const Container = styled.div`
  background: url(${img.src}) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  place-content: center;
  place-items: flex-end;
`;

export const LogoImgs = styled(Image)`
  display: flex;
`;
export const Logo = styled(Image)`
  display: flex;
`;

export const Text = styled.h3`
  font: ${fonts.regular};
  font-size: 2em;
  font-weight: 800;
  margin-top: 1em;
`;

export const ContainerImageStore = styled.div`
  display: flex;
  margin-top: 20px;
  width: 237px;
  flex-direction: column;
  gap: 25px;
  cursor: pointer;
`;

export const ContainerText = styled.h3`
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 1.3em;
`;
export const ImageBOX = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;
export const ImageBOXs = styled.div``;

export const Box = styled.div`
  display: flex;
  background-color: white;
  width: 28%;
  height: 75%;
  flex-direction: column;
  border-radius: 25px 25px 0 0;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 2%;
  @media (max-width: 1100px) {
    height: 80%;
    width: 80%;
  }
`;
