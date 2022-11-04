import React from 'react';
import * as S from './styles';
import WhoWeAre from '../../../assets/whoWeAre.svg';
import WhoWeAreTwo from '../../../assets/whoWeAreTwo.svg';
import WhoWeAreThree from '../../../assets/whoWeAreThree.svg';

const Aiziw: React.FC = () => {
  return (
    <S.Container>
      <S.Title>A Iziw</S.Title>
      <S.Divider />
      <S.ContentLine>
        <S.SubContent>
          <S.Image src={WhoWeAre} alt="" />
        </S.SubContent>
        <S.SubContent>
          <S.SubTitle>Quem somos</S.SubTitle>
          <S.Text>
            A Iziwork veio com o propósito de trazer a facilidade do seu dia a dia, aqui você pode
            de maneira simples dizer qual a sua necessidade e nós indicaremos voce aos melhores
            profissionais. Sem custo nenhum para você
          </S.Text>
        </S.SubContent>
      </S.ContentLine>
      <S.ContentLineReverse>
        <S.SubContent>
          <S.SubTitle>Como surgiu</S.SubTitle>
          <S.Text>
            Pessoas a todo tempo necessitam de serviço profissionais, podem ser pequenos ou grandes
            mas sempre há oportunidades para diferentes tipos de serviço como instalar um ar
            condicionado, arrumar uma porta, pintar uma parede e etc. Em contrapartida, conseguir a
            obra de mão desejada é uma tarefa complexa, cara e muitas vezes frustrante. Isso se da
            ao fato, de depender de indicações de eventualmente que conhece alguém que faça o
            serviço que voce precise ou procurar uma empresa que possa lhe atender e após encontrar
            vem o segundo passo ou o serviço é pequeno demais e acaba não tendo retorno
          </S.Text>
        </S.SubContent>
        <S.SubContent>
          <S.Image src={WhoWeAreTwo} alt="" />
        </S.SubContent>
      </S.ContentLineReverse>
      <S.ContentLine>
        <S.SubContent>
          <S.Image src={WhoWeAreThree} alt="" />
        </S.SubContent>
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
