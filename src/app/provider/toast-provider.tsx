import React, { createContext, useState } from 'react';

import Toast from '@/shared/ui/Toast';

interface ToastContextType {
  showToast: (
    message: string,
    type?: 'success' | 'error' | 'info',
    duration?: number,
    icon?: React.ReactNode
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export { ToastContext };

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
  visible: boolean;
  icon?: React.ReactNode;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'info',
    duration: 3000,
    visible: false,
    icon: undefined,
  });

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info',
    duration: number = 3000,
    icon?: React.ReactNode
  ) => {
    setToast({
      message,
      type,
      icon,
      duration,
      visible: true,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onHide={hideToast}
          icon={toast.icon}
        />
      )}
    </ToastContext.Provider>
  );
};
