import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

interface HowItWorksProps {
  user: string;
}

interface UserProfileProps {
  user: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 345px;

  background-color: ${colors.lightBlue};

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    padding-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  width: 30%;
  padding: 0 25px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 25px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  width: 70%;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-family: ${fonts.regular};
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const TitleSpan = styled.span`
  font-family: ${fonts.bold};
`;

export const DescriptionText = styled.p`
  font-family: ${fonts.regular};
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const UserTypeContainer = styled.div`
  border-radius: 20px;

  height: 35px;
  width: 100%;

  margin: 25px 0;

  background-color: ${colors.purple};

  border: 1px solid ${colors.purple};
`;

export const UserTypeClient = styled.button<HowItWorksProps>`
  background-color: ${({ user }) => (user === 'client' ? colors.purple : colors.lightBlue)};
  color: ${({ user }) => (user === 'client' ? colors.white : colors.purple)};

  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 16px;

  cursor: pointer;

  height: 100%;
  width: 50%;

  @media screen and (max-width: 1000px){
    font-size: 12px;
  }
  @media screen and (max-width: 800px){
    font-size: 16px;
  }
`;

export const UserTypeProfessional = styled.button<HowItWorksProps>`
  background-color: ${({ user }) => (user === 'professional' ? colors.purple : colors.lightBlue)};
  color: ${({ user }) => (user === 'professional' ? colors.white : colors.purple)};

  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 16px;

  cursor: pointer;

  height: 100%;
  width: 50%;

  @media screen and (max-width: 1000px){
    font-size: 12px;
  }
  @media screen and (max-width: 800px){
    font-size: 16px;
  }
`;

export const UserProfileProfessional = styled.div<UserProfileProps>`
  display: ${({ user }) => (user === 'professional' ? 'flex' : 'none')};

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 25px;

  width: 70%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 0px;
  }
`;

export const UserProfileClient = styled.div<UserProfileProps>`
  display: ${({ user }) => (user === 'client' ? 'flex' : 'none')};

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 25px;

  width: 70%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 0px;
  }
`;