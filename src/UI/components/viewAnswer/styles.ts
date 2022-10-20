import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

export const FAQFull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  width: 100%;
`;

export const Container = styled.div`
  margin: 60px;
`;
export const MarckdownContainer = styled.div`
  margin: 4rem;
`;
export const Box = styled.div`
  margin: 3rem;
`;
export const BoxBack = styled.div`
  display: flex;
`;

export const BoxQuestion = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IconBack = styled(Image)`
  cursor: pointer;
  display: flex;
  width: 30px;
  @media (max-width: 700px) {
    width: 25px;
  }
`;

export const ButtonBack = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  background: none;
  color: ${colors.purple};
  font-family: ${fonts.regular};
  font-size: 30px;
  padding-left: 1%;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;
export const TitleQuestion = styled.h1`
  font-family: ${fonts.regular};
  display: flex;
  justify-content: center;
`;

export const ContentTitle = styled.h3`
  font-family: ${fonts.regular};
  font-size: 18px;
  line-height: 27px;
  padding: 1rem 0;
`;
export const ContentQuestions = styled.div`
  margin: 2rem 4rem;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Label = styled.div`
  font-family: ${fonts.regular};
  font-size: 35px;
  line-height: 27px;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 700px) {
    margin-bottom: 12px;
    height: 30px;
    margin-top: 12px;
  }
`;
