import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import backgroundSearchFaq from '../../../assets/faqBanner.png';
import backgroundFAQ from '../../../assets/backgroundFAQ.png';

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
  padding: 40px 10px;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(#373aadaa, #373aadaa), url(${backgroundSearchFaq.src}) no-repeat;
  background-size: cover;

  @media (max-width: 840px) {
    background: url(${backgroundFAQ.src}) no-repeat;
    width: 100%;
    background-size: cover;
    height: 330px;
    margin-bottom: 30px;
  }
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
  @media (max-width: 800px) {
    padding: 23px 60px;
    height: 200px;
    flex-direction: column;
  }
`;

export const ContactButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 10px;
  width: 192px;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

export const ContactText = styled.p<{ size: number }>`
  max-width: 400px;
  line-height: 37px;
  margin: 0 15px;
  color: ${colors.white};
  font-size: ${(props) => props.size}px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
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
  height: 70px;
  border-bottom: 1px solid ${colors.labelInput};
`;

export const CategoryCardTitle = styled.span`
  font-size: 30px;
  font-family: ${fonts.regular};
  color: ${colors.blue};
  @media (max-width: 700px) {
    font-size: 25px;
  }
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
  @media (max-width: 700px) {
    font-size: 20px;
  }
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

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.mediumGray};
  margin-bottom: 20px;
  width: 93%;
`;

export const ResultContainer = styled.div`
  width: 100%;
  padding: 0 38px;
`;
export const CategoryResultTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 12px;
`;

export const CategoryResultTitle = styled.span`
  font-size: 20px;
  color: ${colors.blue};
  font-family: ${fonts.regular};
`;

export const ResultQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ResultQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const ResultQuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: start;
  margin-right: 10px;
`;

export const ResultQuestionIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
`;

export const QuestionResultTitle = styled.p`
  font-size: 18px;
  color: ${colors.black};
  font-family: ${fonts.regular};
  text-align: start;
  margin-bottom: 12px;
`;
export const ResultAnswerPreview = styled.p`
  font-size: 18px;
  color: ${colors.mediumGray};
  font-family: ${fonts.regular};
`;
