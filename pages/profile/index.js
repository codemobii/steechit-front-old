import { Div, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../components/profile_loader";
import EmptyList from "../../components/empty_list";
import ProfileLayout from "../../components/profile_layout";

export default function Orders() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserItems = async () => {
      console.log(orders);
      await Axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `https://steechit-api.herokuapp.com/contract/`,
        params: {
          customer: id,
        },
      })
        .then((res) => {
          setOrders(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUserItems();
  }, [id, token, dispatch, orders]);

  return (
    <ProfileLayout>
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          My Orders
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
                <th scope="col">Ref</th>
                <th scope="col">Amount</th>
                <th scope="col">Initial Payment</th>
                <th scope="col">Next Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr>
                  <td data-label="Ref">
                    <Text>{o.contractRef}</Text>
                  </td>
                  <td data-label="Amount">
                    <Text>{o.chargedAmount}</Text>
                  </td>
                  <td data-label="Initial Payment">
                    <Text>{o.installment.initialPayment}</Text>
                  </td>
                  <td data-label="Next Payment">
                    <Text>{o.installment.nextPayment}</Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Div>
    </ProfileLayout>
  );
}
