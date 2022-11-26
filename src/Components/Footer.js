import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container fluid className="FooterContainer">
          <Row>
            <Col>
              <h1 className="Name">Vishal Yadav</h1>
            </Col>
            <Col className="IconContainer">
              <Image
                className="socialIcon"
                rounded
                src="./instagram.png"
              ></Image>
              <Image className="socialIcon" rounded src="./fb.png"></Image>
              <Image className="socialIcon" rounded src="./youtube.png"></Image>
              <Image className="socialIcon" rounded src="./twitter.png"></Image>
            </Col>
            <Row>
              <Col xs={3}>
                <div className="LinkContainer">
                  <Row>
                    <Link className="Link" to="/">
                      Home
                    </Link>
                  </Row>
                  <Row>
                    <Link className="Link" to="/blog">
                      Blog
                    </Link>
                  </Row>
                  <Row>
                    <Link className="Link" to="/media">
                      Media
                    </Link>
                  </Row>
                  <Row>
                    <Link className="Link" to="/contact">
                      Contact
                    </Link>
                  </Row>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
