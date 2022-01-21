import React from 'react';
import { Container } from './styles';
import Card from './card';
import people from '../../../assets/people.png';

const sessionprofessional: React.FC = () => {
  return (
    <Container>
      <Card src={people} alt="" name="NAME HERE" lastName="LAST NAME" ImgBackground="#FFBB8A" />
      <Card src={people} alt="" name="NAME HERE" lastName="LAST NAME" ImgBackground="##D2E0CC" />
      <Card src={people} alt="" name="NAME HERE" lastName="LAST NAME" ImgBackground="#B5E9EE" />
      <Card src={people} alt="" name="NAME HERE" lastName="LAST NAME" ImgBackground="#FFBFC7" />
    </Container>
  );
};

export default sessionprofessional;
