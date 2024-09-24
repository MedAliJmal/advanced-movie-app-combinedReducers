import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movies } = useSelector((state) => state.movieReducer);
  const params = useParams();
  const movieDetail = movies.find((el) => el.id === Number(params.id));
  return (
    <div>
      <img src={movieDetail.image} alt="taswira" />
      <h1>{movieDetail.name}</h1>
    </div>
  );
};

export default MovieDetails;
