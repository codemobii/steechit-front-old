import { LOGIN_USER } from "./constants";
const initialState = {
  success: false,
  message: false,
  token: false,
  _id: false,
  role: false,
  phone: false,
  email: false,
  accountNumber: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      if (action.payload.success) {
        return {
          ...state,
          loggedin: action.payload.success,
          message: action.payload.message,
          token: action.payload.data._token,
          _id: action.payload.data._id,
          role: action.payload.data.role,
          phone: action.payload.data.phone,
          email: action.payload.email,
        };
      } else {
        return {
          // Wrong username and password or logged out
          message: action.payload.message,
        };
      }

    default:
      return state;
  }
};
