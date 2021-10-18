import styled from 'styled-components';
import colors from '../../../utils/colors';

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
  height: 100%;
  width: 30%;

  border: 1px solid purple;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  width: 70%;

  border: 1px solid green;
`;

export const Title = styled.h3``;

export const TitleSpan = styled.span``;

export const DescriptionText = styled.p``;

export const UserTypeContainer = styled.div`
  border-radius: 20px;

  height: 35px;

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
