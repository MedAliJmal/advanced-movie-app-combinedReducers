import {
  ADD_MOVIE,
  CREATELIBRARY,
  DELETE_MOVIE,
  DISLIKEMOVIE,
  EDIT_MOVIE,
  LIKEMOVIE,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "./actionTypes";

export const deleteMovie = (clickedID) => {
  return {
    type: DELETE_MOVIE,
    payload: clickedID,
  };
};

export const editMovie = (modifiedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: modifiedMovie,
  };
};

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};

// userActions

export const registerAccount = (newUser) => {
  return {
    type: REGISTER,
    payload: newUser,
  };
};

export const loginUser = (loggedUser) => {
  return {
    type: LOGIN,
    payload: loggedUser,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

// like

export const createLibrary = (user) => {
  return {
    type: CREATELIBRARY,
    payload: user,
  };
};

export const likeMovie = (loggedUser, movie) => {
  return {
    type: LIKEMOVIE,
    payload: { payloadUser: loggedUser, payloadMovie: movie },
  };
};

export const dislikeMovie = (loggedUser, movie) => {
  return {
    type: DISLIKEMOVIE,
    payload: {
      userID: loggedUser.id,
      movieID: movie.id,
    },
  };
};
