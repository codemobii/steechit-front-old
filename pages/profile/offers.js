import { Anchor, Button, Div, Dropdown, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileLoader from "../../components/parts/profile_loader";
import EmptyList from "../../components/parts/empty_list";
import store from "../../services/store";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import ProfileLayout from "../../components/layouts/profile_layout";

export default function Bookings() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [hasStore, setHasStore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showN, setShowN] = useState("");

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
            url: `${process.env.apiUrl}offerTailors`,
            params: {
              user: id,
            },
          })
            .then(async (orders_res) => {
              setOrders(orders_res.data);

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
                url: `${process.env.apiUrl}offerFabrics`,
                params: {
                  user: id,
                },
              })
                .then(async (orderss) => {
                  const orders_re = orderss.data;
                  setOrders([...orders, ...orders_re]);
                  console.log(orders);
                })
                .catch((error) => {
                  console.log(error);
                });
              console.log(orders_res);
            })
            .catch((error) => {
              console.log(error);
            });
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

  // Get the stores

  const getFabricOffers = async () => {
    setLoading(true);
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
      url: `${process.env.apiUrl}offerFabrics`,
      params: {
        user: id,
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

  //

  const getTailorOffers = async () => {
    setLoading(true);
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
      url: `${process.env.apiUrl}offerTailors`,
      params: {
        user: id,
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

  // Get fabric offers
  const menuList = (
    <Div>
      <Anchor d="block" p="5px 10px" onClick={getTailorOffers}>
        Offer to tailors
      </Anchor>
      <Anchor
        textColor="danger800"
        d="block"
        p="10px"
        onClick={getFabricOffers}
      >
        Offer to fabric-stores
      </Anchor>
    </Div>
  );

  return (
    <ProfileLayout title="My Offers | Steechit">
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          My Offers
        </Text>

        <Dropdown
          isOpen={showN}
          onClick={() => {
            setShowN(!showN);
          }}
          border="none"
          menu={menuList}
          w="fit-content"
        >
          Filter offer list
        </Dropdown>
      </Div>
      <Div w="100%" p="20px">
        {loading ? (
          <ProfileLoader />
        ) : hasStore ? (
          orders.length === 0 ? (
            <EmptyList />
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Offer ID</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, i) => (
                  <tr>
                    <td data-label="Offer ID">{o.offerRef}</td>
                    <td data-label="Created on">
                      {new Date(o.createdAt).toLocaleString()}
                    </td>
                    <td data-label="Amount">
                      <NumberFormat
                        value={o.consideration}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      />
                    </td>
                    <td data-label="Status">
                      <Tag
                        bg={
                          !o.decline.is_decline && !o.accept.is_accept
                            ? "warning700"
                            : o.accept.is_accept
                            ? "success600"
                            : "danger700"
                        }
                        textColor="white"
                      >
                        {!o.decline.is_decline && !o.accept.is_accept
                          ? "Pending"
                          : o.accept.is_accept
                          ? "Accepted"
                          : "Declined"}
                      </Tag>
                    </td>
                    <td data-label="Action">
                      <Anchor textColor="danger800" d="block" p="10px">
                        Cancel
                      </Anchor>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : (
          <Div w="100%" h="300px" d="flex" align="center" justify="center">
            <Div textAlign="center">
              <Image
                src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
                width="300px"
                m={{ b: "20px" }}
              />
              <Text tag="header" textSize="title">
                You don't have a store
              </Text>
              <Button
                prefix={
                  <Icon
                    name="Store"
                    size="16px"
                    color="white"
                    m={{ r: "0.5rem" }}
                  />
                }
                bg="warning700"
                hoverBg="warning800"
                rounded="circle"
                p={{ r: "1.5rem", l: "1rem" }}
                shadow="3"
                hoverShadow="4"
              >
                Create your store
              </Button>
            </Div>
          </Div>
        )}
      </Div>
    </ProfileLayout>
  );
}
//
