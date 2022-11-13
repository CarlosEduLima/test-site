import React from 'react';
import * as S from './styles';
import WhoWeAre from '../../../assets/whoWeAre.svg';
import WhoWeAreTwo from '../../../assets/whoWeAreTwo.svg';
import WhoWeAreThree from '../../../assets/whoWeAreThree.svg';

const Aiziw: React.FC = () => {
  return (
    <S.Container>
      <S.Title>A Iziwork</S.Title>
      <S.Divider />
      <S.ContentLine>
        <S.SubContentImage>
          <S.Image src={WhoWeAre} alt="" width={443} height={273} />
        </S.SubContentImage>
        <S.SubContent>
          <S.SubTitle>Quem somos</S.SubTitle>
          <S.Text>
            A Iziwork veio com o propósito de trazer facilidade ao seu dia a dia, aqui você pode de
            maneira simples dizer qual a sua necessidade e nós te conectaremos aos melhores
            profissionais. Sem custo nenhum para você.
          </S.Text>
        </S.SubContent>
      </S.ContentLine>

      <S.ContentLineReverse>
        <S.SubContentReverse>
          <S.SubTitleReverse>Como surgiu</S.SubTitleReverse>
          <S.TextReverse>
            Frequentemente precisamos recorrer a profissionais para executar serviços especializados
            e nos esbarramos com alguns problemas como a dificuldade de localizar prestadores de
            confiança, problemas no contato, entre outros.
            <S.Break />
            O Iziw surgiu e foi pensado como uma forma de acabar com estes problemas e ajudar a
            conectar e centralizar clientes que precisam que algo seja feito com profissionais que
            farão isso com excelência.
            <S.Break />
            Queremos ser uma ponte entre ambos e remover impedimentos tanto para o prestador fechar
            negócios quanto para o cliente ter sua necessidade atendida.
          </S.TextReverse>
        </S.SubContentReverse>
        <S.SubContentImageReverse>
          <S.Image src={WhoWeAreTwo} alt="" width={443} height={273} />
        </S.SubContentImageReverse>
      </S.ContentLineReverse>

      <S.ContentLine>
        <S.SubContentImage>
          <S.Image src={WhoWeAreThree} alt="" width={443} height={273} />
        </S.SubContentImage>
        <S.SubContent>
          <S.SubTitle>O que fazemos</S.SubTitle>
          <S.Text>
            O nosso objetivo é conectar você com profissionais que realmente querem lhe atender.
          </S.Text>
        </S.SubContent>
      </S.ContentLine>
    </S.Container>
  );
};

export default Aiziw;
