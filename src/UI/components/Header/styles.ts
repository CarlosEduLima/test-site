import styled from 'styled-components';
import Image from 'next/image';
import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';

interface HeaderProps {
  opacity: number;
}

export const Icon = styled(Image)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;
export const ContainerImage = styled.div`
  padding-left: 20px;
`;
export const DivHeader = styled.header<HeaderProps>`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  font-size: 14px;
  opacity: ${(props) => props.opacity};

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 0px 0px;
    height: 80px;
  }
`;

export const ContainerList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

export const ContainerButton = styled.div`
  width: 210px;
  margin-left: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
  color: ${colors.white};
  font: ${fonts.regular};
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const List = styled.li`
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

export const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const MobileLinkContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

export const MobileDivHeader = styled.header`
  display: none;

  @media (max-width: 700px) {
    background-color: transparent;
    margin-top: 10px;
    color: ${colors.white};
    font: ${fonts.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    flex-wrap: nowrap;
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const HeaderContent = styled.header`
  color: ${colors.white};
  font: ${fonts.regular};
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  flex-wrap: nowrap;
  font-size: 14px;
`;
