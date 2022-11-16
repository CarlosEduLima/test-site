import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const FooterContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: ${colors.lightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterUp = styled.div`
  padding-bottom: 60px;
  margin: 10px;
  width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);

  @media (max-width: 1440px) {
    width: 1100px;
  }

  @media (max-width: 1200px) {
    justify-content: flex-start;
    width: 700px;
  }

  @media (max-width: 840px) {
    justify-content: flex-start;
    text-align: left;
    width: 300px;
    padding-bottom: 20px;
  }
`;

export const FooterDown = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    width: 100vw;
    margin-top: 20px;
    padding-left: 20px;
  }
`;

export const TextUp = styled.p`
  padding-bottom: 15px;
  color: ${colors.black};
  font-size: 15px;
  font-family: ${fonts.extraBold};
`;

export const TextItens = styled.p<{ size?: 15 | number }>`
  cursor: pointer;
  text-decoration: none;
  margin: 12px 40px 12px 0;
  color: ${colors.black};
  font-size: ${(props) => props.size}px;
  font-family: ${fonts.regular};

  @media (max-width: 800px) {
    margin: 9px 25px 9px 0;
  }
`;

export const TextDownFooter = styled.p`
  cursor: pointer;
  text-decoration: none;
  margin: 12px 40px 12px 0;
  color: ${colors.black};
  font-size: 15px;
  font-family: ${fonts.regular};

  @media (max-width: 800px) {
    margin: 9px 25px 9px 0;
    font-size: 12px;
  }
`;

export const TextFiredev = styled.p`
  text-decoration: none;
  color: ${colors.black};
  font-size: 12px;
  font-family: ${fonts.regular};

  @media (max-width: 840px) {
    width: 100vw;
    padding-left: 17px;
    font-size: 11px;
    margin-top: 30px;
  }
`;

export const FooterSection = styled.div<{ width?: number }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  width: ${(props) => props.width}px;
  @media (max-width: 1200px) {
    margin: 7px;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  flex-wrap: wrap;
  max-height: 220px;
`;

export const FooterListImg = styled.div`
  margin-left: -5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 20px;
`;

export const FooterListFAQ = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    margin-left: 30px;
  }
`;

export const ContainerLogo = styled.image`
  @media (max-width: 840px) {
    img {
      height: 26px;
      width: 84px;
    }
  }
`;

export const ImageLocalDiv = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 8px 5px;
  justify-content: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 20px;
  background-color: #29abe2;
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

  @media (max-width: 840px) {
    display: none;
  }
`;

export const ContainerIconStore = styled.div`
  cursor: pointer;
  margin: 5px 0;
  display: none;
  margin-right: 20px;

  @media (max-width: 840px) {
    display: flex;
  }
`;

export const ContainerIcons = styled.div`
  display: none;
  flex-direction: row;

  @media (max-width: 840px) {
    display: flex;
  }
`;

export const TitlesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  flex-wrap: wrap;
  max-height: 220px;
  margin-top: 10px;
  margin-bottom: 14px;
  cursor: pointer;
`;
