import { useAllPrismicDocumentsByType } from "@prismicio/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogPreview from "../Components/BlogPreview";
import MediaPreview from "../Components/MediaPreview";
import "./Home.css";

export default function Home() {
  const [posts, { state }] = useAllPrismicDocumentsByType("blog_post");
  const [medias] = useAllPrismicDocumentsByType("media_post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    pageSize: "3",
  });
  return (
    <div>
      <Container>
        <Row className="Hero">
          <Col md={{ span: 6 }} className="HeroTextContainer">
            {/* <Image src="./2.png" className="HeroImage"></Image> */}

            <h1 className="HeroText">
              A Classical singer who has been wandering in the Himalayas since
              2014. Come join me on my adventures!
            </h1>
          </Col>
        </Row>
        <br />
        <h1 className="SectionH">Blog</h1>
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
        <h1 className="SectionH">Media</h1>
        {!medias ? (
          <p>Loading...</p>
        ) : (
          medias.map((media, i) => (
            <MediaPreview
              key={i}
              title={media.data.title}
              date={media.data.date}
              description={media.data.description}
              image={media.data.preview_image.url}
              uid={media.uid}
            />
          ))
        )}
        {console.log(medias)}
        <br />
      </Container>
    </div>
  );
}
