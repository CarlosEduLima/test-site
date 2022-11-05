import styled from 'styled-components';
import Image from 'next/image';
import fonts from 'src/utils/fonts';
import img from '../../../assets/ImagemFundoCadastro.png';
import bannerDownload from '../../../assets/bannerDownload.png';

export const Container = styled.div`
  background: url(${img.src}) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  place-content: center;
  place-items: flex-end;

  @media (max-width: 425px) {
    background: url(${bannerDownload.src}) no-repeat;
    width: 100%;
    background-size: cover;
  }
`;

export const LogoImgs = styled(Image)`
  display: flex;
`;

export const Logo = styled(Image)`
  display: flex;
`;

export const Text = styled.h3`
  font-size: 2em;
  font-weight: ${fonts.extraBold};
  margin-top: 1em;

  @media (max-width: 1366px) {
    font-size: 1.5em;
  }

  @media (max-width: 840px) {
    font-size: 1.4em;
  }
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
  font-size: 18px;
  font-weight: ${fonts.heading};
  line-height: 27px;
  width: 80%;
  text-align: center;
  margin: 20px auto;
  padding-top: 40px;

  @media (max-width: 1366px) {
    font-size: 16px;
    width: 100%;
    padding-top: 5px;
    margin-bottom: 0;
  }

  @media (max-width: 840px) {
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ImageBOX = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

export const ImageDownload = styled.div`
  @media (max-width: 840px) {
    display: none;
  }
`;

export const ImageIZIW = styled.div`
  display: none;

  @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2em;

  @media (max-width: 1366px) {
    padding: 4% 25%;
  }

  @media (max-width: 768px) {
    margin-top: 4em;
  }

  @media (max-width: 425px) {
    margin-top: 1em;
    padding: 0 20%;
  }
`;

export const Box = styled.div`
  display: flex;
  background-color: white;
  width: 28%;
  height: 80%;
  flex-direction: column;
  border-radius: 25px 25px 0 0;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 2%;

  @media (max-width: 1366px) {
    width: 410px;
    height: 86%;
  }

  @media (max-width: 840px) {
    padding: 5%;
    width: 90%;
    height: 60%;
    margin-bottom: 120px;
    border-radius: 25px;
  }
`;
