import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {
  SinglePostContainer,
  PostContainer,
  BlockContentContainer,
  Heading,
  PostTitle,
  PostImage,
  AuthorContent,
  AuthorImage,
  Author,
} from "../layout/SinglePost.styled";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current== "${slug}"] {
    title,
    _id,
    slug,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body,
    "name": author->name,
    "authorImage": author->image
  }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <SinglePostContainer>
      <PostContainer>
        <Heading>
          <PostImage
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
          <PostTitle>{singlePost.title}</PostTitle>
          <span>{singlePost.publishedAt}</span>
        </Heading>
        <BlockContentContainer>
          <BlockContent
            blocks={singlePost.body}
            projectId="8wj83y2h"
            dataset="production"
          />
        </BlockContentContainer>
        <AuthorContent>
          <AuthorImage
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
          />
          <Author>{singlePost.name}</Author>
        </AuthorContent>
      </PostContainer>
    </SinglePostContainer>
  );
};

export default SinglePost;
