import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import errorMessages from '../../error/errorMessages';

import { FormField, ProgressInfo, Error, UploadButton } from './styles';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ['image/png', 'image/jpeg'];

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
      showErrorMessage(3000, errorMessages.INVALID_IMAGE_TYPE);
    }
  }

  return (
    <FormField>
      <UploadButton>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </UploadButton>
      <ProgressInfo>
        {error && <Error>{error}</Error>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </ProgressInfo>
    </FormField>
  );
}

export default UploadForm;
