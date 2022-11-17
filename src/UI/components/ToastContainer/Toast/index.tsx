import React, { useEffect, useState } from 'react';

import { ToastContainer } from './style';

import { RiCloseFill } from 'react-icons/ri';
import { ToastMessage, useToast } from 'src/hooks/toast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);
  return (
    <ToastContainer key={message.id} type={message.type} style={style}>
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <RiCloseFill />
      </button>
    </ToastContainer>
  );
};

export default Toast;
