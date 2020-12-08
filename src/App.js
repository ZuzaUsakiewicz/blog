import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  AppContainer,
  ThemeChangeButton,
} from "../src/layout/theme";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <h1>Hello, world</h1>
        <ThemeChangeButton onClick={toggleTheme}>
          Change theme
        </ThemeChangeButton>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
