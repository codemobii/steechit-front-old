import { Button, Div, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../app-components/profile_loader";
import EmptyList from "../../app-components/empty_list";
import ProfileLayout from "../../app-components/profile_layout";
import FundWallet from "../../app-components/fund_wallet";
import { useRouter } from "next/router";

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
          console.log(res.data);
          setWallet(res.data[0].bal);
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
            url: `${process.env.apiUrl}contract/`,
            data: {
              user: id,
            },
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
                <Text tag="h3" textSize="heading">
                  ₦{wallet}
                </Text>
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
                  Fund
                </Button>
                <Button
                  w="100%"
                  textColor="black700"
                  hoverTextColor="black900"
                  bg="transparent"
                  hoverBg="info200"
                  border="1px solid"
                  borderColor="black700"
                  hoverBorderColor="black900"
                >
                  Withdraw
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
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr>
                      <td data-label="Image">
                        <Image
                          w="60px"
                          h="60px"
                          objectFit="cover"
                          src="http://localhost:3001/assets/img/user/user-2.jpg"
                        />
                      </td>
                      <td data-label="Name">The title of the fabric is this</td>
                      <td data-label="Price">$2,443</td>
                      <td data-label="Action">
                        <Tag variantColor="purple">Pending</Tag>
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
