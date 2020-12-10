import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.navbarBg};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

export const NavigationLink = styled(NavLink)`
  width: 100px;
  padding: 20px;
  text-decoration: none;
  color: white;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
  background: ${({ isOpen, theme }) => (isOpen ? "blue" : `${theme.navbarBg}`)};
  position: ${({ isOpen }) => (isOpen ? "fixed" : "")};
  top: ${({ isOpen }) => (isOpen ? "80px" : "")};
  right: 0;
  width: ${({ isOpen }) => (isOpen ? "100vw" : "")};
  height: ${({ isOpen }) => (isOpen ? "50vh" : "")};
  @media screen and (min-width: 600px) {
    display: flex;
    padding: 0 20px;
  }
`;
export const Hamburger = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;
