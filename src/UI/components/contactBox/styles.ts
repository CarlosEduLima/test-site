import colors from 'src/utils/colors';
import fonts from 'src/utils/fonts';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2% 10%;
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
`;
export const Label = styled.label`
  font-size: large;
`;

export const ContainerText = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const styleInput = (isError) => {
  return {
    paddingLeft: '25px',
    borderRadius: '15px',
    border: isError ? '#F00 solid 1px' : '#f4fafd',
    display: 'flex',
    backgroundColor: '#f4fafd',
    width: '50%',
    height: '3rem',
    marginBottom: '0em',
    marginTop: '0.4em',
    outline: 'none !important',
    boxShadow: '0  0 0 2px #98887',
    color: 'black',
  };
};

export const styleTextarea = (isError) => {
  return {
    paddingLeft: '25px',
    borderRadius: '15px',
    border: isError ? '#F00 solid 1px' : '#f4fafd',
    display: 'flex',
    backgroundColor: `${colors.lightBlueGrayish}`,
    width: '100%',
    height: '6rem',
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
  padding-top: 1%;
  margin-bottom: 2%;
`;

export const BoxButton = styled.div`
  width: 25%;
`;
