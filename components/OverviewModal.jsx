"use client"

import React from 'react';

const OverviewModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-[90vw] sm:w-[80vw] md:w-[600px] h-[90vh] sm:h-[80vh] md:h-[500px] max-w-screen-md flex flex-col bg-white rounded">
        <button className="text-black text-xl place-self-end mr-3 mt-1" onClick={() => onClose()}>
          X
        </button>
        <div className="bg-white p-2 rounded overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default OverviewModal;