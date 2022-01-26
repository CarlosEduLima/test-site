import styled from 'styled-components';
import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';

export const Card = styled.div`
  height: 410px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  background: ${colors.white};
  color: ${colors.black};
  border: 0.75px solid #e5e5e5;
`;

interface IImageBackground {
  ImgBackground: string;
}

export const Imagebackground = styled.div<IImageBackground>`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.ImgBackground};
`;

export const Name = styled.div`
  font-size: 31px;
  line-height: 43px;
  margin-top: 30px;
`;

export const LastName = styled.div`
  font-size: 19px;
  line-height: 26px;
`;

export const FunctionHere = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 13px;
  font-weight: ${fonts.heading};
  color: #43b5e5;
`;
