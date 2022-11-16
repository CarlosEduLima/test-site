import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import NextImage from 'next/image';

export const Title = styled.h1`
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 30px;
  text-align: center;

  @media (max-width: 840px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`;

export const Container = styled.div`
  margin: 45px auto 64px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`;

export const Divider = styled.div`
  width: 130px;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  margin-bottom: 40px;
`;

export const ContentLine = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const ContentLineReverse = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: center;
`;

export const SubContent = styled.div`
  max-width: 500px;
`;

export const SubContentLeft = styled(SubContent)`
  max-width: 500px;
`;

export const SubContentLeftImage = styled(SubContent)`
  max-width: 500px;

  @media (max-width: 840px) {
    max-width: 250px;
  }
`;

export const SubContentRight = styled(SubContent)`
  max-width: 500px;
`;

export const SubContentRightImage = styled(SubContent)`
  max-width: 500px;

  @media (max-width: 840px) {
    max-width: 250px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.purple};

  @media (max-width: 840px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    line-height: 30px;
    font-family: ${fonts.extraBold};
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
    margin-left: 10px;
  }
`;

export const StyledLink = styled.a`
  font-size: 25px;
  font-family: ${fonts.heading};
  color: ${colors.blue};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 840px) {
    font-size: 18px;
  }
`;

export const Image = styled(NextImage)`
  width: 545px;
`;
