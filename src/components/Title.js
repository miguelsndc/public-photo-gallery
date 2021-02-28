import React from 'react';
import { StyledTitle } from '../styles/Title.sc';

const TitleComp = ({ isDarkThemeEnabled, setIsDarkThemeEnabled }) => {
  return (
    <StyledTitle>
      <div>
        <h1>Photo Gallery</h1>
        <button onClick={() => setIsDarkThemeEnabled(!isDarkThemeEnabled)}>
          dark theme
        </button>
      </div>
      <h2>Public Photo Gallery</h2>
      <p>Share your jobs, your feelings and your art.</p>
    </StyledTitle>
  );
};

export default TitleComp;
