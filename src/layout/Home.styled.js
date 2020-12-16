import styled from "styled-components";
import background from "../images/backgroundhome.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToAction = styled(Link)`
  padding: 20px 30px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.buttonFont};
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.buttonBg};
  cursor: pointer;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HeroTitle = styled.h1`
  color: rgb(214, 228, 230);
  text-shadow: 2px 2px 4px#797777;
  font-size: 4rem;
`;
