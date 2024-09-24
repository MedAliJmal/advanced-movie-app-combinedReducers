import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

const initialState = {
  movies: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "2019-09-01",
      category: "Science Fiction",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "2018-01-09",
      category: "Science Fiction",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "2019-11-25",
      category: "For kids",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "2016-11-23",
      category: "Science Fiction",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_FMjpg_UX1000_.jpg",
      rating: 2,
      name: "Cat In The Hat",
      date: "2003-11-15",
      category: "Comedy",
    },
  ],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((el) => el.id !== payload),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((el) => (el.id === payload.id ? payload : el)),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };

    default:
      return state;
  }
};
