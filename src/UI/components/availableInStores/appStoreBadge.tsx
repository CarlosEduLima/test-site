import React from 'react';
import AppStoreBadgeSvg from '../../../assets/AppStoreBadge.svg';
import Image from 'next/image';

export const AppStoreBadge: React.FC<{ height: number }> = ({ height = 52 }) => {
  const padding = (height * 12) / 100;
  return (
    <div style={{ height: height, padding: padding, boxSizing: 'border-box' }}>
      <Image alt="app-store-badge" src={AppStoreBadgeSvg} height={40} />
    </div>
  );
};
