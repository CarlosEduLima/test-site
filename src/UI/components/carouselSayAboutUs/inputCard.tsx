import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import Image from 'next/image';
import imageStar from '../../../assets/star.png';

const cardOpacity = '65';

export const Card = styled.div<{
  backgroundImage: string;
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
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.mediumGray};
  font-weight: 400;
  line-height: 19px;
  padding: 0 15px;
  font-size: 14px;
`;

export const CardAutor = styled.div`
  margin: 0;
  font-family: ${fonts.bold};
  color: ${colors.black};
  padding: 0 15px;
  font-size: 12px;
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
  author?: string;
  rank?: number;
  backgroundImage?: string;
  size: { width: number; height: number };
}

export const InputCard: React.FC<Props> = ({ title, author, backgroundImage, size, rank }) => {
  return (
    <Card backgroundImage={backgroundImage} size={size}>
      <CardTitle>&quot;{title}&quot;</CardTitle>
      <CardAutor>{author}</CardAutor>
      <CardRank>
        {rank}
        <CardStar>
          <Image src={imageStar} alt="" />
          <Image src={imageStar} alt="" />
          <Image src={imageStar} alt="" />
          <Image src={imageStar} alt="" />
          <Image src={imageStar} alt="" />
        </CardStar>
      </CardRank>
    </Card>
  );
};
