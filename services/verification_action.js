import axios from "axios";
import { get } from "lodash";
import { VERIFICATION } from "./constants";

export const VerificationRequest = (data) => async (dispatch) => {
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
      url: `${process.env.apiUrl}verification`,
      data,
    });

    console.log(res);
    dispatch({
      type: VERIFICATION,
      payload: {
        success: true,
        message: true,
        data: res.data,
      },
    });
  } catch (e) {
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: VERIFICATION,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};
