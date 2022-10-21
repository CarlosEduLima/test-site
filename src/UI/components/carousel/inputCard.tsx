import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const cardOpacity = '65';

export const Card = styled.button<{
  backgroundImage: string;
  size: { width: number; height: number };
}>`
  flex: 0 0 auto;
  margin: 10px;
  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
  border-radius: 13px;
  border: 0;
  cursor: pointer;
  background-image: linear-gradient(
      242deg,
      ${colors.blue}${cardOpacity},
      ${colors.darkBlue}${cardOpacity}
    ),
    url(${(props) => props.backgroundImage});
`;

export const CardText = styled.p`
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.white};
  padding: 46px 25px;
  font-size: 20px;
`;

interface Props {
  title?: string;
  backgroundImage?: string;
  size: { width: number; height: number };
  onClick?: () => void;
}

export const InputCard: React.FC<Props> = ({ title, backgroundImage, size, onClick }) => {
  return (
    <Card backgroundImage={backgroundImage} size={size} onClick={() => onClick()}>
      <CardText>{title}</CardText>
    </Card>
  );
};
