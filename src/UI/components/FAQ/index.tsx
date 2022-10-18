/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';

import * as S from './styles';

import { BsChevronRight } from 'react-icons/bs';
import Flag from '../../../assets/flag.svg';
import Wvalues from '../../../assets/wvalues.svg';
import Interrogation from '../../../assets/interrogation.svg';
import SearchBtn from '../../../assets/searchBtn.svg';

import { Button } from '../Button';

import { GetFaq } from '../../../services/faq';

const FAQ: React.FC = () => {
  const mockFaqCategories = [
    {
      id: 1,
      name: 'Primeiros passos',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 3,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 10,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 9,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 2,
      name: 'Preços e moedas',
      icon: Wvalues,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 2,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 3,
      name: 'Como utilizar',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 4,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 5,
          previous_answer: 'preview',
          question: 'Quais são as formas de',
        },
        {
          id: 5,
          previous_answer: 'preview',
          question: 'o app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Interrogation,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 6,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 6,
          previous_answer: 'preview',
          question: 'Quais  o app aceita?',
        },
        {
          id: 6,
          previous_answer: 'preview',
          question: 'Quais são as app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 7,
          previous_answer: 'preview',
          question: 'Quais são as formas',
        },
        {
          id: 6,
          previous_answer: 'preview',
          question: 'pagamento',
        },
        {
          id: 8,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 9,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita? Quais são as formas',
        },
      ],
    },
  ];

  const [value, setValue] = useState('');
  const [inCategoria, setInCategoria] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const fullQuestions = mockFaqCategories.flatMap((item) => item.questions);
  //const [filteredQuestions] = useState([]);

  const [data, setData] = useState([]);

  const getData = () => {
    //const test = 
    //console.log('ggggg', test)
    //const response = await GetFaq();
    //setData(response)

  }

  useEffect(() => {
    getData()
  }, [])

  const SearchQuestion = (valor) => {
    setValue(valor);
    const texto = valor;
    if (texto !== undefined && texto !== '') {
      const test = data.map(item => item.questions.filter(question => question.question.includes(valor)))
      console.log('aa', test)
      setFilteredQuestions(data.filter(item =>  item.questions.filter(question => question.question.includes(valor))))
      console.log(filteredQuestions)
      /*filteredQuestions.splice(0);
      setInCategoria(-1);
      for (const question of fullQuestions) {
        if (
          question.previous_answer.toLowerCase().includes(texto.toLowerCase()) ||
          question.question.toLowerCase().includes(texto.toLowerCase())
        ) {
          filteredQuestions.push(question);
        }
      }
    }
    if (texto.length === 0) {
      setInCategoria(0);
    }*/
    }
  };

  return (
    <S.FAQFull>
      <S.SearchContainer>
        <S.Title size={25} className="search">
          Como podemos <span>ajudar?</span>
        </S.Title>
        <S.Search>
          <S.Input
            placeholder="Escreva aqui sua dúvida"
            onKeyUp={(e: any) => {
              SearchQuestion(e.target.value);
            }}
          />
          <S.SearchButton onClick={() => SearchQuestion(value)} src={SearchBtn} alt="Search" />
        </S.Search>
      </S.SearchContainer>
      <S.FAQContainer>
        {value ?
          <>
            <S.Text className="categoria" size={25}>
              Resultados da pesquisa
            </S.Text>
            <S.Divider />
            {data.map(result => (
              <S.ResultContainer>
                <S.CategoryResultTitleContainer>
                  <S.CategoryResultTitle>
                    {result.name}
                  </S.CategoryResultTitle>
                </S.CategoryResultTitleContainer>
                <S.ResultQuestionsContainer>
                  {result.questions.map(question => (
                    <S.ResultQuestionContainer>
                      <S.ResultQuestionInfo>
                        <S.QuestionResultTitle>
                          {question.question}
                        </S.QuestionResultTitle>
                        <S.ResultAnswerPreview>
                          {question.previous_answer}
                        </S.ResultAnswerPreview>
                      </S.ResultQuestionInfo>
                      <S.ResultQuestionIconContainer>
                        <BsChevronRight size={16} />
                      </S.ResultQuestionIconContainer>
                    </S.ResultQuestionContainer>
                  ))}
                </S.ResultQuestionsContainer>
              </S.ResultContainer>
            ))}
          </> :
          <>
            <S.Text className="categoria" size={25}>
              Ou escolha uma categoria relacionada à sua dúvida
            </S.Text>
            <S.Categorias>
              {data.map((category) => (
                <S.CategoryCard key={category.id}>
                  <S.CategoryCardHeader>
                    <S.CategoryCardTitle>{category.name}</S.CategoryCardTitle>
                  </S.CategoryCardHeader>
                  <S.CategoryCardQuestionsContainer>
                    {category.questions.map((question) => (
                      <S.CategoryCardQuestion key={question.id}>
                        <S.QuestionTitleContainer>
                          <S.QuestionTitle>{question.question}</S.QuestionTitle>
                        </S.QuestionTitleContainer>
                        <S.IconContainer>
                          <BsChevronRight size={16} />
                        </S.IconContainer>
                      </S.CategoryCardQuestion>
                    ))}
                  </S.CategoryCardQuestionsContainer>
                </S.CategoryCard>
              ))}
            </S.Categorias>
          </>
        }

      </S.FAQContainer>
      <S.ContactSession>
        <S.ContactText size={28}>Quer entrar em contato?</S.ContactText>
        <S.ContactButtonsContainer>
          <S.ButtonContainer>
            <Button
              height="37px"
              variant="secondary"
              fontSize="16px"
              widthCircle=""
              heightCircle=""
            >
              Mande um e-mail
            </Button>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button
              height="37px"
              variant="secondary"
              fontSize="16px"
              widthCircle=""
              heightCircle="">
              Fale pelo WhatsApp
            </Button>
          </S.ButtonContainer>
        </S.ContactButtonsContainer>
      </S.ContactSession>
    </S.FAQFull>
  );
};

export default FAQ;
