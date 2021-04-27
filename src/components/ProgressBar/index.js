import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { Bar } from './styles';

function ProgressBar({ file, setFile }) {
  const { imageUrl, progress } = useStorage(file);

  useEffect(() => {
    if (imageUrl) {
      setFile(null);
    }
  }, [imageUrl, setFile]);

  return <Bar progressWidth={progress} />;
}

export default ProgressBar;
