import "./styles.css";
import Modal from "./Modal";
import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
