/* eslint-disable prettier/prettier */
import React, { createContext, useCallback, useContext, useState } from 'react';
import Toast from 'src/UI/components/ToastContainer';
import { uuid } from 'uuidv4';
export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();
    const toast = {
      id,
      type,
      title,
        description,
    };
    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);
  const removeToast = useCallback((id: string) => {
    setMessages(messages.filter(item => item.id !== id));
  }, [messages]);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('uso incorreto');
  }
  return context;
}

export { ToastProvider, useToast };
