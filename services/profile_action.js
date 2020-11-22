import axios from "axios";
import { get } from "lodash";

import { GET_USERS } from "./constants";

export const profileRequest = (token, id) => async (dispatch) => {
  try {
    const res = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "GET",
      url: `https://steechit-api.herokuapp.com/users/${id}`,
    });

    dispatch({
      type: GET_USERS,
      payload: {
        success: true,
        message: "User data selected",
        email: res.data.email,
        phone: res.data.phone,
        role: res.data.role,
        verified: res.data.verified,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        country: res.data.country,
        state: res.data.state,
        dateOfBirth: res.data.dateOfBirth,
        gender: res.data.gender,
        address: res.data.contact.address,
        zipCode: res.data.contact.zipCode,
        imageUrl: res.data.avatar.url,
      },
    });
  } catch (e) {
    const msg = get(e, "response.data.message") || e.message;
    dispatch({
      type: GET_USERS,
      payload: {
        success: false,
        message: msg,
      },
    });
  }
};
