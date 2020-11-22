import { FORGOTPASSWORD } from "./constants";
const initialState = {
  success: false,
  message: false,
  _id: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORGOTPASSWORD:
      if (action.payload.success) {
        return {
          ...state,
          message: action.payload.message,
          _id: action.payload.data._id,
          success: true,
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
