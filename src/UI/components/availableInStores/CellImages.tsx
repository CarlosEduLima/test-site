import React from 'react';
import Image1 from '../../../assets/cellImage1.png';
import Image2 from '../../../assets/cellImage2.png';
import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  margin-right: 17px;
  height: 510px;
`;

const FirstImagePositioning = styled.div`
  position: absolute;
  right: 144px;
  bottom: -4px;
  z-index: 2;
`;

const SecondImagePositioning = styled.div`
  position: absolute;
  right: 0;
  bottom: -4px;
  z-index: 1;
`;
export const CellImages: React.FC = () => {
  return (
    <ImageContainer>
      <FirstImagePositioning>
        <Image alt="image01" src={Image1}></Image>
      </FirstImagePositioning>
      <SecondImagePositioning>
        <Image alt="image02" src={Image2}></Image>
      </SecondImagePositioning>
    </ImageContainer>
  );
};
