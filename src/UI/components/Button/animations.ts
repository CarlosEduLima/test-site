/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { keyframes } from 'styled-components';

export const Spin = keyframes`  
  from {
      transform: scale(1) rotate(0deg);
      border-bottom-color: transparent;
    }
    to {
      border-bottom-color: transparent;
      transform: scale(1) rotate(360deg);
    }
`;
export const Spin2 = keyframes`  
  from {
    border-bottom-color: transparent;
      -webkit-transform: rotate(0deg);
    }
    to {
      border-bottom-color: transparent;
      -webkit-transform: rotate(360deg);
    }
`;
