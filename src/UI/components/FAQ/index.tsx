import React, { useState } from 'react';
import {
  FAQFull,
  FAQContainer,
  Title,
  Categorias,
  Categoria,
  Text,
  Icon,
  Search,
  Input,
  SearchButton,
  Details,
  Summary,
} from './styles';

import icone from '../../../assets/icon.png';

const FAQ = () => {

  const categoriaItens = [
    {
      id: 1,
      icon: icone,
      title: 'Primeiros passos',
    },
    {
      id: 2,
      icon: '${ICON}',
      title: 'Preços e moedas',
    },
    {
      id: 3,
      icon: '${ICON}',
      title: 'Como utilizar',
    },
  ];

  const questions = [
    {
      title: 'Como eu crio meu perfil?',
      response: 'Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui',
    },
    {
      title: 'Preciso baixar o aplicativo?',
      response: 'Sim! A experiência Iziw fica ainda melhor no nosso aplicativo. É por lá que você vai encontrar oportunidades, publicar serviços e contratar profissionais. Nosso aplicativo vai te conectar com os melhores profissionais e oportunidades, você pode pesquisar categorias que estão em alta na sua cidade, além de poder ver as avaliações dos profissionais.',
    },
  ];

  const [newsQuestions, setNewsQuestions] = useState([]);
  const [value, setValue] = useState();
  let [inCategoria, setInCategoria] = useState(1);
  let [existe, setExiste] = useState(false);

  function verifySearch() {
    let valor = value.trim();
    setNewsQuestions([]);
    if (valor !== undefined && valor !== '' && valor !== null) {
      for (let question of questions) {
        if (question.response.includes(valor.trim()) || question.title.includes(valor.trim())) {
          setNewsQuestions([...newsQuestions, question]);
          console.log('Existe', newsQuestions);
        }
      }
      if (newsQuestions.length > 0) {
        setExiste(true);
      }
    }
  }

  return (
    <FAQFull>
      <FAQContainer>
        <Title size={25} style={{ margin: '20px 0' }}>
          Como podemos <span>ajudar?</span>
        </Title>
        <Search>
          <Input placeholder="Escreva aqui sua dúvida" onChange={(e) => setValue(e.target.value)} />
          <SearchButton
            src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
            alt="Search"
            onClick={verifySearch}
          />
        </Search>
        <Text style={{ marginTop: '40px' }} size={25}>
          Ou escolha uma categoria relacionada à sua dúvida
        </Text>
        <Categorias>
          {categoriaItens.map(item => {
            if (item.id === inCategoria) {
              return (
                <Categoria
                  key={item.title}
                  onClick={() => {
                    setInCategoria(item.id);
                    console.log(inCategoria);
                  }}
                  border>
                  <Icon
                    key={item.title}
                    src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                    alt={item.title}
                  />
                  <Text size={18}>{item.title}</Text>
                </Categoria>
              );
            } else {
              return (
                <Categoria
                  key={item.title}
                  onClick={() => {
                    setInCategoria(item.id);
                    console.log(inCategoria);
                  }}>
                  <Icon
                    key={item.title}
                    src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                    alt={item.title}
                  />
                  <Text size={18}>{item.title}</Text>
                </Categoria>
              );
            }
          })}
        </Categorias>
        <Title size={28} style={{ margin: '20px 0 40px 0' }}>
          Primeiros passos para começar sua experiência IziW
        </Title>
        {(newsQuestions.length === 0 || value.trim() === '') && questions.map((item) => (
          <Details key={item.title}>
            <Summary key={item.title}>{item.title}</Summary>
            <Text
              key={item.title}
              size={18}
              style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
              {item.response}
            </Text>
          </Details>
        ))}
        {/* {exist === false && <Title size={25} style={{marginTop: '20px'}}>Não existe nada sobre isso na lista</Title>} */}
        {existe && newsQuestions.map((item) => (
          <Details key={item.title}>
            <Summary key={item.title}>{item.title}</Summary>
            <Text
              key={item.title}
              size={18}
              style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
              {item.response}
            </Text>
          </Details>
        ))}
      </FAQContainer>
    </FAQFull>
  );
};

export default FAQ;
