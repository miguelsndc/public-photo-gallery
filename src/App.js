import React, { useState } from 'react';

import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import GlobalStyle from './styles/globals';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import { ThemeProvider } from 'styled-components';
import { AppContainer } from './styles/AppStyles';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
