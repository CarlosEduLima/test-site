import React, { useEffect, useRef } from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles';
import { InputCard } from './inputCard';
import useDraggableScroll from 'use-draggable-scroll';
import { ServicesHighlight } from '../../../services/services';

export const Carousel: React.FC = () => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  useEffect(() => {
    void ServicesHighlight().then(console.log).catch(console.log);
  }, []);

  function onWheel(ev: React.WheelEvent): void {
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
      <Divider></Divider>
      <ScrollAreaContainer>
        <HorizontalScrollArea ref={ref} onWheel={onWheel} onMouseDown={onMouseDown}>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151" />
        </HorizontalScrollArea>
      </ScrollAreaContainer>
      <button>Quero me cadastrar</button>
    </Container>
  );
};
