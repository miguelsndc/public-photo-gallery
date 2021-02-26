import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { StyledProgressBar } from '../styles/styles';

function ProgressBar({ file, setFile }) {
  const { imageUrl, progress } = useStorage(file);

  useEffect(() => {
    if (imageUrl) {
      setFile(null);
    }
  }, [imageUrl, setFile]);

  return <StyledProgressBar progressWidth={progress}></StyledProgressBar>;
}

export default ProgressBar;
