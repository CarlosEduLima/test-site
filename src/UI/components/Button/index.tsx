import React from 'react';
import { ButtonPropsComponent } from './interfaces';
import { ButtonComponent, CircleRotate } from './styles';

export const Button: React.FC<ButtonPropsComponent> = ({
  type,
  loading = false,
  children,
  variant,
  mini = false,
  max = false,
  height = '50px',
  widthCircle = '32px',
  heightCircle = '32px',
  fontSize = '16px',
  ...rest
}) => {
  return (
    <ButtonComponent
      type={type}
      loading={loading}
      disabled={loading}
      max={max}
      mini={mini}
      {...rest}
      variant={variant}
      height={height}
      fontSize={fontSize}>
      {loading ? <CircleRotate width={widthCircle} height={heightCircle} /> : children}
    </ButtonComponent>
  );
};
