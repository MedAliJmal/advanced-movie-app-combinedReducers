import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions";
import LikedMovies from "./LikedMovies";

const Entete = ({ search, handleSearch }) => {
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/movies">Home</Link>
              {isAuth && LoggedUser.userRole === "Admin" ? (
                <Link to="/movie/add">Add Movie</Link>
              ) : null}
            </Nav>
            {isAuth ? (
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            ) : null}
            {isAuth ? (
              <>
                <Button variant="danger" onClick={() => dispatch(logoutUser())}>
                  Logout
                </Button>
                <LikedMovies />
              </>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
