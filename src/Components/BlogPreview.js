import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogPreview.css";

const BlogPreview = (props) => {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <img alt={props.alt} src={props.image}></img>
        </Col>
        <Col>
          <Link to={`/blog/${props.uid}`} className="title">
            <PrismicRichText
              field={props.title}
              fallback={<h1>Loading..</h1>}
            />
          </Link>
          <br />
          <div className="rt">
            <PrismicRichText
              className="rt"
              field={props.description}
              fallback={<p>Loading..</p>}
            />
            <h4>{props.date}</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogPreview;
