import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
// import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
    `;

export const BackgroundModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0005;
    `;

export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: #FFF;
    max-width: 90%;
    width: 817px;
    height: 661px;
    border-radius: 10px;
    `;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    width: 100%;
    padding: 0 45px;
    color: #1F2D50;
    `;

export const TitleModal = styled.p`
    font-family: ${fonts.bold};
    font-size: 21px;
    `;

export const CloseModal = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    `;

export const ImageModal = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 475px;
    background-color: #999;
    overflow: hidden;
    `;

export const ButtonModal = styled.div`
    margin-top: 35px;
    width: 268px;
    display: flex;
    align-items: center;
    border-radius: 18px;
    `;

export const Images = styled.img`
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
    `;