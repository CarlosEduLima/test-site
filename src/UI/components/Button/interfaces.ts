import { ReactElement } from 'react';

export interface ButtonProps {
  type?: string;
  loading?: boolean;
  variant: 'primary' | 'secondary';
  disabled: boolean;
  mini: boolean;
  max: boolean;
  height?: string;
  fontSize?: string;
}

export interface ButtonPropsComponent {
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  children: string | ReactElement;
  variant: 'primary' | 'secondary';
  mini?: boolean;
  max?: boolean;
  height?: string;
  fontSize?: string;
  widthCircle: string;
  heightCircle: string;
  onClick?: () => void;
}

export interface CircleProps {
  width?: string;
  height?: string;
}
