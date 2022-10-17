import React from 'react';
import Home from '../pages/Home';
import Input from 'src/UI/components/Input';

const Index: React.FC = () => {
  return (
    <div>
      <Input
        label="Teste"
        name="Input"
        icon="password"
        typeInput="password"
        placeholder="Teste"
        dataSearch={['Gustavo', 'Teste']}
      />
      {/* <Home /> */}
    </div>
  );
};

export default Index;
