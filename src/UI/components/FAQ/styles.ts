import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

import circuloFaq from '../../../assets/circuloFaq.svg';
import meioCirculoFaq from '../../../assets/meioCirculoFaq.svg';
import retanguloFaq from '../../../assets/retanguloFaq.svg';
import backgroundSearchFaq from '../../../assets/faqBanner.png';

export const FAQFull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-size: cover;
`;

export const ContactSession = styled.div`
  padding: 40px 60px;
  height: 106px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: linear-gradient(270deg, #29abe2 7.54%, #373aad 92.7%);
`;

export const ContactButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin: 0 10px;
`;

export const ContactText = styled.p<{ size: number }>`
  max-width: 400px;
  line-height: 37px;
  margin: 0 15px;
  color: ${colors.white};
  font-size: ${(props) => props.size}px;
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
  &.center {
    text-align: center;
  }
  &.search {
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

export const CategoryCard = styled.div`
  width: 406px;
  height: 437px;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin: 20px;
  transition: 0.2s;
`;

export const CategoryCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
  border-bottom: 1px solid ${colors.labelInput};
`;

export const CategoryCardTitle = styled.span`
  font-size: 30px;
  font-family: ${fonts.regular};
  color: ${colors.blue};
`;

export const CategoryCardQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 22px;
`;

export const CategoryCardQuestion = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  margin: 12px 0;
`;

export const QuestionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: initial;
  width: 95%;
`;

export const QuestionTitle = styled.span`
  font-size: 24px;
  font-family: ${fonts.regular};
  color: ${colors.black};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 5%;
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
  &.answer {
    padding: 0px 40px 32px 40px;
    cursor: text;
  }
  &.mTop {
    margin-top: 1px;
    @media screen and (max-width: 600px) {
      margin-top: 4px;
    }
  }
  &.categoria {
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
