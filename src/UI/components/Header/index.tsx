import React, { Component } from 'react'
import Iconimage from '../../../assets/icon-white.png';
import colors from "src/utils/colors";
import {Icone, Header, Lista, MeuBotao, ContainerLista, ContainerImage} from './Styled';

export default class index extends Component {

    render() {
        return (
            <div>
                <Header colocarOpacidade={this.props.opacidade === "True" ? "0.84": "1.0"}>
                    <ContainerImage >
                        <Icone src={Iconimage} alt="Search" />
                    </ContainerImage>
                    <ContainerLista>
                        <Lista>Home</Lista>
                        <Lista>Como funciona?</Lista>
                        <Lista>Categorias</Lista>
                        <Lista>FAQ</Lista>

                    <MeuBotao>
                            Quero me cadastrar
                    </MeuBotao>  
                    </ContainerLista>
                                          
                </Header>
            </div>
        )
    }
}
