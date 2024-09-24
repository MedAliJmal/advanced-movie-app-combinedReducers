import React from "react";
import { Button, Card } from "react-bootstrap";
import EditMovie from "./EditMovie";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actions";

const MovieCard = ({ el }) => {
  const dispatch = useDispatch();
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
          <Button variant="danger" onClick={() => dispatch(deleteMovie(el.id))}>
            Delete
          </Button>
          <EditMovie el={el} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
