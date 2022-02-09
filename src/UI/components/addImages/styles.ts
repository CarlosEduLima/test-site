import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import iconAddImage from '../../../assets/iconAddImages.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px 60px 40px;
`;

export const SubTitle = styled.h1`
  font-size: 20px;
  font-family: ${fonts.regular};
  font-weight: ${fonts.bold};
  color: ${colors.heading};
  line-height: 27px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  width: 268px;
`;

export const Input = styled.input`
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const InputContainer = styled.div`
  width: 187px;
  height: 187px;
  background: url(${iconAddImage.src}) no-repeat;
  background-color: ${colors.lightBlue3};
  background-position: center;
  border-radius: 10px;
  margin: 15px;
  
  :hover {
    border: 2px solid ${colors.darkBlue};
  }
`;

export const ImagesContainer = styled.div`
  width: 1125px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 80px;

  @media (max-width: 1125px) {
      max-width: 100%;
      justify-content: center;
    }
`;

export const ImagesCropped = styled.div<{img: any}>`   
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-color: ${colors.lightBlue3};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 187px;
  height: 187px;
  border-radius: 10px;
  margin: 15px;
  border: 2px solid #FFF;
  
  :hover {
    border: 2px solid ${colors.darkBlue};
    transition: 0.2s;
  }
`;

export const DiscardImage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.darkBlue};
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;