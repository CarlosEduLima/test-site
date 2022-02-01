import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px 60px 40px;
`;

export const SubTitle = styled.h1`
  font-size: 18px;
  font-family: ${fonts.regular};
  font-weight: ${fonts.bold};
  color: ${colors.black};
  line-height: 25px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: -25px;
`;

export const ButtonContainer = styled.div`
    width: 268px;
`;

export const Question = styled.h2`
  font-size: 20px;
  font-family: ${fonts.regular};
  font-weight: ${fonts.bold};
  color: ${colors.black};
  line-height: 27px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Answer = styled.div`
  width: 1150px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.7%;
  flex-direction: column;
  max-height: 400px;
  align-items: center;

  @media (max-width: 1135px) {
    max-height: none;
    max-width: 100%;
  }
`;

export const AnswerContainer = styled.div<{ border?: '#373AAD' | '#BED6E0' }>`
  cursor: pointer;
  width: 480px;
  height: 63px;
  display: flex;
  text-align: center;
  border: 3px solid ${(props) => props.border};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  transition: 0.2s;

  :hover {
    border-color: ${colors.darkBlue};
  }

  @media (max-width: 1135px) {
    max-width: 100%;
  }
`;

export const AnswerText = styled.h1`
  font-size: 23px;
  font-family: ${fonts.regular};
  font-weight: ${fonts.bold};
  color: ${colors.heading};
  line-height: 31px;
`;