import React from "react";

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="remove-modal-wrapper">
      <div className="remove-modal">
        <div className="remove-modal-header">
          <h3>Remove Link</h3>
          <button onClick={onCancel}>X</button>
        </div>
        <div className="remove-modal-message">
          <p>Do you want to remove:</p>
          <h3>{message}</h3>
        </div>
        <div className="remove-buttons-wrapper">
          <button onClick={onConfirm}>OK</button>
          <button onClick={onCancel}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
