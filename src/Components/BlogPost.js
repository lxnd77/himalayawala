import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CustomText from "./CustomText";
import "./BlogPost.css";

export default function BlogPost(props) {
  const uid = useParams();
  const [post] = usePrismicDocumentByUID("blog_post", uid.uid);

  return (
    <Container className="BlogPost">
      {post ? (
        <div>
          <Row>
            <img
              alt={post.data.preview_image.alt}
              src={post.data.preview_image.url}
              className="preview_image"
            ></img>
          </Row>
          <br />
          <Row className="title">
            <PrismicRichText field={post.data.title} />
          </Row>
          <div className="text">
            {post.data.body[0].items.map((item, i) => (
              <CustomText item={item} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </Container>
  );
}
