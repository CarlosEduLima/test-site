import React, { useState, useEffect, useRef } from 'react';
import { GetRatingProfessionals, RatingProfessionalsProps } from 'src/services/rating';
import { CardRating } from '../cardRating';
import useWindowSize from '../../../utils/hooks';
import useDraggableScroll from 'use-draggable-scroll';
import * as S from './styles';

interface Props {
  title: string;
}

export const WhoAreWe: React.FC<Props> = ({ title }: Props) => {
  // Início da estrutura do carrousel //
  const [serviceHighlightsLineOne, setServiceHighlightsLineOne]: any = useState([]);
  const [serviceHighlightsLineTwo, setServiceHighlightsLineTwo]: any = useState([]);
  const [alignCarouselCenter, setAlignCarouselCenter] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 325, height: 151 };

  useEffect(() => {
    const getData = async () => {
      const response = await GetRatingProfessionals();

      const { arrayOne, arrayTwo } = defineLines(response);
      setServiceHighlightsLineOne(arrayOne);
      setServiceHighlightsLineTwo(arrayTwo);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    void getData();
  }, []);

  const defineLines = (highlights) => {
    let arrayOne;
    let arrayTwo;

    if (cardSize.width * highlights.length > windowSize.width * 2) {
      const index = Math.floor(highlights.length / 2 + 1);
      arrayOne = highlights.slice(0, index);
      arrayTwo = highlights.slice(index);
    } else {
      arrayOne = highlights;
      arrayTwo = [];
      cardSize.width * highlights.length < windowSize.width && setAlignCarouselCenter(true);
    }
    return { arrayOne, arrayTwo };
  };

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
  // Fim da estrutura do carrousel //

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Divider />
      <S.ScrollAreaContainer>
        <S.HorizontalScrollArea
          ref={ref1}
          alignCenter={alignCarouselCenter}
          onWheel={(e) => {
            onWheel(e, ref1);
          }}
          onMouseEnter={() =>
            cardSize.width * serviceHighlightsLineOne.length > windowSize.width && disableScroll()
          }
          onMouseLeave={enableScroll}
          onMouseDown={onMouseDownRef1}>
          {serviceHighlightsLineOne?.map((item, index) => (
            <CardRating
              description={item?.description}
              nameProfessional={item?.user_to}
              numberRating={item?.rating}
              key={index}
            />
          ))}
        </S.HorizontalScrollArea>
        <S.HorizontalScrollArea
          ref={ref2}
          alignCenter={false}
          onWheel={(e) => {
            onWheel(e, ref2);
          }}
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          onMouseDown={onMouseDownRef2}>
          {serviceHighlightsLineTwo?.map((item, index) => (
            <CardRating
              description={item?.description}
              nameProfessional={item?.user_to}
              numberRating={item?.rating}
              key={index}
            />
          ))}
        </S.HorizontalScrollArea>
      </S.ScrollAreaContainer>
    </S.Container>
  );
};
