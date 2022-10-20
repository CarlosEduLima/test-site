// eslint-disable-next-line no-irregular-whitespace
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import React, { Component } from 'react';
import * as S from './styles';
export default class TermsOfUse extends Component {
  render() {
    return (
      <div>
        <S.ContainerTitle>
          <S.Title>Termos de Uso</S.Title>
          <S.Border></S.Border>
        </S.ContainerTitle>
        <S.Container>
          Estes termos e condições descrevem as regras e regulamentos para o uso do aplicativo IziW.
          <br />
          <br />
          Ao acessar este aplicativo, presumimos que você aceita estes termos e condições. Não
          continue a usar o IziW se você não concordar com todos os termos e condições declarados
          nesta página.
          <br />
          <br />
          A terminologia a seguir se aplica a estes Termos e Condições, Declaração de Privacidade e
          Aviso de Isenção de Responsabilidade e todos os Contratos: “Cliente”, “Você” e “Seu”
          referem-se a você, a pessoa que faz login neste site e está em conformidade com os termos
          e condições da Empresa. “A Empresa”, “Nós mesmos”, “Nós”, “Nosso” e “Nós” referem-se à
          nossa Empresa. “Parte”, “Partes” ou “Nós” referem-se ao Cliente e a nós mesmos. Todos os
          termos se referem à oferta, aceitação e consideração do pagamento necessário para realizar
          o processo de nossa assistência ao Cliente da maneira mais apropriada para o propósito
          expresso de atender às necessidades do Cliente no que diz respeito à prestação dos
          serviços declarados da Empresa, de acordo com e sujeito à lei vigente da Holanda. Qualquer
          uso da terminologia acima ou outras palavras no singular, plural, maiúsculas e / ou ele /
          ela são considerados intercambiáveis e, portanto, como referindo-se aos mesmos.
          <br />
          <br />
          Cookies
          <br />
          Empregamos o uso de cookies. Ao acessar o{' '}
          <a
            style={{ textDecoration: 'none' }}
            target="_blank"
            href="https://iziw.com.br"
            rel="noreferrer">
            iziw.com.br
          </a>
          , você concorda em usar cookies de acordo com a Política de Privacidade do Izi Work.
          <br />
          <br />A maioria dos sites interativos usa cookies para nos permitir recuperar os detalhes
          do usuário em cada visita. Os cookies são usados pelo nosso site para habilitar a
          funcionalidade de certas áreas para tornar mais fácil para as pessoas que visitam nosso
          site. Alguns de nossos afiliados / parceiros de publicidade também podem usar cookies.
        </S.Container>
      </div>
    );
  }
}
