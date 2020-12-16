import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "rgb(247, 240, 240)",
  fontColor: "rgb(72, 67, 73)",
  navbarBg: "rgb(24, 169, 153)",
  boxShadow: "inset 1000px 1000px 10px 10px rgba(0, 0, 0, 0.11)",
  postShadow: "0 2px 10px 2px rgb(179, 175, 175)",
  buttonBg: "rgb(24, 169, 153)",
  buttonFont: "rgb(247, 240, 240)",
};

export const darkTheme = {
  body: "#436A8D",
  fontColor: "rgb(214, 228, 230)",
  navbarBg: "#1f3236",
  boxShadow: "inset 1000px 1000px 10px 10px rgba(0, 0, 0, 0.582)",
  postShadow: "0 2px 10px 2px rgb(20, 20, 20)",
  buttonBg: "#222020",
  buttonFont: "rgb(247, 240, 240)",
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
  background-color: ${(props) => props.theme.body};
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
