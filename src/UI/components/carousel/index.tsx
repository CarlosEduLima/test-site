import React, { useEffect, useRef, useState } from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles';
import { InputCard } from './inputCard';
import useDraggableScroll from 'use-draggable-scroll';
import { ServiceHighlights } from '../../../services/services';

export const Carousel: React.FC = () => {
  const [serviceHighlights, setServiceHighlights] = useState([]);
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  useEffect(() => {
    void ServiceHighlights()
      .then((data) => {
        setServiceHighlights(data);
      })
      .catch(console.log);
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
      <Divider />
      <ScrollAreaContainer>
        <HorizontalScrollArea ref={ref} onWheel={onWheel} onMouseDown={onMouseDown}>
          {serviceHighlights.map((highlight, index) => (
            <InputCard
              title={highlight.name}
              key={index}
              backgroundImage={highlight.desktop_image_path}
            />
          ))}
        </HorizontalScrollArea>
      </ScrollAreaContainer>
      <button>Quero me cadastrar</button>
    </Container>
  );
};
