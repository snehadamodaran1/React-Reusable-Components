// useNotification.js
import { useState } from "react";

export const useNotification = () => {
  const [message, setMessage] = useState(null);

  const showNotification = (msg, timeout = 3000) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, timeout);
  };

  const clearNotification = () => {
    setMessage(null);
  };

  return {
    message,
    showNotification,
    clearNotification,
  };
};
