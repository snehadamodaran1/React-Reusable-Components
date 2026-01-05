import "./styles.css";
import ReactDOM from "react-dom";

let modalRoot = document.getElementById("root-modal");
// root-modal is added in index.html, why? Portals allow rendering outside the normal React DOM tree.

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
