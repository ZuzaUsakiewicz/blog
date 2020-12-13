import React from "react";
import { HomeContainer, HeroContent, ToAction } from "../layout/Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <HeroContent>
        <h1>Front-end, książki</h1>
        <ToAction to="/post">Blog</ToAction>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;
