import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

const bgColor = {
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
  info: css`
    background: #ebf8ff;
    color: #2e656a;
  `,
};

export const ToastContainer = styled(animated.div)<ContainerProps>`
  width: 320px;
  position: relative;
  color: #ffffff;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 5px 0px -2px rgba(0, 0, 0, 0.2);

  display: flex;
  ${({ type }) => type && bgColor[type]}

  & + div {
    margin-top: 15px;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 0px;
    top: 15px;
    opacity: 0.6;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: inherit;
  }
`;
