import React from 'react';
import GooglePlayBadgeSvg from '../../../assets/PlayStoreBadge.svg';
import Image from 'next/image';

const GooglePlayBadgePropostions = { width: 2.5843, height: 1 };

export const GooglePlayBadge: React.FC<{ height: number }> = ({ height }) => {
  const width = GooglePlayBadgePropostions.width * height;
  return <Image alt="google-play-badge" src={GooglePlayBadgeSvg} height={height} width={width} />;
};
