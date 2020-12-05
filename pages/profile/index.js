import { Button, Col, Div, Icon, Image, Row, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../app-components/profile_loader";
import EmptyList from "../../app-components/empty_list";
import ProfileLayout from "../../app-components/profile_layout";
import { useRouter } from "next/router";
import { profileRequest } from "../../services/profile_action";
import Link from "next/link";

export default function Orders() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const user = useSelector((state) => state.user);
  const id = auth._id;

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasStore, setHasStore] = useState(false);

  useEffect(() => {
    const getUserItems = async () => {
      console.log(orders);
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
        url: `${process.env.apiUrl}contract`,
        params: {
          customer: id,
        },
      })
        .then(async (res) => {
          setOrders(res.data);
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
          }).then(async (res_w) => {
            setWallet(res_w.data[0].bal);
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
            }).then(async (store_res) => {
              console.log(store_res);
              if (store_res.data.length !== 0) {
                setHasStore(true);
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
                  url: `${process.env.apiUrl}products/`,
                  params: {
                    user: id,
                  },
                })
                  .then((res_p) => {
                    setProducts(res_p.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            });
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });

      dispatch(profileRequest(token, id));
    };

    getUserItems();
  }, [id, token]);

  return (
    <ProfileLayout title="My Profile | Steechit">
      <Div
        p="20px"
        style={{ borderBottom: "1px solid #ccc" }}
        d="flex"
        justify="space-between"
        align="center"
      >
        <Text tag="header" textSize="title">
          Hello, {user.firstName}
        </Text>
      </Div>
      <Div w="100%" p="20px">
        {loading ? (
          <ProfileLoader />
        ) : (
          <>
            <Row>
              <Col size="6">
                <Div
                  h="160px"
                  rounded="lg"
                  d="flex"
                  align="center"
                  justify="center"
                  m={{ b: "20px" }}
                  bg="gray100"
                >
                  <Div textAlign="center">
                    <Icon name="Card" size="50px" color="warning800" />
                    <Text>Wallet Balance</Text>
                    <Text textSize="title">₦{wallet}</Text>
                  </Div>
                </Div>
              </Col>
              <Col size="6">
                <Div
                  h="160px"
                  rounded="lg"
                  d="flex"
                  align="center"
                  justify="center"
                  m={{ b: "20px" }}
                  bg="gray100"
                >
                  <Div textAlign="center">
                    <Icon name="Bag" size="50px" color="warning800" />
                    <Text>My Orders</Text>
                    <Text textSize="title">{orders.length}</Text>
                  </Div>
                </Div>
              </Col>
              <Col size="6">
                <Div
                  h="160px"
                  rounded="lg"
                  d="flex"
                  align="center"
                  justify="center"
                  m={{ b: "20px" }}
                  bg="gray100"
                >
                  <Div textAlign="center">
                    <Icon name="Store" size="50px" color="warning800" />
                    <Text>My Store</Text>
                    <Text textSize="title">
                      {hasStore ? products.length : "N/A"}
                    </Text>
                  </Div>
                </Div>
              </Col>
              <Col size="6">
                <Link href="/profile/settings">
                  <Div
                    cursor="pointer"
                    h="160px"
                    rounded="lg"
                    d="flex"
                    align="center"
                    justify="center"
                    m={{ b: "20px" }}
                    bg="gray100"
                  >
                    <Div textAlign="center">
                      <Icon name="Settings" size="50px" color="warning800" />
                      <Text>Edit profile</Text>
                    </Div>
                  </Div>
                </Link>
              </Col>
            </Row>
            <Div
              w="100%"
              h="auto"
              p="30px"
              d="flex"
              align="center"
              justify="center"
            >
              <Div textAlign="center">
                <Image
                  src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-moderation.svg"
                  width="300px"
                  m={{ b: "20px" }}
                />
                <Text tag="header" textSize="title">
                  Sell a product today
                </Text>
                <Link href="/profile/store/sell">
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
                    m={{ t: "2rem", r: "auto", l: "auto" }}
                  >
                    Start Selling
                  </Button>
                </Link>
              </Div>
            </Div>
          </>
        )}
      </Div>
    </ProfileLayout>
  );
}
