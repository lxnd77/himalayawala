import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CustomText.css";

export default function CustomText(item) {
  const side = item.item.side;
  const text = item.item.text;
  const img = item.item.image;
  console.log(item.item);
  if (side === "left") {
    return (
      <Row className="rt">
        <Col md={8}>
          <PrismicRichText className="text" field={text} />
        </Col>
        <Col md={4}>
          <img src={img.url} alt={img.alt}></img>
        </Col>
      </Row>
    );
  } else if (side === "right") {
    return (
      <Row className="rt">
        <Col md={4}>
          <img src={img.url} alt={img.alt}></img>
        </Col>
        <Col md={8}>
          <PrismicRichText className="text" field={text} />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className="rt">
        <PrismicRichText className="text" field={text} />
      </Row>
    );
  }
}
