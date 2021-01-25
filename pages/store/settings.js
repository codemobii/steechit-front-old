import { Div, Text } from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileLoader from "../../components/parts/profile_loader";
import StoreSettings from "../../components/forms/store_settings";
import { profileRequest } from "../../services/profile_action";
import store from "../../services/store";
import StoreLayout from "../../components/layouts/store_layout";

export default function Settings() {
  const router = useRouter();

  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios({
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
          proxy: {
            host: "104.236.174.88",
            port: 3128,
          },
          method: "PUT",
          url: `${process.env.apiUrl}users/${id}`,
        }).then((res) => {
          setLoading(false);
        });
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        setLoading(false);
        console.log(msg);
      }
    };
    dispatch(profileRequest(token, id));
    getUser();
  }, [id, token]);

  return (
    <>
      <StoreLayout title="Settings | Steechit">
        <Div
          p="20px"
          style={{ borderBottom: "1px solid #ccc" }}
          d="flex"
          justify="space-between"
          align="center"
        >
          <Text tag="header" textSize="title">
            Edit store
          </Text>
        </Div>
        <Div p="20px">
          {loading ? <ProfileLoader /> : <StoreSettings user={user} />}
        </Div>
      </StoreLayout>
    </>
  );
}
