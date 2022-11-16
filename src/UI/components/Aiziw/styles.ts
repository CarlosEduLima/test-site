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
  padding: 10px 0;
  margin-top: 40px;
`;

export const ContainerResponsive = styled.div`

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin-bottom: 50px;
  }
`;

export const Divider = styled.div`
  width: 133px;
  height: 0;
  border: 1.5px solid ${colors.blue};
  background-color: ${colors.blue};
  margin-bottom: 80px;

  @media (max-width: 840px) {
    margin-bottom: 0px;
  }
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 150px;
  width: 100%;

  @media (max-width: 840px) {
    margin-bottom: 0;
    flex-direction: column;
  }
`;

export const ContentLineReverse = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  margin-bottom: 150px;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 840px) {
    margin-bottom: 0;
  }
`;

export const SubContent = styled.div`
  width: 50%;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const SubContentReverse = styled.div`
  width: 50%;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const SubContentImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 70px;

  @media (max-width: 840px) {
    width: 100%;
    padding: 50px;
  }
`;

export const SubContentImageReverse = styled.div`
  width: 50%;
  padding-left: 70px;

  @media (max-width: 840px) {
    width: 100%;
    padding: 50px;
  }
`;

export const SubTitle = styled.div`
  font-size: 27px;
  font-family: ${fonts.extraBold};
  color: ${colors.purple};
  margin-bottom: 25px;

  @media (max-width: 840px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
  }
`;

export const SubTitleReverse = styled.div`
  font-size: 27px;
  font-family: ${fonts.extraBold};
  color: ${colors.purple};
  margin-bottom: 25px;
  text-align: right;

  @media (max-width: 840px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  max-width: 550px;

  @media (max-width: 840px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const TextReverse = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-family: ${fonts.heading};
  color: ${colors.black};
  text-align: right;
  padding-left: 150px;

  @media (max-width: 840px) {
    font-size: 18px;
    line-height: 24px;
    width: 100%;
    text-align: left;
    padding-left: 0;
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

export const Break = styled.div`
  margin: 30px 0;
  width: 100%;
`;
