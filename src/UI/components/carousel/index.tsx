import React, { useEffect, useRef, useState } from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles';
import { InputCard } from './inputCard';
import useDraggableScroll from 'use-draggable-scroll';
import { ServiceHighlights } from '../../../services/services';
import useWindowSize from '../../../utils/hooks';

export const Carousel: React.FC = () => {
  const [serviceHighlightsLineOne, setServiceHighlightsLineOne] = useState([]);
  const [serviceHighlightsLineTwo, setServiceHighlightsLineTwo] = useState([]);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 325, height: 151 };

  const defineLines = (highlights) => {
    console.log(highlights);
    let arrayOne;
    let arrayTwo;
    if (cardSize.width * highlights.length > windowSize.width * 2) {
      const index = Math.floor(highlights.length / 2 + 1);
      arrayOne = highlights.slice(0, index);
      arrayTwo = highlights.slice(index);
    } else {
      arrayOne = highlights;
      arrayTwo = [];
    }
    return { arrayOne, arrayTwo };
  };

  useEffect(() => {
    void ServiceHighlights()
      .then((data) => {
        const { arrayOne, arrayTwo } = defineLines(data);
        setServiceHighlightsLineOne(arrayOne);
        setServiceHighlightsLineTwo(arrayTwo);
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

  return (
    <Container>
      <Title style={{ marginBottom: 12 }}>Categorias em destaque</Title>
      <Divider />
      <ScrollAreaContainer>
        <HorizontalScrollArea
          ref={ref1}
          onWheel={(e) => {
            onWheel(e, ref1);
          }}
          onMouseDown={onMouseDownRef1}>
          {serviceHighlightsLineOne.map((highlight, index) => (
            <InputCard
              size={cardSize}
              title={highlight.name}
              key={index}
              backgroundImage={highlight.desktop_image_path}
            />
          ))}
        </HorizontalScrollArea>
        <HorizontalScrollArea
          ref={ref2}
          onWheel={(e) => {
            onWheel(e, ref2);
          }}
          onMouseDown={onMouseDownRef2}>
          {serviceHighlightsLineTwo.map((highlight, index) => (
            <InputCard
              size={cardSize}
              title={highlight.name}
              key={index}
              backgroundImage={highlight.desktop_image_path}
            />
          ))}
        </HorizontalScrollArea>
      </ScrollAreaContainer>
      <button>Quero me cadastrar</button>
      <div>{}</div>
    </Container>
  );
};
