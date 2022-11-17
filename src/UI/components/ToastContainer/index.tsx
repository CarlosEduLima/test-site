import React from 'react';

import { Container } from './style';
import { ToastMessage } from 'src/hooks/toast';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    enter: { right: '0%', opacity: 1 },
    from: { right: '-120%', opacity: 0 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((styles, item) => (
        <Toast key={item.id} style={styles} message={item} />
      ))}
    </Container>
  );
};
export default ToastContainer;
