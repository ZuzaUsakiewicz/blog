import React from "react";
import { HomeContainer, CardsContainer, Card } from "../layout/Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <CardsContainer>
        <Card>Book</Card>
        <Card>Programming</Card>
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
