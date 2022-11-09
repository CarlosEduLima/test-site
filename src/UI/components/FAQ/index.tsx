/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Button } from '../Button';
import { GetFaq, GetWhatsappNumber, IFAQProps, IQuestionProps } from '../../../services/faq';
import SearchBtn from '../../../assets/searchBtn.svg';
import QuestionIcon from '../../../assets/questionFaqIcon.png';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import slugify from 'slugify';

const FAQ: React.FC = () => {
  const [value, setValue] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [data, setData] = useState<IFAQProps[]>([]);
  const [whatsappData, setWhatsappData] = useState<string>(null);

  const getData = async () => {
    const response = await GetFaq();
    console.log('tess', response);
    setData(response);
  };

  const getWhatsNumber = async () => {
    const response = await GetWhatsappNumber();
    setWhatsappData(response.value);
  };

  useEffect(() => {
    void getData();
    void getWhatsNumber();
  }, []);

  const SearchQuestion = (valor) => {
    setValue(valor);
    if (valor !== undefined && valor !== '') {
      const filterData = data.map((cat) => ({
        ...cat,
        questions: cat.questions.filter((question) => question.question.includes(valor)),
      }));
      setFilteredQuestions(filterData);
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
        {value ? (
          <>
            <S.Text className="categoria" size={25}>
              Resultados da pesquisa
            </S.Text>
            <S.Divider />
            {filteredQuestions.map(
              (result) =>
                result.questions.length > 0 && (
                  <S.ResultContainer>
                    <S.CategoryResultTitleContainer>
                      <Image src={QuestionIcon} width={22} height={22} alt="questionIcon" />
                      <S.CategoryResultTitle style={{ marginLeft: '10px' }}>
                        {result.name}
                      </S.CategoryResultTitle>
                    </S.CategoryResultTitleContainer>
                    <S.ResultQuestionsContainer>
                      {result.questions.map((question: IQuestionProps) => (
                        <Link
                          href={`/perguntas-frequentes/${question.id}/${slugify(
                            question.question,
                          ).toLowerCase()}`}
                          key={question.id}
                          passHref>
                          <S.ResultQuestionContainer>
                            <S.ResultQuestionInfo>
                              <S.QuestionResultTitle>{question.question}</S.QuestionResultTitle>
                              <S.ResultAnswerPreview>
                                {question.previous_answer}
                              </S.ResultAnswerPreview>
                            </S.ResultQuestionInfo>
                            <S.ResultQuestionIconContainer>
                              <BsChevronRight size={16} />
                            </S.ResultQuestionIconContainer>
                          </S.ResultQuestionContainer>
                        </Link>
                      ))}
                    </S.ResultQuestionsContainer>
                  </S.ResultContainer>
                ),
            )}
          </>
        ) : (
          <>
            <S.Text className="categoria" size={25}>
              Ou escolha uma categoria relacionada à sua dúvida
            </S.Text>
            <S.Categorias>
              {data.map((category) => (
                <S.CategoryCard key={category.id}>
                  <S.CategoryCardHeader>
                    <Image src={QuestionIcon} width={28} height={28} alt="questionIcon" />
                    <S.CategoryCardTitle style={{ marginLeft: '10px' }}>
                      {category.name}
                    </S.CategoryCardTitle>
                  </S.CategoryCardHeader>
                  <S.CategoryCardQuestionsContainer>
                    {category.questions.slice(0, 4).map((question: IQuestionProps) => (
                      <Link
                        href={`/perguntas-frequentes/${question.id}/${slugify(
                          question.question,
                        ).toLowerCase()}`}
                        passHref
                        key={question.id}>
                        <S.CategoryCardQuestion>
                          <S.QuestionTitleContainer>
                            <S.QuestionTitle>{question.question}</S.QuestionTitle>
                          </S.QuestionTitleContainer>
                          <S.IconContainer>
                            <BsChevronRight size={16} />
                          </S.IconContainer>
                        </S.CategoryCardQuestion>
                      </Link>
                    ))}
                  </S.CategoryCardQuestionsContainer>
                </S.CategoryCard>
              ))}
            </S.Categorias>
          </>
        )}
      </S.FAQContainer>
      <S.ContactSession>
        <S.ContactText size={28}>Quer entrar em contato?</S.ContactText>
        <S.ContactButtonsContainer>
          <Link href={'/contato'} passHref>
            <S.ButtonContainer>
              <Button
                height="37px"
                variant="secondary"
                fontSize="16px"
                widthCircle=""
                heightCircle="">
                Mande um e-mail
              </Button>
            </S.ButtonContainer>
          </Link>
          {whatsappData && (
            <a
              href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${whatsappData}`}
              target="_blank"
              rel="noreferrer">
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
            </a>
          )}
        </S.ContactButtonsContainer>
      </S.ContactSession>
    </S.FAQFull>
  );
};

export default FAQ;
