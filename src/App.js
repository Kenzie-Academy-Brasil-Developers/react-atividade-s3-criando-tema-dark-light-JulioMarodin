import { useCallback, useState } from 'react';
import { AppContainer, MainSection } from './components/app.styles';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
import { Button } from './components/button.styles';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const getOpositeTheme = useCallback(
    () => (currentTheme === 'light' ? 'dark' : 'light'),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
