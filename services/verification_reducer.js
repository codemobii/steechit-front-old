import { VERIFICATION } from "./constants";
const initialState = {
  success: false,
  message: false,
  _id: false,
  is_verified: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION:
      if (action.payload.success) {
        return {
          ...state,
          success: action.payload.success,
          message: action.payload.message,
          _id: action.payload.data._id,
          is_verified: true,
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
