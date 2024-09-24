import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Navigate } from "react-router-dom";

const MovieList = ({ search }) => {
  const { movies } = useSelector((state) => state.movieReducer);
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {!isAuth && LoggedUser !== "Admin" ? (
        <Navigate to="/login" />
      ) : (
        movies
          .filter((el) =>
            el.name.trim().toUpperCase().includes(search.trim().toUpperCase())
          )
          .map((el) => <MovieCard key={el.id} el={el} />)
      )}
    </div>
  );
};

export default MovieList;
