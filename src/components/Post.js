import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
    title, 
    slug, 
    mainImage{
      asset-> {
        _id,
         url
      },
      alt
    }
  }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  });

  return (
    <main>
      <section>
        <h1></h1>
        <h3></h3>
        <div>
          <article>
            <Link>
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Post;
