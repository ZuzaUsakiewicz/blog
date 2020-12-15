import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import {
  PostsPageContainer,
  PostsContainer,
  Article,
  PostImage,
  Title,
  PostLink,
} from "../layout/Posts.styled";

const Post = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
    title, 
    slug, 
    publishedAt,
    mainImage{
      asset-> {
        _id,
         url
      },
      alt
    }
  }
  `
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <PostsPageContainer>
      <h1>Blog Posts Page</h1>
      <h3>Programming, books and more</h3>
      <PostsContainer>
        {postData &&
          postData.map((post, index) => (
            <Article key={index}>
              <PostLink
                to={"/post/" + post.slug.current}
                key={post.slug.current}
              >
                <PostImage
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                />
                <Title>{post.title}</Title>
                <p>{post.publishedAt}</p>
              </PostLink>
            </Article>
          ))}
      </PostsContainer>
    </PostsPageContainer>
  );
};

export default Post;
