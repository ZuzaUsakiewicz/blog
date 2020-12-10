import React, { useState } from "react";
import {
  NavContainer,
  Navbar,
  Logo,
  NavigationLink,
  Links,
  Hamburger,
} from "../layout/Navbar.styled";
import { ImCross, ImMenu } from "react-icons/im";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => setIsOpen(false);
  return (
    <NavContainer>
      <Navbar>
        <Logo>Z</Logo>
        <Hamburger onClick={handleOpen}>
          {isOpen ? <ImCross /> : <ImMenu />}
        </Hamburger>
        <Links isOpen={isOpen}>
          <NavigationLink to="/" exact onClick={closeMobileMenu}>
            home
          </NavigationLink>
          <NavigationLink to="/about" onClick={closeMobileMenu}>
            about
          </NavigationLink>
          <NavigationLink to="/post" onClick={closeMobileMenu}>
            posts
          </NavigationLink>
        </Links>
      </Navbar>
    </NavContainer>
  );
};

export default Navigation;
