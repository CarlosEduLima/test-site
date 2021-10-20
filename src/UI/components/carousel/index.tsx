import React, { useRef } from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles'
import { InputCard } from './input-card'
import useDraggableScroll from 'use-draggable-scroll';

export const Carousel: React.FC = () => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  function onWheel(ev: React.WheelEvent): void {
    if (ref.current) {
      let initialPosition = {
        scrollLeft: ref.current.scrollLeft,
      }
      ref.current.scrollLeft = initialPosition.scrollLeft + ev.deltaY * 3
    }
    console.log(ev)
  }

  return (
    <Container>
      <Title style={{ marginBottom: 12 }}>Categorias em destaque</Title>
      <Divider></Divider>
    <ScrollAreaContainer>
        <HorizontalScrollArea ref={ref} onWheel={(onWheel)} onMouseDown={onMouseDown}>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
      </HorizontalScrollArea>
      </ScrollAreaContainer>
      <button>Quero me cadastrar</button>
    </Container>
  )
}
