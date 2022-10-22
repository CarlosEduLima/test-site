import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';
import image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 95vw;

  @media (max-width: 800px) {
    max-width: 80vw;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-family: ${fonts.bold};
  text-align: center;
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
  right: 0;
  top: 55%;
  width: 2.5rem;
  place-items: center;
  background: none;
  border: none;
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
  height: 151;
  margin: 0 1%;
  flex: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px rgba(149, 157, 165, 0.2);
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
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

  span {
    font-size: 20px;
  }
`;

export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-width: 60px;
  height: 30px;
`;

export const TextRating = styled.h2`
  font-size: 17px;
  font-family: ${fonts.heading};
  margin-right: 6px;
`;

export const CardBoxContent = styled.div`
  /* padding: 10% 0; */
  align-items: center;
  height: 8rem;
  display: flex;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.mediumGray};
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
