import { Anchor, Button, Div, Icon, Modal, Text } from "atomize";
import React, { useState } from "react";
import Signin from "../pages/auth/signin";
import Signup from "../pages/auth/signup";

export default function AuthBox({ isOpen, onClose }) {
  const [sign, setSign] = useState(true);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      align={{
        xs: "flex-start",
        sm: "flex-start",
        md: "flex-start",
        lg: "center",
        xl: "center",
      }}
      rounded="md"
      maxW="50rem"
      p="0rem"
      overflow="hidden"
    >
      <Div d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}>
        <Div
          bg="gray700"
          w={{ xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
          h={{
            xs: "150px",
            sm: "150px",
            md: "35rem",
            lg: "35rem",
            xl: "35rem",
          }}
          bgImg="https://images.unsplash.com/photo-1592547522384-6fe341309909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          bgSize="cover"
          bgPos="center"
        />
        <Div
          w={{ xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
          p="2rem"
        >
          <Button
            rounded="circle"
            bg="#fff"
            onClick={onClose}
            cursor="pointer"
            pos="absolute"
            top="1rem"
            right="1rem"
          >
            <Icon name="Cross" size="32px" />
          </Button>

          {sign ? <Signin /> : <Signup />}

          {sign ? (
            <Text fontFamily="primary" m={{ t: "1.5rem" }}>
              Don't have account?{" "}
              <Anchor
                onClick={(e) => {
                  e.preventDefault();
                  setSign(false);
                }}
              >
                Sign up
              </Anchor>
            </Text>
          ) : (
            <Text fontFamily="primary" m={{ t: "1.5rem" }}>
              Already have account?{" "}
              <Anchor
                onClick={(e) => {
                  e.preventDefault();
                  setSign(true);
                }}
              >
                Sign in
              </Anchor>
            </Text>
          )}
        </Div>
      </Div>
    </Modal>
  );
}
