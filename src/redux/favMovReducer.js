import { CREATELIBRARY, DISLIKEMOVIE, LIKEMOVIE } from "./actionTypes";

const initialFav = {
  favMovies: [
    {
      id: 200065549849964,
      Username: "Dali",
      likedMovies: [],
    },
    {
      id: 2000465449849964,
      Username: "Ahmed",
      likedMovies: [],
    },
    {
      id: 20004677778849964,
      Username: "Samir",
      likedMovies: [],
    },
    {
      id: 20004677778899949964,
      Username: "Rami",
      likedMovies: [],
    },
  ],
};

export const favMoviesReducer = (state = initialFav, { type, payload }) => {
  switch (type) {
    case CREATELIBRARY:
      return {
        ...state,
        favMovies: [
          ...state.favMovies,
          { id: payload.id, Username: payload.Username, likedMovies: [] },
        ],
      };
    case LIKEMOVIE:
      return {
        ...state,
        favMovies: state.favMovies.map((el) =>
          el.id === payload.payloadUser.id
            ? { ...el, likedMovies: [...el.likedMovies, payload.payloadMovie] }
            : el
        ),
      };
    case DISLIKEMOVIE:
      return {
        ...state,
        favMovies: state.favMovies.map((el) =>
          el.id === payload.userID
            ? {
                ...el,
                likedMovies: el.likedMovies.filter(
                  (el) => el.id !== payload.movieID
                ),
              }
            : el
        ),
      };
    default:
      return state;
  }
};
