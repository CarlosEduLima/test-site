import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';
import image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding-left: 40px;

  /* width: 100%; */

  @media (max-width: 840px) {
    /* max-width: 80vw; */
    /* margin-bottom: 40px; */
  }
`;

export const Title = styled.h1`
  display: flex;
  font-family: ${fonts.extraBold};
  text-align: center;
  font-size: 25px;

  @media (max-width: 840px) {
    font-size: 20px; 
  }
`;

export const Divider = styled.div`
  width: 130px;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
`;

export const ContainerDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const ButtonRight = styled.button`
  display: flex;
  position: relative;
  border: 1px solid;
  right: 30px;
  top: 55%;
  width: 2.5rem;
  place-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonLeft = styled.button`
  display: flex;
  position: relative;
  left: 99%;
  top: 49%;
  width: 2.5rem;
  place-items: center;
  border: none;
  border-radius: 48%;
  background: none;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = styled.div`
  width: 325px;
  max-width: 325px;
  margin-top: 35px;
  margin-bottom: 10px;
  margin-right: 30px;
  margin-left: 10px;
  flex: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3.17117px 6.34234px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  cursor: pointer;

  @media (max-width: 840px) {
    width: 216px;
    max-width: 216px;
    margin-left: 5px;
  }
`;

export const CardBox = styled.div`
  padding: 5%;
`;

export const CardTitle = styled.div`
  display: flex;
  font-size: 24px;
  font-family: ${fonts.heading};
  justify-content: space-between;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: flex-start;

  span {
    font-size: 24px;
  }

  @media (max-width: 840px) {
    font-size: 20px;
  }
`;

export const ContainerRating = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 60px;
  margin-left: 10px;
  margin-top: 3px;

  @media (max-width: 840px) {
    margin-top: 0px;
  }
`;

export const TextRating = styled.h2`
  display: flex;
  font-size: 16px;
  font-family: ${fonts.heading};
  margin-right: 6px;
  margin-top: 3px;
`;

export const CardBoxContent = styled.div`
  align-items: center;
  height: 6rem;
  display: flex;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.mediumGray};
  font-size: 16px;

  @media (max-width: 840px) {
    height: 5rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 840px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const CardP = styled.h3`
  color: ${colors.LightBlue2};
  font-family: ${fonts.bold};
  line-height: 150%;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const CardImage = styled(image)`
`;

export const CardIcon = styled(image)`
`;
