import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dislikeMovie, likeMovie } from "../redux/actions";

const UserMovieCard = ({ el }) => {
  const { LoggedUser } = useSelector((state) => state.userReducer);
  const { favMovies } = useSelector((state) => state.favMoviesReducer);
  const Library = favMovies.find((el) => el.id === LoggedUser.id);
  const dispatch = useDispatch();
  const handleLikeDislike = (LoggedUser, movie) => {
    Library.likedMovies.find((el) => el.id === movie.id)
      ? dispatch(dislikeMovie(LoggedUser, movie))
      : dispatch(likeMovie(LoggedUser, movie));
  };
  return (
    <div style={{ margin: "15px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.rating}</Card.Text>
          <Card.Text>{el.date}</Card.Text>
          <Card.Text>{el.category}</Card.Text>

          <Link to={`/movie/details/${el.id}`}>
            <Button variant="primary">Check details</Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => handleLikeDislike(LoggedUser, el)}
          >
            {Library.likedMovies.find((element) => element.id === el.id)
              ? "Dislike"
              : "♥"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserMovieCard;
