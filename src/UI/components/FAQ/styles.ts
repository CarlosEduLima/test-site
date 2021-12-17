import styled from 'styled-components';

export const FAQFull = styled.div`
  display: flex;
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
  /* border: 1px solid #f00; */
`;

export const Title = styled.p`
  max-width: 380px;
  color: #000;
  font-size: ${props => props.size + 'px'};
  font-weight: 400;
  span{
    font-weight: 800;
  }
`;

export const Categorias = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Categoria = styled.div`
  cursor: pointer;
  width: 205px;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 3px solid #373AAD; */
  border: 2px solid ${(props) => (props.border ? '#373AAD' : '#FFF')};
  border-radius: 25px;
  margin: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 25px 14px #12121244;
`;

export const Text = styled.p`
  color: #000;
  font-size: ${props => props.size + 'px'};
  font-weight: 400;
  span {
    font-weight: 600;
  }
`;

export const Icon = styled.img`
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
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 280px;
  height: 30px;
  outline: none;
  ::placeholder {
    color: #121212;
    font-weight: 600;
  }
`;

export const SearchButton = styled.img`
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
`;

export const Summary = styled.summary`
  cursor: pointer;
  color: #000;
`;
