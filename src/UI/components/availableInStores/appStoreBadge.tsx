import React from 'react';
import AppStoreBadgeSvg from '../../../assets/AppStoreBadge.svg';
import Image from 'next/image';
import Link from 'next/link';

export const AppStoreBadge: React.FC<{ height: number }> = ({ height = 52 }) => {
  const padding = (height * 11) / 100;
  return (
    <div style={{ height: height, padding: padding, boxSizing: 'border-box', cursor: 'pointer' }}>
      <Image alt="app-store-badge" src={AppStoreBadgeSvg} height={54} />
    </div>
  );
};
