import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileLoader from "../../components/parts/profile_loader";
import EmptyList from "../../components/parts/empty_list";
import store from "../../services/store";
import { useRouter } from "next/router";
import StoreLayout from "../../components/layouts/store_layout";
import MainButton from "../../components/buttons/main_button";

export default function Contracts() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
        url: `${process.env.apiUrl}contract/`,
        params: {
          user: id,
        },
      })
        .then(async (orders_res) => {
          setOrders(orders_res.data);
          console.log(orders_res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUserItems();
  }, [id, token, dispatch]);

  return (
    <StoreLayout title="My Contracts | Steechit">
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          My Contracts
        </Text>
      </Div>
      <Div w="100%" p="20px">
        {loading ? (
          <ProfileLoader />
        ) : orders.length === 0 ? (
          <EmptyList />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Contract Ref</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr>
                  <td data-label="Contract Ref">{o.contractRef}</td>
                  <td data-label="Date">
                    {new Date(o.createdAt).toDateString()}
                  </td>
                  <td data-label="Status">
                    <Tag
                      bg={!o.isClosed ? "success600" : "danger600"}
                      textColor="white"
                    >
                      {o.isClosed ? "Pending" : "Successful"}
                    </Tag>
                  </td>
                  <td data-label="Action">
                    <MainButton title="Show details" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Div>
    </StoreLayout>
  );
}
