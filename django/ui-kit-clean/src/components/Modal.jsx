import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
            Cancel
          </Button>
          {onConfirm && <Button onClick={onConfirm}>Confirm</Button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
