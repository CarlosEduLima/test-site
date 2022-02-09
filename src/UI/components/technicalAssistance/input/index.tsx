import React from 'react';
import Input from '../../Input';
import { Title, Description, ContainerInput } from './styles';

interface Props {
  title: string;
  description?: string;
  placeholderText?: string;
  icon: string;
}

export const InputContent: React.FC<Props> = ({ title, description, placeholderText, icon }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description className={description === undefined ? 'noMargin' : 'marginDescription'}>
        {description}
      </Description>
      <ContainerInput>
        <Input name={title} icon={icon} placeholder={placeholderText}></Input>
      </ContainerInput>
    </>
  );
};
