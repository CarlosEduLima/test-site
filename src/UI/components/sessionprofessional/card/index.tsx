import React from 'react';
import { Card, Name, LastName, FunctionHere, Imagebackground } from './styles';
import Image from 'next/image';

interface CardProps {
  src: any;
  alt: string;
  name: string;
  lastName: string;
  ImgBackground: string;
}

const card: React.FC<CardProps> = (props) => {
  return (
    <Card>
      <Imagebackground ImgBackground={props.ImgBackground}>
        <Image src={props.src} alt={props.alt} width={245} height={245} />
      </Imagebackground>
      <Name>{props.name}</Name>
      <LastName>{props.lastName}</LastName>
      <FunctionHere>FUNCTION HERE</FunctionHere>
    </Card>
  );
};

export default card;
