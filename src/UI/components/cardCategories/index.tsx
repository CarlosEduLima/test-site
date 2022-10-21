import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import { GetRating } from '../../../services/rating';
import useWindowSize from '../../../utils/hooks';

import { Button } from '../Button';
import { InputCard } from '../carousel/inputCard';
import { HorizontalScrollArea, ScrollAreaContainer } from '../carousel/styles';

import {
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
import Image from 'next/image';

export const CardCategories: React.FC = (id: any) => {
  const [GetRatingProfessionalsLineOne, setGetRatingProfessionalsLineOne] = useState<any[]>([]);
  const [GetRatingProfessionalsLineTwo, setGetRatingProfessionalsLineTwo] = useState<any[]>([]);
  const [alignCarouselCenter, setAlignCarouselCenter] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 325, height: 151 };
  const defineLines = (highlights) => {
    let arrayOne: GetRating[];
    if (cardSize.width * highlights.length > windowSize.width * 2) {
      const index = Math.floor(highlights.length / 2 + 1);
      arrayOne = highlights.slice(0, index);
    } else {
      arrayOne = highlights;
      cardSize.width * highlights.length < windowSize.width && setAlignCarouselCenter(true);
    }
    return { arrayOne };
  };

  useEffect(() => {
    void GetRating(parseInt(id.id))
      .then((data) => {
        const { arrayOne } = defineLines(data);
        setGetRatingProfessionalsLineOne(arrayOne);
      })
      .catch(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onWheel(ev: React.WheelEvent, ref): void {
    if (ref.current) {
      const initialPosition: { scrollLeft: number } = {
        scrollLeft: ref.current.scrollLeft,
      };
      ref.current.scrollLeft = initialPosition.scrollLeft + ev.deltaY * 3;
    }
  }

  function enableScroll(): void {
    document.removeEventListener('wheel', preventDefault, false);
  }

  function disableScroll(): void {
    document.addEventListener('wheel', preventDefault, { passive: false });
  }

  function preventDefault(e: Event) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    ref1.current.scrollLeft -= ref1.current.offsetWidth;
  };
  const handleRightClick = (e: any) => {
    e.preventDefault();
    ref1.current.scrollLeft += ref1.current.offsetWidth;
  };

  return (
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
      <ScrollAreaContainer>
        <HorizontalScrollArea
          ref={ref1}
          alignCenter={alignCarouselCenter}
          onWheel={(e) => {
            onWheel(e, ref1);
          }}
          onMouseEnter={() =>
            cardSize.width * GetRatingProfessionalsLineOne.length > windowSize.width &&
            disableScroll()
          }
          onMouseLeave={enableScroll}
          onMouseDown={onMouseDownRef1}>
          {GetRatingProfessionalsLineOne.map((highlight, index) => (
            <CardContainer key={highlight.id}>
              <CardImage src={mockIcon} width={325} height={228} />
              <CardBox>
                <CardTitle>
                  {highlight.name} <span> {highlight.average_rating}</span>
                </CardTitle>
                <CardBoxContent>{highlight.description} </CardBoxContent>
                <CardContent>
                  <CardP>
                    R${highlight.prece}
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
          ))}
        </HorizontalScrollArea>
      </ScrollAreaContainer>
    </Container>
  );
};
