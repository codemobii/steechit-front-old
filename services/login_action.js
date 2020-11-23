import axios from "axios";
import { get } from "lodash";
import { Router } from "next/router";

import { LOGIN_USER, LOGOUT_USER } from "./constants";
export const LoginRequest = (data) => async (dispatch) => {
  try {
    const res = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "POST",
      url: `https://steechit-api.herokuapp.com/login`,
      data,
    });

    dispatch({
      type: LOGIN_USER,
      payload: {
        success: true,
        message: "login successful",
        data: res.data,
        email: data.email,
      },
    });
  } catch (e) {
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: LOGIN_USER,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};

export const LogOutRequest = (data) => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: LOGOUT_USER,
    payload: {
      success: false,
    },
  });

  Router.push("/?auth=true");
};
