import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const cardOpacity = '65';

export const Card = styled.div<{ backgroundImage: string }>`
  flex: 0 0 auto;
  margin: 10px;
  height: 151px;
  width: 325px;
  border-radius: 13px;
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
}

export const InputCard: React.FC<Props> = ({ title, backgroundImage }) => {
  return (
    <Card backgroundImage={backgroundImage}>
      <CardText>{title}</CardText>
    </Card>
  );
};
