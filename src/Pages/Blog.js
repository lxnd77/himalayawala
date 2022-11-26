import { useAllPrismicDocumentsByType } from "@prismicio/react";
import React from "react";
import { Container } from "react-bootstrap";
import BlogPreview from "../Components/BlogPreview";
import "./Blog.css";
export default function Blog() {
  const [posts, { state }] = useAllPrismicDocumentsByType("blog_post");
  return (
    <div>
      <h1 className="SectionH">Blog</h1>
      <br />
      <Container>
        {state === "loading" || !posts ? (
          <p>Loading...</p>
        ) : (
          posts.map((post, i) => (
            <BlogPreview
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
