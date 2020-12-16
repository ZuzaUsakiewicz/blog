import styled from "styled-components";
import { motion } from "framer-motion";

export const SinglePostContainer = styled(motion.section)`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`;

export const PostContainer = styled.article`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const BlockContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Heading = styled.div`
  margin: 20px 0;
  border-bottom: 2px solid black;
`;

export const PostTitle = styled.h2`
  font-weight: bold;
  padding: 10px 0 20px 10px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  @media screen and (min-width: 600px) {
    width: calc(45vw - 10px);
  }
`;

export const AuthorContent = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 55%;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  padding-right: 5px;
`;
export const Author = styled.p`
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
`;
