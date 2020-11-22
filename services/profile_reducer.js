import { GET_USERS } from "./constants";
const initialState = {
  success: false,
  message: false,
  _id: false,
  role: false,
  phone: false,
  email: false,
  disabled: false,
  verified: false,
  merchantVerified: false,
  documents: [],
  avatar: { url: "" },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      if (action.payload.success) {
        return {
          ...state,
          disabled: action.payload.disabled,
          verified: action.payload.verified,
          merchantVerified: action.payload._merchantVerified,
          _id: action.payload._id,
          role: 3,
          phone: action.payload.phone,
          email: action.payload.email,
          documents: action.payload.documents,
          message: action.payload.message,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          country: action.payload.country,
          state: action.payload.state,
          dateOfBirth: action.payload.dateOfBirth,
          gender: action.payload.gender,
          address: action.payload.address,
          zipCode: action.payload.zipCode,
          imageUrl: action.payload.imageUrl,
        };
      } else {
        return {
          // Wrong Token
          message: action.payload.message,
        };
      }

    default:
      return state;
  }
};
