import React from "react";
import { HomeContainer, HeroContent, ToAction } from "../layout/Home.styled";
import { pageTransition } from "../animation/animation";
const Home = () => {
  return (
    <HomeContainer
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <HeroContent>
        <h1>Front-end, książki</h1>
        <ToAction to="/post">Blog</ToAction>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;
