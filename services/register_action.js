import axios from "axios";
import { get } from "lodash";
import { REGISTRATION } from "./constants";

export const RegisterRequest = (data) => async (dispatch) => {
  try {
    //    console.log(data)

    //    return
    const res = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "POST",
      url: `${process.env.apiUrl}users`,
      data,
    });

    //   console.log(res)
    //   return false

    dispatch({
      type: REGISTRATION,
      payload: {
        success: true,
        message: "login successful",
        data: res.data,
      },
    });
  } catch (e) {
    console.log(e);
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: REGISTRATION,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};
