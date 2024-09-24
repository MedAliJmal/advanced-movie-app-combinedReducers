import { LOGIN, LOGOUT, REGISTER } from "./actionTypes";

const initialUser = {
  AllUsers: [
    {
      id: 200065549849964,
      Username: "Dali",
      Email: "Dali123@gmail.com",
      PW: "Dali123",
      userRole: "User",
    },
    {
      id: 15648494658964,
      Username: "Dali Jmal",
      Email: "DaliUser@gmail.com",
      PW: "Dali123",
      userRole: "Admin",
    },
  ],
  LoggedUser: null,
  isAuth: false,
};

export const userReducer = (state = initialUser, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, AllUsers: [...state.AllUsers, payload] };
    case LOGIN:
      return {
        ...state,
        LoggedUser: payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        LoggedUser: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
