import React, { useEffect, useRef, useState } from 'react';
import { HorizontalScrollArea, ScrollAreaContainer } from '../carousel/styles';
import { GetRating } from '../../../services/rating';
import { Button } from '../Button';
import Link from 'next/link';
import useWindowSize from '../../../utils/hooks';
import useDraggableScroll from 'use-draggable-scroll';
import mockIcon from '../../../assets/mock.svg';
import estrelaIcon from '../../../assets/estrela.svg';
import Image from 'next/image';
import * as S from './styles';

export const CardCategories: React.FC = (id: any) => {
  const [GetRatingProfessionalsLineOne, setGetRatingProfessionalsLineOne]: any = useState([]);
  const [alignCarouselCenter, setAlignCarouselCenter] = useState(false);
  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  // const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 325, height: 151 };

  const defineLines = (highlights) => {
    let arrayOne: any;
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
    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const data: any = await GetRating(parseInt(id.id));
      const { arrayOne }: any = defineLines(data);
      setGetRatingProfessionalsLineOne(arrayOne);
    })();
  }, []);

  function onWheel(ev: React.WheelEvent, ref): void {
    if (ref.current) {
      const initialPosition: { scrollLeft: number } = {
        scrollLeft: ref.current.scrollLeft,
      };
      ref.current.scrollLeft = initialPosition.scrollLeft + ev.deltaY * 10;
    }
  };

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
    <S.Container>
      <S.ContainerDivider>
        <S.Title>Serviços</S.Title>
        <S.Divider />
      </S.ContainerDivider>
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
            <S.CardContainer key={highlight.id}>
              <Image
                src={highlight.desktop_image == '' || mockIcon}
                alt={''}
                width={325}
                height={228}
              />
              <S.CardBox>
                <S.CardTitle>
                  {highlight.name}
                  <S.ContainerRating>
                    <S.TextRating>{highlight.average_rating}</S.TextRating>
                    <S.CardIcon src={estrelaIcon} alt={'rating'} width={16} height={16} />
                  </S.ContainerRating>
                </S.CardTitle>
                <S.CardBoxContent>{highlight.description}</S.CardBoxContent>
                <S.CardContent>
                  {/*<S.CardP>
                    R${highlight.prece}
                    <span>Média de preço </span>
                    </S.CardP>*/}
                  <Link href="/cadastro">
                    <Button variant={'secondary'} widthCircle={''} heightCircle={''} height={'37px'} onClick={enableScroll}>
                      Quero contratar
                    </Button>
                  </Link>
                </S.CardContent>
              </S.CardBox>
            </S.CardContainer>
          ))}
        </HorizontalScrollArea>
      </ScrollAreaContainer>
    </S.Container>
  );
};
