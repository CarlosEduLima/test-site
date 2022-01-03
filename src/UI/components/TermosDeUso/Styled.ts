import styled from "styled-components"
import colors from "src/utils/colors";
import fonts from "src/utils/fonts";


export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  padding-bottom: 20px;
  font: ${fonts.bold};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 35.81px;
`;
export const Borda = styled.div`
    padding-bottom: 40px;
    border-top: 3.07692px solid #29ABE2;
    width: 200px;
`;

export const Container = styled.div`
  padding: 15px 10% 100px;
  font: ${fonts.regular};
  font-size: 35,81px;
  font-color:blue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;