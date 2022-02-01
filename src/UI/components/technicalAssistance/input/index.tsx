import React from 'react';
import { Title, Description, Input } from './styles';

interface Props {
  title?: string;
  description?: string;
  placeholderText?: string;
}

export const InputContent: React.FC<Props> = ({ title, description, placeholderText }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description className={description === undefined ? 'noMargin' : 'marginDescription'}>
        {description}
      </Description>
      <Input placeholder={placeholderText} />
    </>
  );
};
