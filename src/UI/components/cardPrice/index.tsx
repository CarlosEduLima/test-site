import React, { useEffect, useRef, useState } from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles';
import { InputCard } from './inputCard';
import useDraggableScroll from 'use-draggable-scroll';
import useWindowSize from '../../../utils/hooks';
import { ServiceHighlightsDadosApi, DadosApi } from './serviceAPI';

export const CardPrice: React.FC = () => {
  const [serviceLineOne, setServiceLineOne] = useState<DadosApi[]>([]);
  const ref1 = useRef(null);
  const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
  const windowSize = useWindowSize();
  const cardSize = { width: 323, height: 378 };

  // Uso temporário, apenas para teste estático do card
  const staticApi = {
    name: 'Plano 50 plus',
    description1: 'xxx moedas',
    description2: 'xx mais chances de fechar um pedido',
    description3: 'Desbloqueie de x a x clientes',
    split: 3,
    price: 'XXX,XX',
    priceSplit: 'XXX,XX',
  };
  //

  const defineLinesApi = (highlights) => {
    let arrayOne: DadosApi[];
    if (cardSize.width * highlights.length > windowSize.width * 2) {
      const index = Math.floor(highlights.length / 2 + 1);
      arrayOne = highlights.slice(0, index);
    } else {
      arrayOne = highlights;
    }
    return { arrayOne };
  };

  useEffect(() => {
    void ServiceHighlightsDadosApi()
      .then((data) => {
        const { arrayOne } = defineLinesApi(data);
        setServiceLineOne(arrayOne);
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
      <Title className="marginBottom">Pacotes</Title>
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
          {/* Para usar o card com API, utilize o código abaixo:

          {serviceLineOne.map((highlight, index) => (
            <InputCard
              size={cardSize}
              title={highlight.name}
              description1={highlight.description}
              description2={staticApi.description2}
              description3={staticApi.description3}
              split={staticApi.split}
              priceSplit={staticApi.priceSplit}
              price={staticApi.price}
            />
          ))}
        */}

          {/* Para usar o card com dados estáticos, utilize o código abaixo:
          
          <InputCard
            size={cardSize}
            title={staticApi.name}
            description1={staticApi.description1}
            description2={staticApi.description2}
            description3={staticApi.description3}
            split={staticApi.split}
            priceSplit={staticApi.priceSplit}
            price={staticApi.price}
          />
          */}

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
