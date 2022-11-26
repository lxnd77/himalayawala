import React, { Component } from "react";
import "./Header.css";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

export class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const dy = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementsByClassName("LogoContainer"),
      logoEl = document.getElementsByClassName("logoimg");
    if (dy > shrinkOn) {
      headerEl[0].classList.add("shrink");
      logoEl[0].classList.add("shrink");
    } else {
      headerEl[0].classList.remove("shrink");
      logoEl[0].classList.remove("shrink");
    }
  }

  render() {
    return (
      <div className="Header">
        <Row className="HeaderRow">
          <Navbar variant="light" className="HeaderRow">
            <Container>
              <div className="LogoContainer">
                <div>
                  <img
                    className="logoimg"
                    src="../../logo.png"
                    alt="Himalaya Wala Logo"
                  ></img>
                </div>
                <div className="logoname">
                  <h1>Vishal Yadav</h1>
                </div>
              </div>
              <Nav className="Links">
                <Nav.Link className="Link" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="Link" href="/about">
                  About
                </Nav.Link>
                <Nav.Link className="Link" href="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link className="Link" href="/media">
                  Media
                </Nav.Link>
                <Nav.Link className="Link" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>
      </div>

      // <div className="Header">
      //   <div className="Header-Container">
      //     <div className="Logo-Container">
      //       <Logo />
      //       <div className="Logo-Text">Himalaya Wala</div>
      //     </div>

      //     <div className="Link-Container">
      //       <Link className="Link" to="/">
      //         Home
      //       </Link>
      //       <Link className="Link" to="/blog">
      //         Blog
      //       </Link>
      //       <Link className="Link" to="/media">
      //         Media
      //       </Link>
      //       <Link className="Link" to="/contact">
      //         Contact
      //       </Link>
      //     </div>
      //   </div>
      // </div>

      // <div className="Header">
      //         <Navbar variant="light">
      //           <Container>
      //             <Navbar.Brand href="/">
      //               <img
      //                 src="../../logo.png"
      //                 alt="Himalaya Wala Logo"
      //                 width="150px"
      //                 height="200px"
      //               ></img>
      //               <br />
      //               <br />

      //               <h1>Vishal Yadav</h1>
      //             </Navbar.Brand>
      //             <Nav className="Links">
      //               <Nav.Link className="Link" href="/">
      //                 Home
      //               </Nav.Link>
      //               <Nav.Link className="Link" href="/blog">
      //                 Blog
      //               </Nav.Link>
      //               <Nav.Link className="Link" href="/media">
      //                 Media
      //               </Nav.Link>
      //               <Nav.Link className="Link" href="/contact">
      //                 Contact
      //               </Nav.Link>
      //             </Nav>
      //           </Container>
      //         </Navbar>
      //       </div>
    );
  }
}

export default Header;
