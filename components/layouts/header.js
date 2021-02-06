import {
  Anchor,
  Button,
  Collapse,
  Container,
  Div,
  Icon,
  Image,
  Input,
} from "atomize";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import store from "../../services/store";
import LightButton from "../buttons/light_button";
import MainButton from "../buttons/main_button";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { LogOutRequest } from "../../services/login_action";
import { useRouter } from "next/router";

export default function Header({ onOpen }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [img, setImg] = useState("");
  const [showList, setShowList] = useState(false);
  const token = store.getState().auth.token;
  const auth = useSelector((state) => state.auth);
  const id = auth._id;

  const dispatch = useDispatch();
  const router = useRouter();
  function LogOutForm() {
    if (dispatch(LogOutRequest({ date: "pen" }))) {
      router.push("/?auth=true");
    }
  }

  useEffect(() => {
    const getUserImg = async () => {
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
        url: `${process.env.apiUrl}users/${id}`,
      })
        .then((res) => {
          setImg(res.data.avatar.url);
          console.log(res);
        })
        .catch(() => {});
    };
    getUserImg();
  }, []);

  return (
    <>
      <Div
        pos="fixed"
        zIndex="100"
        top="0"
        left="0"
        bg="white"
        w="100%"
        shadow="2"
      >
        <Container pos="relative">
          <Div
            w="100%"
            h="60px"
            d="flex"
            p="0"
            justify="space-between"
            align="center"
            pos="relative"
          >
            {/** The logo And rest */}
            <Div d="flex" align="center">
              <Button
                h="32px"
                w="32px"
                bg="transparent"
                hoverBg="gray300"
                rounded="lg"
                m={{ r: "1rem" }}
                d={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                }}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <Icon
                  name={openMenu ? "Cross" : "Menu"}
                  size="32px"
                  color="black"
                />
              </Button>
              <Link href="/">
                <Image
                  w="40px"
                  h="40px"
                  src="https://github.com/ijelechimaobi/steechit-front/blob/main/LOGO%203D%20Icon_3%20PNG.png?raw=true"
                  alt="Steechit - Logo"
                />
              </Link>
              {/** <Input
                m={{ l: "20px" }}
                w="300px"
                p={{ x: "2.5rem" }}
                d={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                }}
                prefix={
                  <Icon
                    name="Search"
                    color="gray800"
                    size="24px"
                    pos="absolute"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                  />
                }
                placeholder="Search tailors, fabric store . . ."
              /> */}

              <Div
                m={{ l: "50px" }}
                d={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                align="center"
              >
                <Link href="/?explore=t">
                  <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
                    Book Tailors
                  </Anchor>
                </Link>
                <Link href="/fabrics">
                  <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
                    Buy Materials
                  </Anchor>
                </Link>
                {/* <Link href="/logistics">
                  <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
                    Logistics
                  </Anchor>
                </Link> */}
                <Link href="/">
                  <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
                    About
                  </Anchor>
                </Link>
              </Div>
            </Div>

            {/** Side buttons */}
            {!token ? (
              <Div d="flex">
                <Div
                  d={{
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  <LightButton title="Sign in" onClick={onOpen} />
                </Div>

                <Div m={{ l: "20px" }}>
                  <MainButton title="Sign up" onClick={onOpen} />
                </Div>
              </Div>
            ) : (
              <Div d="flex" align="center">
                <Div
                  m={{ l: "20px" }}
                  d={{
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  <Link href="/store/products/create">
                    <MainButton title="Create a product" />
                  </Link>
                </Div>
                {/* <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg="transparent"
                  hoverBg="gray300"
                  rounded="circle"
                  m={{ l: "1rem" }}
                >
                  <Icon name="Message" size="24px" color="black" />
                </Button> */}
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg="transparent"
                  hoverBg="gray300"
                  rounded="circle"
                  m={{ l: "1rem" }}
                >
                  <Icon name="Notification" size="24px" color="black" />
                </Button>
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg="transparent"
                  hoverBg="gray300"
                  rounded="circle"
                  m={{ l: "1rem" }}
                  onClick={() => setShowList(!showList)}
                >
                  <Image
                    w="2rem"
                    h="2rem"
                    rounded="circle"
                    style={{ objectFit: "cover" }}
                    bgSize="cover"
                    src={
                      img ||
                      "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
                    }
                  />
                </Button>

                {showList && (
                  <Div
                    pos="absolute"
                    right="0"
                    top="60px"
                    w="200px"
                    bg="#fff"
                    shadow="3"
                    rounded="sm"
                  >
                    <Link href="/profile">
                      <Anchor d="block" p="5px 10px">
                        Profile
                      </Anchor>
                    </Link>
                    <Link href="/store">
                      <Anchor d="block" p="10px">
                        My store
                      </Anchor>
                    </Link>
                    <Anchor
                      onClick={LogOutForm}
                      textColor="danger800"
                      d="block"
                      p="10px"
                    >
                      Signout
                    </Anchor>
                  </Div>
                )}
              </Div>
            )}
          </Div>
        </Container>
        <Div
          d={!openMenu && "none"}
          border={{ t: "1px solid" }}
          borderColor="gray500"
        >
          <Container>
            {/**<Input
              m={{ y: "20px" }}
              w="100%"
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="Search"
                  color="gray800"
                  size="24px"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              placeholder="Search tailors, fabric store . . ."
            /> */}
            <Link href="/?explore=t">
              <Anchor d="block" p={{ y: "10px" }} fontFamily="primary">
                Book Tailors
              </Anchor>
            </Link>
            <Link href="/fabrics">
              <Anchor d="block" p={{ y: "10px" }} fontFamily="primary">
                Buy Materials
              </Anchor>
            </Link>
            {/* <Link href="/logistics">
              <Anchor d="block" p={{ y: "10px" }} fontFamily="primary">
                Logistics
              </Anchor>
            </Link> */}
            <Link href="/">
              <Anchor d="block" p={{ y: "10px" }} fontFamily="primary">
                About
              </Anchor>
            </Link>
          </Container>
        </Div>
      </Div>
    </>
  );
}
