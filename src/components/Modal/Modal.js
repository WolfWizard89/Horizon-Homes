import React from 'react';
import './Modal.css';

// Modal component displays a modal overlay with content
const Modal = ({ isOpen, onClose, children }) => {
  // If the modal is not open, return null to render nothing
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button for the modal */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {/* Render the children passed to the modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;