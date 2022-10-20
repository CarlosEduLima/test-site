import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';
import image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 95vw;
  margin-top: 2%;
`;
export const Title = styled.h1`
  font-family: ${fonts.bold};
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 140%;
  hr {
    width: 10%;
    display: flex;
    border: 1px solid blue;
  }
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

// Cards

export const CardContainer = styled.div`
  width: 325;
  height: 151;
  margin: 0 1%;
  flex: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  max-width: 344px;
`;
export const CardBox = styled.div`
  padding: 5%;
`;
export const CardTitle = styled.h1`
  display: flex;
  font-size: 24px;
  font-family: ${fonts.heading};
  justify-content: space-between;
  span {
    font-size: 20px;
  }
`;
export const CardBoxContent = styled.div`
  padding: 10% 0;
  height: 8em;
  display: flex;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardP = styled.h3`
  color: ${colors.LightBlue2};
  font-family: ${fonts.bold};
  line-height: 150%;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const CardImage = styled(image)``;
