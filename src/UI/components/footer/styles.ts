import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const FooterContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterUp = styled.div`
  padding-bottom: 60px;
  margin:  10px;
  width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #707070;
  @media (max-width: 1440px) {
    width: 1100px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    width: 800px;
  }
  @media (max-width: 840px) {
    justify-content: flex-start;
    text-align: left;
    width: 300px;
  }
`;

export const FooterDown = styled.div`
  padding: 60px 0;
  width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    width: 1100px;
  }
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 840px) {
    justify-content: center;
    width: 300px;
  }
`;

export const TextUp = styled.p`
  color: ${colors.black};
  font-size: 15px;
  font-family: ${fonts.heading};
`;

export const TextDown = styled.p`
  cursor: pointer;
  text-decoration: none;
  margin: 12px 40px 12px 0;
  color: ${colors.black};
  font-size: 15px;
  font-family: ${fonts.regular};
`;

export const FooterSection = styled.div<{ width?: string; }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  width: ${props => props.width};
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  flex-wrap: wrap;
  max-height: 220px;
`;

export const FooterListImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const FooterListFAQ = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 840px){
    margin: 20px 10px;
    flex-direction: column;
    text-align: left;
  }
`;

export const ImageLocalDiv = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 8px 10px;
  justify-content: center;
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
  cursor: pointer;
  margin: 10px 0;
`;
