import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import Image from 'next/image';
import imageCoin from '../../../assets/coin.png';
import imageCheck from '../../../assets/check.png';

export const Card = styled.div<{
  size: { width: number; height: number };
}>`
  display: flex;
  flex: 0 0 auto;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  padding: 15px;
  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
  border-radius: 13px;
  box-shadow: 0px 3px 6px 0px #00000029;
  background-image: ${colors.white};
`;

export const CardTitle = styled.div`
  width: 100%;
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.blue};
  line-height: 19px;
  font-size: 32px;
  padding-bottom: 20px;
`;

export const CardText = styled.div`
  margin: auto 0;
  font-family: ${fonts.regular};
  color: ${colors.black};
  font-size: 19px;
  &.coin {
    font-size: 25px;
    width: 83%;
  }
  &.description {
    width: 83%;
  }
  &.split {
    padding-top: 20px;
  }
  &.spaceText {
    width: 100%;
    margin: 5px 0px;
  }
`;

export const CardPrice = styled.span`
  margin: 0;
  font-family: ${fonts.regular};
  color: ${colors.green};
  font-size: 24px;
`;

export const CardImage = styled.div`
  width: 32px;
  height: 32px;
  margin: 10px 0px;
`;

export const CardButton = styled.button`
  width: 138px;
  border-radius: 30px;
  padding: 5px 0;
  background: ${colors.green};
  border: 0px;
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  text-align: center;
  cursor: pointer;
  :active {
    background: ${colors.blue};
  }
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
      <CardImage>
        <Image src={imageCoin} alt="Coin" />
      </CardImage>
      <CardText className="coin">{description1}</CardText>
      <CardImage>
        <Image src={imageCheck} alt="Check" />
      </CardImage>
      <CardText className="description">{description2}</CardText>
      <CardImage>
        <Image src={imageCheck} alt="Check" />
      </CardImage>
      <CardText className="description">{description3}</CardText>
      <CardText className="split">
        {split}x de <CardPrice>R$ {priceSplit}</CardPrice>
      </CardText>
      <CardText className="spaceText">à vista</CardText>
      <CardText>
        <CardPrice>R$ {price}</CardPrice>
      </CardText>
      <CardButton>Comprar</CardButton>
    </Card>
  );
};
