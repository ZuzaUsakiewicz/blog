import React from "react";
import {
  HomeContainer,
  HeroContent,
  ToAction,
  HeroTitle,
} from "../layout/Home.styled";
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
        <HeroTitle>Front-end, książki</HeroTitle>
        <ToAction to="/post">Blog</ToAction>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;
