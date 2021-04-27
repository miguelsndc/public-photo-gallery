import React from 'react';
import { Backdrop } from './styles';

function Modal({ selectedImg, setSelectedImg }) {
  function handleModalClose(e) {
    if (e.target.classList.contains('backdrop')) setSelectedImg(null);
  }

  return (
    <Backdrop onClick={handleModalClose} className="backdrop">
      <img src={selectedImg} alt="large pic" />
    </Backdrop>
  );
}

export default Modal;
