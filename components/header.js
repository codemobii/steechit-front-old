import { Anchor, Button, Container, Div, Icon, Image, Text } from "atomize";
import React from "react";
import store from "../services/store";
import AuthBox from "./auth_box";
import MobileMenu from "./mobile_menu";

export default function Header({ fixed, onOpen }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  const token = store.getState().auth.token;

  return (
    <>
      <Div
        bg="black800"
        pos={fixed ? "fixed" : null}
        top="0"
        left="0"
        w="100%"
        zIndex="100"
      >
        <Container>
          <Div
            d="flex"
            align="center"
            h={{
              xs: "70px",
              sm: "70px",
              md: "75px",
              lg: "90px",
              xl: "90px",
            }}
            justify="space-between"
          >
            <Icon
              d={{
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              }}
              onClick={() => setOpenMenu(true)}
              cursor="pointer"
              name="Menu"
              color="gray100"
              size="32px"
            />
            <Anchor
              d={{
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              }}
              href="/"
            >
              <Image
                src="https://www.openphone.co/images/open-phone.svg"
                w={{
                  xs: "150px",
                  sm: "150px",
                  md: "200px",
                  lg: "200px",
                  xl: "200px",
                }}
              />
            </Anchor>
            <Div
              d={{ xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }}
              align="center"
            >
              <Anchor m={{ l: "-0.3rem" }} href="/">
                <Image
                  src="https://www.openphone.co/images/open-phone.svg"
                  w="200px"
                />
              </Anchor>
              <Anchor href="/" d="block" textColor="#fff" m={{ l: "3rem" }}>
                Tailors
              </Anchor>
              <Anchor d="block" textColor="#fff" m={{ l: "2rem" }}>
                Fabric Stores
              </Anchor>
              <Anchor d="block" textColor="#fff" m={{ l: "2rem" }}>
                Logistics
              </Anchor>
            </Div>

            {token ? (
              <Button
                onClick={() => {
                  window.location.href = "/profile";
                }}
                h="2.3rem"
                w="2.3rem"
                bg="info700"
                hoverBg="info600"
                rounded="circle"
                shadow="2"
                d={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                }}
                hoverShadow="4"
              >
                <Icon name="UserSolid" size="24px" color="white" />
              </Button>
            ) : (
              <Button
                d={{
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                }}
                onClick={onOpen}
                textColor="#fff"
                bg="transparent"
              >
                Sign in
              </Button>
            )}
            {token ? (
              <Div
                d={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                align="center"
              >
                <Button
                  onClick={() => {
                    window.location.href = "/profile";
                  }}
                  h="2.3rem"
                  w="2.3rem"
                  bg="info700"
                  hoverBg="info600"
                  rounded="circle"
                  m={{ r: "1rem" }}
                  shadow="2"
                  hoverShadow="4"
                  d="flex"
                >
                  <Icon name="UserSolid" size="24px" color="white" />
                </Button>
                <Button
                  bg="warning700"
                  hoverBg="warning800"
                  rounded="circle"
                  p={{ r: "2rem", l: "2rem" }}
                  shadow="3"
                  hoverShadow="4"
                >
                  SELL
                </Button>
              </Div>
            ) : (
              <Div
                d={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                align="center"
              >
                <Anchor d="block" textColor="#fff" m={{ l: "2rem" }}>
                  About
                </Anchor>
                <Anchor d="block" textColor="#fff" m={{ l: "2rem" }}>
                  Help
                </Anchor>
                <Button
                  prefix={
                    <Icon
                      name="UserSolid"
                      size="16px"
                      color="white"
                      m={{ r: "1rem" }}
                    />
                  }
                  onClick={onOpen}
                  bg="warning700"
                  hoverBg="warning800"
                  rounded="circle"
                  p={{ r: "1.5rem", l: "1rem" }}
                  shadow="3"
                  hoverShadow="4"
                  m={{ l: "2rem" }}
                >
                  Signin / Signup
                </Button>
              </Div>
            )}
          </Div>
        </Container>
      </Div>
      <MobileMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
