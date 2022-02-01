import React from 'react';
import { Button } from './styles';

interface Props {
  text?: string;
  marginTop?: 'on' | 'off';
}

export const ButtonConfirm: React.FC<Props> = ({ text, marginTop }) => {
  return <Button className={marginTop}>{text}</Button>;
};
