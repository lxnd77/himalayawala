import { useAllPrismicDocumentsByType } from "@prismicio/react";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MediaPreview from "../Components/MediaPreview";
import "./Media.css";
export default function Media() {
  const [posts, { state }] = useAllPrismicDocumentsByType("media_post");
  return (
    <div>
      <h1 className="SectionH">Media</h1>
      <br />
      <Container>
        {state === "loading" || !posts ? (
          <p>Loading...</p>
        ) : (
          posts.map((post, i) => (
            <MediaPreview
              key={i}
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              image={post.data.preview_image.url}
              uid={post.uid}
            />
          ))
        )}
      </Container>
    </div>
  );
}
