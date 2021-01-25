import { Button, Div, Image, Label, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../components/parts/profile_loader";
import EmptyList from "../../components/parts/empty_list";
import ProfileLayout from "../../components/layouts/profile_layout";
import FundWallet from "../../components/forms/fund_wallet";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";

export default function Wallet() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFunder, setShowFunder] = useState(false);
  const [hasStore, setHasStore] = useState(true);

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
        url: `${process.env.apiUrl}wallet/`,
        params: {
          user: id,
        },
      })
        .then(async (res) => {
          setWallet(res.data[0].amount);
          const orders_res = await axios({
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            proxy: {
              host: "104.236.174.88",
              port: 3128,
            },
            method: "GET",
            url: `${process.env.apiUrl}history/`,
            params: {
              user: id,
            },
          });
          console.log(orders_res);
          setOrders(orders_res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
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
          if (store_res.data.length === 0) {
            setHasStore(false);
          }
        })
        .catch(() => {});
    };
    getUserItems();
  }, [id, token]);

  return (
    <ProfileLayout title="My Wallet | Steechit">
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          My Balance
        </Text>
      </Div>
      <Div w="100%" p="20px">
        {loading ? (
          <ProfileLoader />
        ) : (
          <>
            <Div
              w="100%"
              d={{
                xs: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
              }}
              align="center"
              p="20px"
              justify="space-between"
              bg="success200"
              rounded="lg"
            >
              <Div>
                <Text d="block" tag="label">
                  Wallet balance
                </Text>
                <NumberFormat
                  value={wallet}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₦"}
                  renderText={(value) => (
                    <Text tag="h3" textSize="heading">
                      {value}
                    </Text>
                  )}
                />
              </Div>
              <Div
                d={{
                  xs: "block",
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                }}
              >
                <Button
                  w="100%"
                  bg="black800"
                  onClick={() => setShowFunder(true)}
                  m={{
                    r: "1rem",
                    b: {
                      xs: "10px",
                      sm: "10px",
                      md: "0",
                      lg: "0",
                      xl: "0",
                    },
                    t: {
                      xs: "10px",
                      sm: "10px",
                      md: "0",
                      lg: "0",
                      xl: "0",
                    },
                  }}
                >
                  Fund wallet
                </Button>
              </Div>
            </Div>
            <Text m={{ t: "1rem" }} tag="header" textSize="subheader">
              Transaction History
            </Text>

            {orders.length !== 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, index) => (
                    <tr>
                      <td data-label="S/N">{index + 1}</td>
                      <td data-label="Amount">{o.amount}</td>
                      <td data-label="Type">{o.type}</td>
                      <td data-label="Date">
                        {new Date(o.createdAt).toDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <EmptyList />
            )}
          </>
        )}
      </Div>

      <FundWallet isOpen={showFunder} onClose={() => setShowFunder(false)} />
    </ProfileLayout>
  );
}
