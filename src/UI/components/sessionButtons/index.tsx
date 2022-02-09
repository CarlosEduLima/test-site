import React, { useState } from 'react';
import { Title } from '../../components/title';
import { Button } from '../../components/Button';
import { SubTitle, Container, ButtonContainer, Question, Answer, AnswerContainer, AnswerText } from './styles';

interface SessionButtonsProps {
    multiSelect: boolean;
    data: any;
}

const SessionButtons: React.FC<SessionButtonsProps> = ({ multiSelect, data }) => {

    const [selectColor, setSelectColor] = useState([]);

    const onClick = (i) => {
        data.forEach((_, index) => {
            if (index === i) {
                if (multiSelect) {
                    selectColor.splice(index, 1, selectColor[index] ? false : true)
                } else {
                    selectColor.splice(index, 1, true)
                }
                setSelectColor([...selectColor])
            } else {
                if (multiSelect) {
                    selectColor.splice(index, 1, selectColor[index] || false)
                } else {
                    selectColor.splice(index, 1, false)
                }
                setSelectColor([...selectColor])
            }
        })
    }

    return (
        <Container>
            <Title title={'Logotipo'} />
            <SubTitle>
                Responda algumas perguntas para entendermos melhor que tipo de serviço você precisa e
                <p>logo após iremos te conectar com profissionais qualificados.</p>
            </SubTitle>
            <h2>----------------------------------------------- BARRA DE PROGRESSO ------------------------------------------------</h2>
            <Question>Pergunta AQUI</Question>
            <Answer>
                {data.map((text, index) => (
                    <AnswerContainer
                        key={index}
                        border={selectColor[index] ? '#373AAD' : '#BED6E0'}
                        onClick={() => onClick(index)} >
                        <AnswerText>{text}</AnswerText>
                    </AnswerContainer>
                ))}
            </Answer>
            <ButtonContainer>
                <Button children={'Próximo'} variant={'secondary'} widthCircle={''} heightCircle={''} height='35px' />
            </ButtonContainer>
        </Container>
    )
}

export default SessionButtons;