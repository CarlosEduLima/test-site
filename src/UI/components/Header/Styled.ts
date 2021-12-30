import styled from "styled-components"
import Image from 'next/image';
import colors from "src/utils/colors";
import fonts from "src/utils/fonts";
import { Primary } from "../placeholder.stories";

export const Icone = styled(Image)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

export const ContainerImage = styled.div`
    padding-left: 20px;
`;

export const Header = styled.header<HeaderProps>`
  top:0;
  left: 0;
  position:fixed;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font: ${fonts.regular};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-wrap: nowrap;
  font-size:14px;
  opacity: ${(props) => props.colocarOpacidade};

  @media (max-width: 830px) {
    background-color: ${colors.black};
  }

  @media (max-width: 700px) {
    font-size:14px;
    padding: 0px 0px;
    height: 80px;
  }
`;

export const ContainerLista = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

export const Lista = styled.li`
  display: inline-block;
  padding: 0px 30px;
  cursor: pointer;

  @media (max-width: 830px) {
    display: block;
    padding: 0px 10px;
  }

  @media (max-width: 660px) {
    padding: 0px 5px;
  }

  `;

export const MeuBotao = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 40px;
  padding: 0.5rem 1;
  margin: 1.0rem 1.5rem;
  width: 210px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.primary};
  color: ${(props) => props.buttonTextColor};


  @media (max-width: 700px) {
    width: 160px;
    font-size:13px;
    padding: 0px 10px;
  }
`;
