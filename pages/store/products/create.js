import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileLoader from "../../../components/parts/profile_loader";
import store from "../../../services/store";
import { useRouter } from "next/router";
import { profileRequest } from "../../../services/profile_action";
import SellProductForm from "../../../components/forms/sell_product_form";
import StoreLayout from "../../../components/layouts/store_layout";

export default function Sell() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");

  useEffect(() => {
    const getUserItems = async () => {
      await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}stores/`,
        params: {
          user: id,
        },
      })
        .then(async (store_res) => {
          if (store_res.data.length !== 0) {
            setType(store_res.data[0].type);
          } else {
            router.push("/profile/store/start");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    dispatch(profileRequest(token, id));
    getUserItems();
  }, [id, token, dispatch]);

  return (
    <StoreLayout title="Sell a product | Steechit">
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          Upload a product
        </Text>
      </Div>
      {loading ? (
        <ProfileLoader />
      ) : (
        <Div p="20px" pos="relative">
          <SellProductForm type={type} user={user} />
        </Div>
      )}
    </StoreLayout>
  );
}
