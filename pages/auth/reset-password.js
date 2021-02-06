import { Button, Div, Icon, Input, Notification, Text } from "atomize";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/layouts/layout";
import { ResetPasswordRequest } from "../../services/reset_password_action";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const resetPassword = useSelector((state) => state.resetPassword);

  if (resetPassword.success === true) {
    router.push("/?auth=true");
  }

  var handleCode = (e) => {
    setCode(e.target.value);
  };
  var handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    await dispatch(ResetPasswordRequest({ code, password }));
    resetPassword.success === false ? setError(true) : setError(false);
    setLoading(false);
  };

  return (
    <>
      <Layout title="Reset password | Steechit">
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
              Reset password
            </Text>
            <Text tag="label" d="block" m={{ b: "1rem" }}>
              Enter the code sent to your mobile phone
            </Text>
            <Input
              placeholder="Enter 4 digits code sent to you"
              value={code}
              onChange={handleCode}
              type="number"
              m={{ b: "1rem" }}
            />
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePassword}
              m={{ b: "2rem" }}
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                  type="button"
                >
                  <Icon
                    name={showPassword ? "EyeSolid" : "Eye"}
                    color={showPassword ? "danger800" : "success800"}
                    size="16px"
                  />
                </Button>
              }
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
              {loading ? "Loading" : "Reset password"}
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
        {resetPassword.message}
      </Notification>
    </>
  );
}
