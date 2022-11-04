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
  height: 180px;
`;

export const ContainerButton = styled.div`
  width: 287px;
  margin: 0 15px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  color: ${colors.white};
  font: ${fonts.regular};
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
