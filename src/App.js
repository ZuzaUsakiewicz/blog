import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  AppContainer,
  ThemeChangeButton,
} from "../src/layout/theme";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Navigation from "./components/Navigation";
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation />
      <AppContainer>
        <ThemeChangeButton onClick={toggleTheme}>
          {theme === "light" ? (
            <span role="img" aria-label="sheep">
              🌛
            </span>
          ) : (
            <span role="img" aria-label="sheep">
              🌝
            </span>
          )}
        </ThemeChangeButton>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={Post} path="/post" />
          </Switch>
        </AnimatePresence>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
