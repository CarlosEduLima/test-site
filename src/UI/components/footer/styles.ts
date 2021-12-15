import styled from 'styled-components';
import colors from '../../../utils/colors';

export const FooterContainer = styled.div`
  text-decoration: none;
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`;

export const FooterUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FooterDown = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
  padding: 1px;
  padding: 10px;
  margin: 15px;
  width: ${props => props.width};
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: space-between;
  flex-wrap: wrap;
  max-height: 220px;
`;

export const FooterListImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ImageLocalDiv = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 8px 10px;
  justify-content: center;
  align-itens: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 20px;
  background-color: #29ABE2;
`;

export const ImageLocal = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const DownloadImage = styled.div`
  margin: 10px 0;
`;
