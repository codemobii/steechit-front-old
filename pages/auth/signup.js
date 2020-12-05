import { Button, Icon, Input, Notification, Text } from "atomize";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterRequest } from "../../services/register_action";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_password, set_Password] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [error_bo, setError_bo] = useState(false);
  const [error_au, setError_au] = useState(false);

  const dispatch = useDispatch();
  const aUser = useSelector((state) => state.newUser);

  var handleEmail = (e) => {
    setEmail(e.target.value);
  };
  var handlePassword = (e) => {
    setPassword(e.target.value);
  };
  var handle_Password = (e) => {
    set_Password(e.target.value);
  };
  var handlePhone = (e) => {
    setPhone(e.target.value);
  };

  if (aUser.is_created === true) {
    router.push("/auth/verify");
  }

  const handleSubmit = async (evt) => {
    setLoading(true);

    evt.preventDefault();

    const regex = /^[0][7-9][0-1][0-9]{4}[0-9]{4}$/g;
    const regexMail = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}$/g;
    if (!regex.test(phone)) {
      setError("Enter correct phone number.");
      setError_bo(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    if (!regexMail.test(email)) {
      setError("Enter correct email address.");
      setError_bo(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    if (password.length < 4) {
      setError("Password should be more than 4 characters.");
      setError_bo(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    if (password === _password && password.length > 4) {
      dispatch(RegisterRequest({ email, password, phone }));
      if (!aUser.success) {
        setError_au(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setError("Password not match.");
      setError_bo(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text
          textAlign="center"
          tag="header"
          textSize="title"
          fontFamily="primary"
          m={{ b: "2rem" }}
        >
          Sign up
        </Text>
        <Input
          placeholder="Email address"
          m={{ b: "1rem" }}
          fontFamily="primary"
          value={email}
          onChange={handleEmail}
        />
        <Input
          placeholder="Phone number"
          m={{ b: "1rem" }}
          fontFamily="primary"
          value={phone}
          onChange={handlePhone}
        />
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          m={{ b: "1rem" }}
          value={password}
          onChange={handlePassword}
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
          placeholder="Re-enter password"
          type={showPassword ? "text" : "password"}
          value={_password}
          onChange={handle_Password}
          m={{ b: "2rem" }}
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
          {loading ? "Loading" : "Sign up"}
        </Button>
      </form>
      <Notification
        bg="danger700"
        isOpen={error_bo}
        onClose={() => setError_bo(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {error}
      </Notification>
      <Notification
        bg="danger700"
        isOpen={error_au}
        onClose={() => setError_au(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {aUser.message}
      </Notification>
    </>
  );
}
