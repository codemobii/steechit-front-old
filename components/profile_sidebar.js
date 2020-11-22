import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../services/profile_action";
import store from "../services/store";
import ProfileLoader from "./profile_loader";

export default function ProfileSidebar() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  //user state
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = () => {
      dispatch(profileRequest(token, id));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getUser();
  }, [user]);

  return (
    <>
      {loading ? (
        <Div m={{ b: "30px" }}>
          <ProfileLoader />
        </Div>
      ) : (
        <Div>
          <Div d="flex" justify="center" p="30px">
            <Image
              src={user.imageUrl}
              rounded="lg"
              w="130px"
              h="130px"
              style={{
                objectFit: "cover",
                borderRadius: "100%",
              }}
              border="2px solid"
              borderColor="#fff"
            />
          </Div>
          <Text tag="header" textAlign="center" textSize="heading">
            {user.firstName} {user.lastName}
          </Text>
          <Div m={{ t: "20px", b: "20px" }}>
            <Link href="/profile">
              <Button
                w="100%"
                h="65px"
                justify="flex-start"
                align="center"
                prefix={
                  <Icon
                    name="Bag"
                    size="28px"
                    color="black800"
                    m={{ r: "1.5rem" }}
                  />
                }
                suffix={
                  <Tag
                    bg={`danger700`}
                    textColor="white"
                    pos="absolute"
                    right="1.5rem"
                    style={{ fontSize: "14px" }}
                  >
                    10
                  </Tag>
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                Orders
              </Button>
            </Link>
            <Link href="/profile/store">
              <Button
                w="100%"
                h="65px"
                justify="flex-start"
                justify="flex-start"
                align="center"
                prefix={
                  <Icon
                    name="Store"
                    size="28px"
                    color="black800"
                    m={{ r: "1.5rem" }}
                  />
                }
                suffix={
                  <Tag
                    bg={`danger700`}
                    textColor="white"
                    pos="absolute"
                    right="1.5rem"
                    style={{ fontSize: "14px" }}
                  >
                    5
                  </Tag>
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                My store
              </Button>
            </Link>
            <Link href="/profile/wallet">
              <Button
                w="100%"
                h="65px"
                justify="flex-start"
                prefix={
                  <Icon
                    name="Card"
                    size="28px"
                    color="black800"
                    m={{ r: "1.5rem" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                My Balance
              </Button>
            </Link>
            <Link href="/profile/measurement">
              <Button
                w="100%"
                h="65px"
                justify="flex-start"
                prefix={
                  <Icon
                    name="EditSolid"
                    size="28px"
                    color="black800"
                    m={{ r: "1.5rem" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                My Measurement
              </Button>
            </Link>
            <Link href="/profile/settings">
              <Button
                w="100%"
                h="65px"
                justify="flex-start"
                prefix={
                  <Icon
                    name="SettingsSolid"
                    size="28px"
                    color="black800"
                    m={{ r: "1.5rem" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
              >
                Settings
              </Button>
            </Link>
          </Div>
        </Div>
      )}
    </>
  );
}
