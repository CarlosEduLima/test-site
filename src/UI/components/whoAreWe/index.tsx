import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { CardRating } from '../cardRating';
import useWindowSize from '../../../utils/hooks';
import useDraggableScroll from 'use-draggable-scroll';
import * as S from './styles';

const dataMock = [
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'Carlos',
        numberRating: 4.8,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'José',
        numberRating: 4.5,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 5,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 4.1,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 4.9,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 4.4,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 5,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 4.7,
    },
    {
        description: '"Excelente profissional, entregou tudo conforme o combinado. Recomendo muito!"',
        nameProfessional: 'César',
        numberRating: 4.9,
    },
];

export const WhoAreWe: React.FC = () => {

    const [data, setData]: any = useState();

    const RenderCards = () => {
        const response: any = dataMock;
        setData(response)
    };

    useEffect(() => {
        RenderCards()
    }, []);

    // Início da estrutura do carrousel //
    const [serviceHighlightsLineOne, setServiceHighlightsLineOne] = useState([]);
    const [serviceHighlightsLineTwo, setServiceHighlightsLineTwo] = useState([]);
    const [alignCarouselCenter, setAlignCarouselCenter] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const onMouseDownRef1 = useDraggableScroll(ref1).onMouseDown;
    const onMouseDownRef2 = useDraggableScroll(ref2).onMouseDown;
    const windowSize = useWindowSize();
    const cardSize = { width: 325, height: 151 };

    const defineLines = (highlights) => {
        let arrayOne: any = dataMock;
        let arrayTwo: any = dataMock;
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

    useEffect(() => {
        // void ServiceHighlights() // ***** SERVICE *****

        data?.then((data) => {
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
    };

    function enableScroll(): void {
        document.removeEventListener('wheel', preventDefault, false);
    };

    function disableScroll(): void {
        document.addEventListener('wheel', preventDefault, { passive: false });
    };

    function preventDefault(e: Event) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    };
    // Fim da estrutura do carrousel //

    return (
        <S.Container>
            <S.Title>O que dizem sobre nós</S.Title>
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
                    onMouseDown={onMouseDownRef1}
                >
                    {data?.map((item) =>
                        <CardRating
                            description={item.description}
                            nameProfessional={item.nameProfessional}
                            numberRating={item.numberRating}
                        />
                    )}
                </S.HorizontalScrollArea>
                <S.HorizontalScrollArea
                    ref={ref2}
                    alignCenter={false}
                    onWheel={(e) => {
                        onWheel(e, ref2);
                    }}
                    onMouseEnter={disableScroll}
                    onMouseLeave={enableScroll}
                    onMouseDown={onMouseDownRef2}
                >
                    {data?.map((item) =>
                        <CardRating
                            description={item.description}
                            nameProfessional={item.nameProfessional}
                            numberRating={item.numberRating}
                        />
                    )}
                </S.HorizontalScrollArea>
            </S.ScrollAreaContainer>
            <S.ButtonContainer>
                <Link href="/RegisterUser">
                    <Button
                        children={'Quero me cadastrar'}
                        variant={'primary'}
                        widthCircle={''}
                        heightCircle={''}
                        height='37px'
                    />
                </Link>
            </S.ButtonContainer>
        </S.Container >
    )
}