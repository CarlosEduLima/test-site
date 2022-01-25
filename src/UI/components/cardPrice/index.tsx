import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Divider,
  HorizontalScrollArea,
  ScrollAreaContainer,
  Title,
  ButtonRegister,
} from './styles';
import { InputCard } from './inputCard';
import useDraggableScroll from 'use-draggable-scroll';
import { IServiceProps, ServiceHighlights } from '../../../services/services';
import useWindowSize from '../../../utils/hooks';

export const CardPrice: React.FC = () => {
  const [serviceHighlightsLineOne, setServiceHighlightsLineOne] = useState<IServiceProps[]>([]);
  const [serviceHighlightsLineTwo, setServiceHighlightsLineTwo] = useState<IServiceProps[]>([]);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 323, height: 378 };

  const defineLines = (highlights) => {
    let arrayOne: IServiceProps[];
    let arrayTwo: IServiceProps[];
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

  return (
    <Container>
      <Title style={{ marginBottom: 12 }}>Pacotes</Title>
      <Divider />
      <ScrollAreaContainer>
        <HorizontalScrollArea
          ref={ref1}
          onWheel={(e) => {
            onWheel(e, ref1);
          }}
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          onMouseDown={onMouseDownRef1}>
          <InputCard
            size={cardSize}
            title="PACOTE X"
            description1="xxx moedas"
            description2="xx mais chances de fechar um pedido"
            description3="Desbloqueie de x a x clientes"
            split={3}
            priceSplit="XXX,XX"
            price="XXX,XX"
          />
          <InputCard
            size={cardSize}
            title="PACOTE X"
            description1="xxx moedas"
            description2="xx mais chances de fechar um pedido"
            description3="Desbloqueie de x a x clientes"
            split={3}
            priceSplit="XXX,XX"
            price="XXX,XX"
          />
          <InputCard
            size={cardSize}
            title="PACOTE X"
            description1="xxx moedas"
            description2="xx mais chances de fechar um pedido"
            description3="Desbloqueie de x a x clientes"
            split={3}
            priceSplit="XXX,XX"
            price="XXX,XX"
          />
        </HorizontalScrollArea>
      </ScrollAreaContainer>
      <div>{}</div>
    </Container>
  );
};
