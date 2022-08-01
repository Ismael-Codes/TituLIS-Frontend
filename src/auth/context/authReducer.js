import { types } from "../types/types";

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
        name: null
      };

    default:
      return state;
  }
}