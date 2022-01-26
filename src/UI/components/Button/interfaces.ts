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
  children: string;
  variant: 'primary' | 'secondary';
  mini?: boolean;
  max?: boolean;
  height?: string;
  fontSize?: string;
  widthCircle: string;
  heightCircle: string;
}

export interface CircleProps {
  width?: string;
  height?: string;
}
