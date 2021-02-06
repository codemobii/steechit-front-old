import { Button, Col, Div, Icon, Image, Modal, Row, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../components/parts/profile_loader";
import ProfileLayout from "../../components/layouts/profile_layout";
import { useRouter } from "next/router";
import { profileRequest } from "../../services/profile_action";
import Link from "next/link";
import NumberFormat from "react-number-format";

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
  const [offers, setOffers] = useState([]);
  const [noName, setNoName] = useState(false);

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
            setWallet(res_w.data[0].amount);
            console.log(res_w.data);
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
              url: `${process.env.apiUrl}users/${id}`,
            })
              .then((u_res) => {
                if (u_res.data.firstName === "") {
                  setNoName(true);
                }
              })
              .catch(() => {});
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
              url: `${process.env.apiUrl}offerTailors/`,
              params: {
                user: id,
              },
            }).then(async (tailor_r) => {
              setOffers(tailor_r.data);
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
                url: `${process.env.apiUrl}offerFabrics/`,
                params: {
                  user: id,
                },
              }).then(async (store_r) => {
                const storeOffer = store_r.data;
                setOffers([...offers, ...storeOffer]);
                console.log(offers);
              });
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
                    <Icon name="Bag" size="50px" color="warning800" />
                    <Text>My Contracts</Text>
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
                    <Text>My Offers</Text>
                    <Text textSize="title">{offers.length}</Text>
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
                    <Icon name="Card" size="50px" color="warning800" />
                    <Text>Available Balance</Text>
                    <NumberFormat
                      value={wallet}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                      renderText={(value) => (
                        <Text textSize="title">{value}</Text>
                      )}
                    />
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
                <Link href="/store/products/create">
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

      <Modal
        isOpen={noName}
        align={{
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
          xl: "center",
        }}
        rounded="md"
        maxW="25rem"
        p="20px"
        bg="#fff"
        overflow="hidden"
      >
        <Text
          textAlign="center"
          tag="header"
          textSize="title"
          m={{ b: "2rem" }}
        >
          Complete your profile
        </Text>

        <Div d="flex" justify="flex-end">
          <Link href="/profile/settings">
            <Button bg="info700">Continue</Button>
          </Link>
        </Div>
      </Modal>
    </ProfileLayout>
  );
}
