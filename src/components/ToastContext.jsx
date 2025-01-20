import React, { createContext, useContext, useState, useCallback } from 'react';
import './ToastStyles.scss';

/**
 * ToastContext & ToastProvider
 * Provides a simple way to show ephemeral "toast" messages (e.g. "Copied!")
 *
 * Usage:
 * 1. Wrap your <App> in <ToastProvider>.
 * 2. In any component, call `const { showToast } = useToast();`
 *    Then do: showToast("Copied to clipboard!");
 */

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    // Clear after 2 seconds
    setTimeout(() => setToastMessage(null), 2000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && <div className="toast-popup">{toastMessage}</div>}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
