import NextImage from 'next/image';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Title = styled.h1`
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 25px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 50px 0;
  margin-top: 40px;
`;

export const Divider = styled.div`
  width: 133px;
  height: 0;
  border: 1.5px solid ${colors.blue};
  background-color: ${colors.blue};
  margin-bottom: 30px;
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 0 5%;
  width: 100%;
  justify-content: space-evenly;
`;

export const ContentLineReverse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin-top: 40px;
  padding: 0 5%;
  width: 100%;
  justify-content: space-evenly;
`;

export const SubContent = styled.div`
  max-width: 600px;
`;

export const SubContentImage = styled.div`
  max-width: 600px;

  @media (max-width: 840px) {
    max-width: 250px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 27px;
  font-family: ${fonts.extraBold};
  color: ${colors.purple};

  @media (max-width: 840px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  margin-bottom: 55px;

  @media (max-width: 840px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledLink = styled.a`
  font-size: 25px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
`;

export const Image = styled(NextImage)`
  width: 545px;
`;
