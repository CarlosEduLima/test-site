import React, { useState, useEffect } from 'react';
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

const FAQ = () => {

  const categoriaItens = [
    {
      id: 0,
      icon: '${ICON}',
      title: 'Primeiros passos',
      questions: [
        {
          title: 'Como eu crio meu perfil?',
          response: 'Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui',
        },
        {
          title: 'Preciso baixar o aplicativo?',
          response: 'Sim, a experiencia Iziw fica ainda melhor no nosso aplicativo',
        },
      ],
    },
    {
      id: 1,
      icon: '${ICON}',
      title: 'Preços e moedas',
      questions: [
        {
          title: 'Como faço para comprar moedas?',
          response: 'Para comprar moedas, vá na aba de moedas para fazer uma compra',
        },
        {
          title: 'Porque preciso comprar moedas para aceitar um pedido?',
          response: 'Para darmos confiança ao usuario de que você está realmente disposto a fazer o trabalho proposto',
        },
      ],
    },
    {
      id: 2,
      icon: '${ICON}',
      title: 'Como utilizar',
      questions: [
        {
          title: 'Como aceitar um pedido',
          response: "No app, vá em 'ORÇAMENTOS' e lá aparecerá todos os pedidos abertos",
        },
        {
          title: 'Como abrir um serviço?',
          response: "Para abrir um serviço, vá na aba 'SERVIÇOS' escolha a categoria e sub-categoria e responda o questionario",
        },
      ],
    },
  ];

  const [value, setValue] = useState();
  const [inCategoria, setInCategoria] = useState(0);

  const questions = categoriaItens.map(item => item.questions);
  const categorias = [].concat([0,1,3,4], [0,7,2,8]);

  useEffect(() => {
    console.log('----------------------------------------------------------');
    console.log(questions, categorias);
  },[])

  return (
    <FAQFull>
      <FAQContainer>
        <Title size={25} style={{ margin: '20px 0' }}>
          Como podemos <span>ajudar?</span>
        </Title>
        <Search>
          <Input placeholder="Escreva aqui sua dúvida" onChange={e => setValue(e.target.value)} />
          <SearchButton
            src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
            alt="Search"
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
        {}
      </FAQContainer>
    </FAQFull>
  );
};

export default FAQ;




          // <Details>
          //   <Summary>Como eu crio meu perfil?</Summary>
          //   <Text
          //     size={18}
          //     style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
          //     Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui
          //   </Text>
          // </Details>
