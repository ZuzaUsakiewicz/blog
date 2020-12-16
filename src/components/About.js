import React from "react";
import { pageTransition } from "../animation/animation";
import { AboutPageContainer } from "../layout/About.styled";
const About = () => {
  return (
    <AboutPageContainer
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      About
    </AboutPageContainer>
  );
};

export default About;
