import { Button, Div, Icon, Input, Notification, Text } from "atomize";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../app-components/layout";
import { ForgotPasswordRequest } from "../../services/forgot_password_action";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  var handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const forgetPassword = useSelector((state) => state.forgetPassword);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    await dispatch(ForgotPasswordRequest({ phone }));
    forgetPassword.success === false ? setError(true) : setError(false);
    setPhone("");
    setLoading(false);

    if (forgetPassword.success === true) {
      router.push("/auth/reset-password");
    }
  };

  return (
    <>
      <Layout title="Forgot password | Steechit">
        <Div
          maxW="30rem"
          bg="#fff"
          shadow="2"
          rounded="md"
          m={{ l: "auto", r: "auto", t: "50px", b: "50px" }}
          p="20px"
        >
          <form onSubmit={handleSubmit}>
            <Text
              textAlign="center"
              tag="header"
              textSize="title"
              fontFamily="primary"
              m={{ b: "2rem" }}
            >
              Forgot password
            </Text>
            <Text tag="label" d="block" m={{ b: "1rem" }}>
              Enter your phone number to reset your password. A password reset
              code will be send to you.
            </Text>
            <Input
              placeholder="Phone number"
              m={{ b: "2rem" }}
              fontFamily="primary"
              type="number"
              value={phone}
              onChange={handlePhone}
            />
            <Button
              w="100%"
              fontFamily="primary"
              bg="warning700"
              justify="center"
              prefix={
                loading ? (
                  <Icon
                    name="Loading3"
                    pos="absolute"
                    top="50%"
                    left="1rem"
                    transform="translateY(-50%)"
                    size="18px"
                    color="white"
                    m={{ r: "0.5rem" }}
                  />
                ) : null
              }
            >
              {loading ? "Loading" : "Send code"}
            </Button>
          </form>
        </Div>
      </Layout>
      <Notification
        bg="danger700"
        isOpen={error}
        onClose={() => setError(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {forgetPassword.message}
      </Notification>
    </>
  );
}
