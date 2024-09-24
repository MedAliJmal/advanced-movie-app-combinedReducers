import React from "react";
import { useSelector } from "react-redux";
import UserMovieCard from "./UserMovieCard";
import { Navigate } from "react-router-dom";

const UserMovieList = ({ search }) => {
  const { movies } = useSelector((state) => state.movieReducer);
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);

  return (
    <div>
      {!isAuth && LoggedUser !== "User" ? (
        <Navigate to="/login" />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {movies
            .filter((el) =>
              el.name.trim().toUpperCase().includes(search.trim().toUpperCase())
            )
            .map((el) => (
              <UserMovieCard key={el.id} el={el} />
            ))}
        </div>
      )}
    </div>
  );
};

export default UserMovieList;
