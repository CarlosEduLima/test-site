import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import Image from 'next/image';
import imageCoin from '../../../assets/coin.png';
import imageCheck from '../../../assets/check.png';

const cardOpacity = '65';

export const Card = styled.div<{
  size: { width: number; height: number };
}>`
  display: flex;
  flex: 0 0 auto;
  align-content: space-around;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
  border-radius: 13px;
  border: 2px solid ${colors.lightBlue};
  background-image: ${colors.white};
`;

export const CardTitle = styled.div`
  width: 100%;
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.blue};
  line-height: 19px;
  padding: 0 15px;
  font-size: 32px;
`;

export const CardText = styled.div`
  margin: 0;
  font-family: ${fonts.regular};
  color: ${colors.black};
  padding: 0 15px;
  font-size: 19px;
  &.coin {
  }
  &.description {
  }
`;

export const CardPrice = styled.span`
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.green};
  font-size: 24px;
`;

export const CardRank = styled.div`
  margin: 0;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-weight: 600;
  padding: 0 15px;
  font-size: 16px;
`;

export const CardStar = styled.span`
  padding-left: 10px;
`;

interface Props {
  title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  split?: number;
  priceSplit?: string;
  price?: string;
  size: { width: number; height: number };
}

export const InputCard: React.FC<Props> = ({
  title,
  size,
  description1,
  description2,
  description3,
  split,
  priceSplit,
  price,
}) => {
  return (
    <Card size={size}>
      <CardTitle>{title}</CardTitle>
      <CardText>
        <Image src={imageCoin} alt="Coin" />
        {description1}
      </CardText>
      <CardText>
        <Image src={imageCheck} alt="Check" />
        {description2}
      </CardText>
      <CardText>
        <Image src={imageCheck} alt="Check" />
        {description3}
      </CardText>
      <CardText>
        {split}x de <CardPrice>R$ {priceSplit}</CardPrice>
      </CardText>
      <CardText style={{ width: '100%' }}>à vista</CardText>
      <CardText>
        <CardPrice>R$ {price}</CardPrice>
      </CardText>
      <CardStar>
        <button>Comprar</button>
      </CardStar>
    </Card>
  );
};
