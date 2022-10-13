import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const HeaderReview = ({ reviews }: any) => {
  return (
    <Navbar className="bg-color" expand="lg">
      <Container className="bg-color" fluid>
        <Navbar.Brand className="h1 bg-color">
          Aromatic
          <div className="h6 bg-color">{reviews.length} records found</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="bg-color" id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 bg-color" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex bg-color">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Link to={routes.addReview}>
              <Button variant="success" className="white-space">
                Add New
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderReview;
