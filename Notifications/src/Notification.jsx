// Notification.js
import React from "react";

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
  },
  notification: {
    background: "#333",
    color: "#fff",
    padding: "12px 20px",
    marginBottom: "10px",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    marginLeft: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

const Notification = ({ message, onClose }) => {
  return (
    <div style={styles.container}>
      <div style={styles.notification}>
        {message}
        <button onClick={onClose} style={styles.closeBtn}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
