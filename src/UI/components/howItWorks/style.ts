import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

interface HowItWorksProps {
  user: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 345px;

  background-color: ${colors.lightBlue};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  width: 30%;
  padding: 0 25px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  width: 70%;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;

  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

  font-family: 'Nunito', sans-serif;
`;

export const TitleSpan = styled.span`
  font-weight: 700;
`;

export const DescriptionText = styled.p``;

export const UserTypeContainer = styled.div`
  border-radius: 20px;

  height: 35px;
  width: 100%;

  margin: 15px 0;

  background-color: ${colors.purple};

  border: 1px solid ${colors.purple};
`;

export const UserTypeClient = styled.button<HowItWorksProps>`
  background-color: ${({ user }) => (user === 'client' ? colors.purple : colors.lightBlue)};
  color: ${({ user }) => (user === 'client' ? colors.white : colors.purple)};

  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  cursor: pointer;

  height: 100%;
  width: 50%;
`;

export const UserTypeProfessional = styled.button<HowItWorksProps>`
  background-color: ${({ user }) => (user === 'professional' ? colors.purple : colors.lightBlue)};
  color: ${({ user }) => (user === 'professional' ? colors.white : colors.purple)};

  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  cursor: pointer;

  height: 100%;
  width: 50%;
`;
