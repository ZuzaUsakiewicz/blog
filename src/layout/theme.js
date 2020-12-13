import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  navbarBg: "blue",
  boxShadow: "inset 1000px 1000px 10px 10px rgba(0, 0, 0, 0.11)",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  navbarBg: "yellow",
  boxShadow: "inset 1000px 1000px 10px 10px rgba(0, 0, 0, 0.582)",
};

export const fontSize = {
  small: "1rem",
  regular: "1.5rem",
  big: "2rem",
};

export const AppContainer = styled.div`
  height: 80vh;
`;
export const ThemeChangeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};
  outline: none;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;
`;

export const GlobalStyles = createGlobalStyle`
*, html {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
body {
  box-sizing: border-box;
    background-color: ${(props) => props.theme.body};
    transition: background-color 0.5s ease-in, color 0.5s ease-in;
    color: ${(props) => props.theme.fontColor};
}
h1 {
    color: ${(props) => props.theme.fontColor};
    transition: color 0.5s ease-in;
}
`;
