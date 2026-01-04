// App.js
import React from "react";
import Notification from "./Notification";
import { useNotification } from "./useNotification";

function App() {
  const { message, showNotification, clearNotification } = useNotification();

  return (
    <div>
      <h2>Reusable Notification System 🚀</h2>
      <button onClick={() => showNotification("✅ Saved Successfully!")}>
        Save
      </button>

      {message && (
        <Notification message={message} onClose={clearNotification} />
      )}
    </div>
  );
}

export default App;
