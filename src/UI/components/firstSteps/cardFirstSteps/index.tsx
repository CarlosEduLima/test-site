import React from 'react';
import { Card, Name, Imagebackground } from './styles';
import Image from 'next/image';

interface CardProps {
  src: any;
  alt: string;
  name: string;
}

const CardFirstSteps: React.FC<CardProps> = (props) => {
  return (
    <Card>
      <Imagebackground>
        <Image src={props.src} alt={props.alt} width={245} height={245} />
      </Imagebackground>
      <Name>{props.name}</Name>
    </Card>
  );
};

export default CardFirstSteps;
