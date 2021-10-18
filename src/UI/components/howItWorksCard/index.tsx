import React from 'react';
import Image from 'next/image';

import { Container, Description } from './style';

interface HowItWorksCard {
  icon: string;
  description: string;
}

const HowItWorksCard = ({ icon, description }: HowItWorksCard) => {
  return (
    <Container>
      <Image alt="" src={icon} width={100} height={100} />
      <Description>{description}</Description>
    </Container>
  );
};

export default HowItWorksCard;
