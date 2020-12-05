import axios from "axios";
import { get } from "lodash";
import { RESETPASSWORD } from "./constants";
export const ResetPasswordRequest = (data) => async (dispatch) => {
  // console.log(data)

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
      url: `${process.env.apiUrl}recover_password`,
      data,
    });

    dispatch({
      type: RESETPASSWORD,
      payload: {
        success: true,
        message: "visit login page to login",
        data: res.data,
      },
    });
  } catch (e) {
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: RESETPASSWORD,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};
