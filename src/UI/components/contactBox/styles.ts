import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2% 10%;

  @media (max-width: 800px) {
    padding: 0 6%;
    width: 100%;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const Input = styled.input`
//   width: 50%;
//   height: 3em;
//   border-radius: 10px;
//   outline: none !important;
//   border: none;
//   background-color: ${colors.lightBlueGrayish};
//   margin-bottom: 2%;
//   :placeholder-shown {
//     padding: 15px;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//   }
//   @media (max-width: 1024px) {
//     width: 80%;
//   }
// `;

export const Title = styled.h1`
  font-size: 25px;
  font-family: ${fonts.bold};
  color: ${colors.black};
  line-height: 34px;
  margin: 4% 0;

  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: ${fonts.regular};
  color: ${colors.heading};
`;

export const ContainerText = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const styleInput = (isError) => {
  return {
    paddingLeft: '25px',
    borderRadius: '15px',
    border: isError ? '#F00 solid 1px' : '#E5F5FC',
    display: 'flex',
    backgroundColor: '#E5F5FC',
    width: '100%',
    height: '3rem',
    marginBottom: '0em',
    marginTop: '0.4em',
    outline: 'none !important',
    boxShadow: '0  0 0 2px #98887',
    color: 'black',
    // placeholderTextColor: '#91AAB55E',
  };
};

export const styleTextarea = (isError) => {
  return {
    paddingLeft: '25px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '15px',
    border: isError ? '#F00 solid 1px' : '#E5F5FC',
    display: 'flex',
    backgroundColor: `${colors.lightBlue3}`,
    width: '100%',
    height: '9rem',
    marginBottom: '0em',
    marginTop: '0.4em',
    outline: 'none !important',
    boxShadow: '0  0 0 2px #98887',
    color: 'black',
  };
};

export const styleError = {
  color: '#F00',
  marginTop: 6,
};

export const Input = styled.input`
  box-shadow: none !important;
  padding: 0.5em;
  background: #f4fafd;
  border: none !important;
  border-radius: 3px;
  width: 357px;
  height: 50px;
  margin-bottom: 1.5em;
  margin-top: 0.4em;
`;

export const BoxInput = styled.div`
  padding-top: 5px;
  margin-bottom: 35px;
  width: 60%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const BoxInputTextArea = styled.div`
  padding-top: 5px;
  margin-bottom: 2%;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 35px;
    width: 100%;
  }
`;

export const BoxButton = styled.div`
  width: 268px;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
