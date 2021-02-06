import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileLoader from "../../components/parts/profile_loader";
import EmptyList from "../../components/parts/empty_list";
import store from "../../services/store";
import { useRouter } from "next/router";
import MainButton from "../../components/buttons/main_button";
import ProfileLayout from "../../components/layouts/profile_layout";
import OrderInfoModal from "../../components/modals/order_info_modal";
import NumberFormat from "react-number-format";

export default function Contracts() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(0);

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
          customer: id,
        },
      })
        .then(async (orders_res) => {
          setOrders(orders_res.data);
          console.log(orders_res.data);
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

  const getOrder = async (id) => {
    setLoadingOrder(true);
    setIsOpen(true);
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
      url: `${process.env.apiUrl}offerFabrics/${id}`,
    })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoadingOrder(false));
  };

  return (
    <ProfileLayout title="My Contracts | Steechit">
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
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr>
                  <td data-label="Contract Ref">{o.contractRef}</td>
                  <td data-label="Date">
                    {new Date(o.createdAt).toLocaleString()}
                  </td>
                  <td data-label="Status">
                    <Tag
                      bg={o.isClosed ? "success600" : "danger600"}
                      textColor="white"
                    >
                      {o.isClosed ? "Successful" : "Pending"}
                    </Tag>
                  </td>
                  <td data-label="Contract Ref">
                    <NumberFormat
                      value={o.fabrics[0].consideration}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </td>
                  <td data-label="">
                    <MainButton
                      onClick={() => getOrder(o.fabrics[0].offerFabrics)}
                      title="Show details"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Div>
      {/* Info Modal */}
      <OrderInfoModal
        loading={loadingOrder}
        order={order}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ProfileLayout>
  );
}
