/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';
import {
  FAQFull,
  Container,
  ButtonBack,
  BoxBack,
  IconBack,
  MarckdownContainer,
  ContentQuestions,
  Label,
  BoxQuestion,
  ButtonContainer,
} from './styles';

import GoBackIcon from '../../../assets/goBack.svg';
import HelpIcon from '../../../assets/help.svg';
import { Button } from '../Button';
import { GetAnswer, PostAnswerFeedback, GetFaqAnswerReview } from '../../../services/faq';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

const ViewAnswer = (questionid: any) => {
  const [markdonwAnswer, setMarkdonwAnswer] = useState('');
  const [canView, setCanView] = useState<boolean>(false);
  const [answerId, setAnswerId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const getData = async () => {
    const answerObj = await GetAnswer(parseInt(questionid?.id));
    setAnswerId(answerObj?.answers[0]?.id);
    const data = await GetFaqAnswerReview(answerObj?.answers[0]?.id);
    setMarkdonwAnswer(answerObj?.answers[0]?.answer);
    setCanView(data?.canReview);
  };

  useEffect(() => {
    questionid?.id && getData();
  }, []);

  const handleReview = async (helped: boolean) => {
    setIsLoading(true);
    await PostAnswerFeedback({
      faq_answser_id: answerId,
      helped: helped,
    });
    setIsLoading(false);
    setCanView(false);
  };

  return (
    <>
      <FAQFull></FAQFull>
      <Container>
        <BoxBack onClick={() => router.back()}>
          <IconBack src={GoBackIcon} alt="teste" />
          <ButtonBack>Voltar à página inicial de ajuda</ButtonBack>
        </BoxBack>
        <MarckdownContainer>
          <ReactMarkdown>{markdonwAnswer}</ReactMarkdown>
        </MarckdownContainer>
        <hr />
        {canView ? (
          <BoxQuestion>
            <IconBack src={HelpIcon} alt="help" />
            <ContentQuestions>
              <Label>Este artigo te ajudou?</Label>
              <ButtonContainer>
                <Button
                  variant={'primary'}
                  widthCircle={''}
                  heightCircle="10px"
                  loading={isLoading}
                  onClick={() => handleReview(true)}>
                  SIM
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  variant={'secondary'}
                  widthCircle={''}
                  heightCircle="10px"
                  onClick={() => handleReview(false)}>
                  NÃO
                </Button>
              </ButtonContainer>
            </ContentQuestions>
          </BoxQuestion>
        ) : null}
      </Container>
    </>
  );
};

export default ViewAnswer;
