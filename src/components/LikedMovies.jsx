import React, { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserMovieCard from "./UserMovieCard";

const LikedMovies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   -----------------------
  const { LoggedUser } = useSelector((state) => state.userReducer);
  const { favMovies } = useSelector((state) => state.favMoviesReducer);
  const loggedUserFavouriteMovies = favMovies.find(
    (el) => el.id === LoggedUser.id
  );
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Favourite Movies
        <Badge pill bg="danger">
          {loggedUserFavouriteMovies.likedMovies.length}
        </Badge>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "700px" }}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {LoggedUser.Username}'s favourite movies
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {loggedUserFavouriteMovies.likedMovies.map((el) => (
            <UserMovieCard el={el} key={el.id} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default LikedMovies;
