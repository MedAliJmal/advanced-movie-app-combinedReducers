import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import Entete from "./components/Entete";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";
import UserMovieList from "./components/UserMovieList";
import LoginComp from "./components/LoginComp";
import LoginOfficial from "./components/LoginOfficial";
import { useSelector } from "react-redux";

function App() {
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);
  const [search, setSearch] = useState("");
  const handleSearch = (text) => setSearch(text);
  return (
    <div className="App">
      <Entete search={search} handleSearch={handleSearch} />
      {/*/*/}
      <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route path="/login" element={<LoginOfficial />} />
        <Route
          path="/movies"
          element={
            <div>
              {isAuth && LoggedUser.userRole === "User" ? (
                <UserMovieList search={search} />
              ) : (
                <MovieList search={search} />
              )}
            </div>
          }
        />

        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
