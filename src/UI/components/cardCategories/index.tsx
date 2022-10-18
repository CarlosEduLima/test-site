import { useRef } from 'react';
import {
  Box,
  ButtonLeft,
  ButtonRight,
  CardBox,
  CardBoxContent,
  CardContainer,
  CardContent,
  CardImage,
  CardP,
  CardTitle,
  Container,
  Title,
} from './styles';
import mockIcon from '../../../assets/mock.svg';
import forwardIcon from '../../../assets/ir.svg';
import backIcon from '../../../assets/voltar.svg';
import { Button } from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const arr = [
  {
    id: 1,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'QA',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'UX Design',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 1,
    title: 'Logotipos',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'Banners',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 1,
    title: 'Logotipos',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'Banners',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 1,
    title: 'Logotipos',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'Banners',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 1,
    title: 'Logotipos',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'Banners',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 1,
    title: 'Logotipos',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 2,
    title: 'Banners',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
  {
    id: 3,
    title: 'Programação',
    image: mockIcon,
    content: 'HTML, CSS, Python',
    prece: '500',
    pontuacao: '4.8',
  },
];

export function CardCategories() {
  const carousel = useRef<any>();

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <Container>
        <Title>
          Os mais pedidos na Iziw <hr />
        </Title>

        <ButtonRight onClick={handleLeftClick}>
          <Image src={backIcon} alt="voltar" />
        </ButtonRight>
        <ButtonLeft onClick={handleRightClick}>
          <Image src={forwardIcon} alt="voltar" />
        </ButtonLeft>
        <Box ref={carousel}>
          {arr.map((i: any) => {
            return (
              <CardContainer key={i.id}>
                <CardImage src={i.image} width={325} height={228} />
                <CardBox>
                  <CardTitle>
                    {i.title} <span> {i.pontuacao}</span>
                  </CardTitle>
                  <CardBoxContent>{i.content} </CardBoxContent>
                  <CardContent>
                    <CardP>
                      R${i.prece}
                      <span>Média de preço </span>
                    </CardP>
                    <Link href="/RegisterUser">
                      <Button variant={'secondary'} widthCircle={''} heightCircle={''}>
                        Quero contratar
                      </Button>
                    </Link>
                  </CardContent>
                </CardBox>
              </CardContainer>
            );
          })}
        </Box>
      </Container>
    </>
  );
}
