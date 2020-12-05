import axios from "axios";
import { get } from "lodash";
import { FORGOTPASSWORD } from "./constants";

export const ForgotPasswordRequest = (data) => async (dispatch) => {
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
      url: `${process.env.apiUrl}forgotten_password`,
      data,
    });

    dispatch({
      type: FORGOTPASSWORD,
      payload: {
        success: true,
        message: "processing",
        data: res.data,
      },
    });
  } catch (e) {
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: FORGOTPASSWORD,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};
