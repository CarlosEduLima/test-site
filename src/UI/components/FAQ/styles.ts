import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

import circuloFaq from '../../../assets/circuloFaq.svg';
import meioCirculoFaq from '../../../assets/meioCirculoFaq.svg';
import retanguloFaq from '../../../assets/retanguloFaq.svg';
import backgroundSearchFaq from '../../../assets/backgroundSearchFaq.svg';
import { redirect } from 'next/dist/server/api-utils';

export const FAQFull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  width: 100%;
`;

export const FAQContainer = styled.div`
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(#373aadaa, #373aadaa), url(${backgroundSearchFaq.src}) no-repeat;
  background-position: center;
  background-size: cover;
`;

export const CategoryTextContainer = styled.div`
  padding: 40px 0;
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #373aad;
  background-image: url(${meioCirculoFaq.src}), url(${circuloFaq.src}), url(${retanguloFaq.src});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 195px, 80px, 200px;
  background-position: bottom 0px left 0px, top 20px right 240px, top 20px right 0px;
  @media (max-width: 700px) {
    background-size: 145px, 50px, 125px;
    background-position: bottom 0px left 0px, top 20px right 150px, top 20px right 0px;
  }
`;

export const CategoryText = styled.p<{ size: number }>`
  max-width: 400px;
  line-height: 37px;
  margin: 0 15px;
  color: ${colors.white};
  font-size: ${(props) => props.size}px;
  font-family: ${fonts.bold};
`;

export const Title = styled.p<{ size: number }>`
  max-width: 380px;
  margin: 0 15px;
  color: #000;
  font-size: ${(props) => props.size}px;
  font-family: ${fonts.regular};
  span {
    font-weight: 800;
  }
  @media (max-width: 600px) {
    font-size: ${(props) => props.size - 4}px;
    max-width: 80%;
  }
  &.center{
    text-align: center;
  }
  &.search{
    margin: 20px 0;
    color: #fff;
  }
`;

export const Categorias = styled.div`
  max-width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

export const Categoria = styled.div<{ border?: '#373AAD' | '#FFF' }>`
  cursor: pointer;
  width: 244px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid ${(props) => props.border};
  border-radius: 25px;
  margin: 20px;
  transition: 0.2s;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
`;

export const Text = styled.p<{ size: number }>`
  color: #000;
  font-size: ${(props) => props.size}px;
  font-family: ${fonts.regular};
  margin: 0 8px;
  user-select: text;
  span {
    font-weight: 600;
  }
  @media (max-width: 600px) {
    font-size: ${(props) => props.size - 4}px;
    max-width: 100%;
  }
  &.answer{
    padding: 0px 40px 32px 40px;
    cursor: text;
  }
  &.mTop{
    margin-top: 1px;
    @media screen and (max-width: 600px) {
      margin-top: 4px;
    }
  }
  &.categoria{
    margin: 38px;
  }
`;

export const CategoriaText = styled.p<{ size: number }>`
  color: #000;
  font-size: ${(props) => props.size}px;
  font-family: ${fonts.regular};
  margin-top: 19px;
  span {
    font-weight: 600;
  }
`;

export const PortaIcons = styled.div`
  width: 68px;
  height: 68px;
  border: 4px solid ${colors.blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Icon = styled(Image)`
  /* nada */
`;

export const Search = styled.div`
  z-index: 10;
  padding: 5px 8px;
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.lightBlue};
  border-radius: 6px;
  gap: 5px;
  margin: 0 10px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border: none !important;
  box-shadow: none !important;
  height: 30px;
  outline: none;
  ::placeholder {
    color: ${colors.black};
    font-family: ${fonts.heading};
  }
`;

export const SearchButton = styled(Image)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

export const Details = styled.details`
  margin: 15px 0;
  border-radius: 9px;
  width: 800px;
  text-align: left;
  background-color: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  user-select: none;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

export const Summary = styled.summary`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 32px 40px;
  font-family: ${fonts.regular};
  color: #000;
  list-style-type: none;
`;
