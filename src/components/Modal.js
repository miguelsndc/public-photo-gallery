import React from 'react';

function Modal({ selectedImg, setSelectedImg }) {
  function handleModalClose(e) {
    if (e.target.classList.contains('backdrop')) setSelectedImg(null);
  }

  console.log(selectedImg);
  return (
    <div className="backdrop" onClick={handleModalClose}>
      <img src={selectedImg} alt="large pic" />
    </div>
  );
}

export default Modal;
