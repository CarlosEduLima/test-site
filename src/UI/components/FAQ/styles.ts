import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../utils/fonts';

export const FAQFull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FAQContainer = styled.div`
  padding: 40px 0;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  @media (max-width: 800px) {
    width: 500px;
  }
`;

export const Title = styled.p<{ size: number }>`
  max-width: 380px;
  margin: 0 15px;
  color: #000;
  font-size: ${props => props.size + 'px'};
  font-family: ${fonts.regular};
  span{
    font-weight: 800;
  }
  @media (max-width: 600px) {
    font-size: ${(props) => (props.size - 4) + 'px'};
  }
`;

export const Categorias = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Categoria = styled.div<{ border?: '#373AAD' | '#FFF' }>`
  cursor: pointer;
  width: 205px;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid ${(props) => props.border};
  border-radius: 25px;
  margin: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 25px 14px #12121244;
`;

export const Text = styled.p<{ size: number }>`
  color: #000;
  font-size: ${props => props.size + 'px'};
  font-family: ${fonts.regular};
  margin: 0 8px;
  span {
    font-weight: 600;
  }
  @media (max-width: 600px) {
    font-size: ${(props) => (props.size - 4) + 'px'};
  }
`;

export const CategoriaText = styled.p<{ size: number }>`
  color: #000;
  font-size: ${props => props.size + 'px'};
  font-family: ${fonts.regular};
  margin: 0 8px;
  span {
    font-weight: 600;
  }
`;

export const PortaIcons = styled.div`
  width: 72px;
  height: 72px;
  border: 4px solid #29ABE2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Icon = styled(Image)`
  margin-top: 10px;
  width: 50px;
  height: auto;
`;

export const Search = styled.div`
  z-index: 10;
  padding: 5px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #b7c6ce;
  border-radius: 6px;
  gap: 5px;
  margin: 0 10px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none !important;
  box-shadow: none !important;
  width: 280px;
  height: 30px;
  outline: none;
  ::placeholder {
    color: #121212;
    font-family: ${fonts.regular};
  }
`;

export const SearchButton = styled(Image)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

export const Details = styled.details`
  /* cursor: pointer; */
  margin: 15px 0;
  border-radius: 6px;
  width: 80%;
  text-align: left;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 25px 10px #12121255;
   @media (max-width: 800px) {
    width: 90%;
   }
`;

export const Summary = styled.summary`
  cursor: pointer;
  font-family: ${fonts.regular};
  color: #000;
`;
