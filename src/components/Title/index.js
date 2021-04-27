import React from 'react';
import { Container, Toggler } from './styles';

const Title = ({ isDarkThemeEnabled, setIsDarkThemeEnabled }) => {
  return (
    <Container>
      <div>
        <h1>Photo Gallery</h1>
        <Toggler onChange={() => setIsDarkThemeEnabled(!isDarkThemeEnabled)} />
      </div>
      <h2>Public Photo Gallery</h2>
      <p>Share your jobs, your feelings and your art.</p>
    </Container>
  );
};

export default Title;
