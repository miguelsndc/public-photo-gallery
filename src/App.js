import React, { useState } from 'react';

import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globals.sc';
import { StyledApp } from './styles/App.sc';
import { lightTheme } from './styles/LightTheme.sc';
import { darkTheme } from './styles/DarkTheme.sc';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  return (
    <StyledApp>
      <ThemeProvider theme={isDarkThemeEnabled ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Title
          setIsDarkThemeEnabled={setIsDarkThemeEnabled}
          isDarkThemeEnabled={isDarkThemeEnabled}
        />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
