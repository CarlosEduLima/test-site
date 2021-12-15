import styled from 'styled-components';
import colors from '../../../utils/colors';

export const FooterContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  background: #f22;
  display: flex;
  flex-direction: column;
  align-itens: center;
`;

export const FooterUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextUp = styled.p`
  color: ${colors.black};
  font-size: 15px;
  font-weight: 800;
`;

export const TextDown = styled.p`
  text-decoration: none;
  margin: 12px 40px 12px 0;
  color: ${colors.black};
  font-size: 15px;
  font-weight: 400;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: space-between;
  flex-wrap: wrap;
  max-height: 250px;
`;
