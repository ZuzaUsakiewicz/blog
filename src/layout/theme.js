import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  navbarBg: "blue",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  navbarBg: "yellow",
};

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const ThemeChangeButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};
  outline: none;
  transition: background-color 0.5s ease-in;
`;

export const GlobalStyles = createGlobalStyle`
*, html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
body {
    background-color: ${(props) => props.theme.body};
    transition: background-color 0.5s ease-in;
    color: ${(props) => props.theme.fontColor};
}
h1 {
    color: ${(props) => props.theme.fontColor};
}
`;
