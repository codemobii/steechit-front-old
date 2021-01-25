import { Button, Div, Icon, Input, Notification, Text } from "atomize";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout";
import { VerificationRequest } from "../../services/verification_action";
import { useRouter } from "next/router";

export default function Verify() {
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [_token, set_Token] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const aUser = useSelector((state) => state.newUser);
  const verifiedUser = useSelector((state) => state.verificationReducer);

  if (verifiedUser.is_verified === true) {
    router.push("/?auth=true");
  }

  useEffect(() => {
    if (aUser._id === false) {
      setError(true);
    }
  }, []);

  var handleCode = (e) => {
    setCode(e.target.value);
  };
  var handleToken = (e) => {
    setToken(e.target.value);
  };
  var handle_Token = (e) => {
    set_Token(e.target.value);
  };
  // aUser._id

  const handleSubmit = async (evt) => {
    setLoading(true);
    evt.preventDefault();
    await dispatch(
      VerificationRequest({
        id: aUser._id,
        PTN: parseFloat(token),
        code: parseFloat(code),
      })
    );
    setLoading(false);
    setCode("");
    setToken("");
    set_Token("");
  };

  return (
    <>
      {" "}
      <Layout title="Verify | Steechit">
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
              Verification
            </Text>
            <Text tag="label" d="block" m={{ b: "1rem" }}>
              Enter the code sent to your email address
            </Text>
            <Input
              placeholder="Enter 4 digits code sent to you"
              m={{ b: "1rem" }}
              value={code}
              onChange={handleCode}
            />
            <Input
              placeholder="Pin"
              type={showPassword ? "text" : "password"}
              m={{ b: "1rem" }}
              value={token}
              onChange={handleToken}
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
            <Input
              placeholder="Re-enter pin"
              m={{ b: "2rem" }}
              value={_token}
              onChange={handle_Token}
              type={showPassword ? "text" : "password"}
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
              {loading ? "Loading" : "Verify"}
            </Button>
          </form>
        </Div>
      </Layout>
      <Notification
        bg="danger700"
        isOpen={error}
        onClose={() => {
          setTimeout(() => {
            setError(false);
          }, 2000);
        }}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        Session have expired, use forgotten password to complete registration.
      </Notification>
    </>
  );
}
