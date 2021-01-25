import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../../services/profile_action";
import store from "../../services/store";
import ProfileLoader from "../parts/profile_loader";

export default function ProfileSidebar() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  //user state
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(profileRequest(token, id));
  }, [id, token]);

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
            <Link href="/profile/contracts">
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
                  <Icon
                    pos="absolute"
                    right="1.5rem"
                    name="DownArrowCircle"
                    size="24px"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                Contracts
              </Button>
            </Link>
            <Link href="/profile/offers">
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
                  <Icon
                    pos="absolute"
                    right="1.5rem"
                    name="DownArrowCircle"
                    size="24px"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                Offers
              </Button>
            </Link>

            <Link href="/profile/wallet">
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
                suffix={
                  <Icon
                    pos="absolute"
                    right="1.5rem"
                    name="DownArrowCircle"
                    size="24px"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                }
                bg="white"
                textColor="black800"
                textSize="subheader"
                rounded="xs"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                Wallet
              </Button>
            </Link>
            <Link href="/profile/settings?action=about-me">
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
                suffix={
                  <Icon
                    pos="absolute"
                    right="1.5rem"
                    name="DownArrowCircle"
                    size="24px"
                    style={{ transform: "rotate(-90deg)" }}
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
