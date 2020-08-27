import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = (props) => {
  const carts = props.addCart;
  const totalPrice = carts.reduce((totalPrice, ca) => ca.price + totalPrice, 0);
  let notice;
  if (carts.length === 0) {
    notice = <p>Nothing on cart</p>;
  } else {
    notice = <p>{carts.length} course in cart</p>;
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className="mytooltip">
      <div className="tool-custom">
        {notice}

        {carts.map((item) => (
          <div
            className="row"
            fluid
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            <div className="col-md-6">{item.title.substr(0, 30)}...</div>
            <div className="col-md-6">Price: ${item.price}</div>
          </div>
        ))}
        <p>
          <b>Total: ${totalPrice.toFixed(2)}</b>
        </p>
        <Button varient="secondary" className="btn-color">
          Checkout
        </Button>
      </div>
    </Tooltip>
  );
  return (
    <div>
      <Container>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 1000 }}
                overlay={renderTooltip}
              >
                <Nav.Link href="#link" className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  <span className="badge badge-light">{carts.length}</span>
                </Nav.Link>
              </OverlayTrigger>
              <Button variant="primary" className="btn-white nav-btn">
                Login
              </Button>

              <Button variant="primary" className="btn-color nav-btn">
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="hero">
          <div className="flex">
            <div className="left">
              <h2>Enroll our course right now</h2>
              <p>
                We weill teach you how to change the world. Almost everything
                you can learn from our site.
              </p>
              <Button varient="primary" className="btn-white">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
