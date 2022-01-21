import React from 'react';
import Image from 'next/image';

import { Container, Description } from './style';

interface HowItWorksCardProps {
  icon: string;
  description: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ icon, description }) => {
  return (
    <Container>
      <Image alt="" src={icon} width='110px' height='110px' />
      <Description>{description}</Description>
    </Container>
  );
};

export default HowItWorksCard;
