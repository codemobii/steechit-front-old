import { combineReducers } from "redux";
// import AppReducer from './AppReducer';

import loginReduser from "./login_reducers";
import forgetPassword from "./forgot_password_reducer";
import resetPassword from "./reset_password_reducer";
import registrationReducer from "./register_reducer";
import verificationReducer from "./verification_reducer";
import profileReducers from "./profile_reducer";

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth: loginReduser,
  newUser: registrationReducer,
  verificationReducer,
  forgetPassword,
  resetPassword,
  user: profileReducers,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "logout_user") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
