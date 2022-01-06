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
      <Image alt="" src={icon} width={100} height={100} />
      <Description>{description}</Description>
    </Container>
  );
};

export default HowItWorksCard;
