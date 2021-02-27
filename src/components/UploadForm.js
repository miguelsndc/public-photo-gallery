import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { StyledUploadForm } from '../styles/UploadForm.sc';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ['image/png', 'image/jpeg'];

  const errorTypes = {
    INVALID_IMAGE_TYPE: 'Please select an valid file type ( PNG / JPEG )',
  };

  function showErrorMessage(interval, errorMsg) {
    // interval in ms
    setError(errorMsg);
    setInterval(() => {
      setError('');
    }, interval);
  }

  function changeHandler(e) {
    let selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      showErrorMessage(3000, errorTypes.INVALID_IMAGE_TYPE);
    }
  }

  return (
    <StyledUploadForm>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </StyledUploadForm>
  );
}

export default UploadForm;
