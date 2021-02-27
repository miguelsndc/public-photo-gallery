import React from 'react';
import { StyledBackdrop } from '../styles/BackDrop.sc';

function Modal({ selectedImg, setSelectedImg }) {
  function handleModalClose(e) {
    if (e.target.classList.contains('backdrop')) setSelectedImg(null);
  }
  // i couldnt find a way to close the modal, so i added a classname, ill refactor it as soon as possible
  return (
    <StyledBackdrop onClick={handleModalClose} className="backdrop">
      <img src={selectedImg} alt="large pic" />
    </StyledBackdrop>
  );
}

export default Modal;
