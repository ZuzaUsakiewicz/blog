import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostsPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PostsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Article = styled.article`
  margin: 0 auto;
  background: white;
  box-shadow: ${({ theme }) => theme.postShadow};
  border-radius: 20px;
  margin: 10px 0;

  @media screen and (min-width: 600px) {
    width: calc(45vw - 10px);
  }
`;

export const PostImage = styled.img`
  width: 90vw;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  @media screen and (min-width: 600px) {
    width: calc(45vw - 10px);
  }
`;
export const Title = styled.h3`
  text-decoration: none;
  color: black;
  padding: 20px;
`;

export const PostLink = styled(Link)`
  text-decoration: none;
`;
