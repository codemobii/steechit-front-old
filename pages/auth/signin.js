import {
  Anchor,
  Button,
  Div,
  Icon,
  Input,
  Label,
  Notification,
  Text,
} from "atomize";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { LoginRequest } from "../../services/login_action";
import { useRouter } from "next/router";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  var handleEmail = (e) => {
    setEmail(e.target.value);
  };

  var handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (evt) => {
    setLoading(true);
    evt.preventDefault();
    if (dispatch(LoginRequest({ email, password }))) {
      if (!auth.success) {
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  const router = useRouter();

  if (auth.role === 1) {
    router.push("/profile");
  }
  if (auth.role === 2) {
    router.push("/profile");
  }
  if (auth.role === 3) {
    router.push("/profile");
  }
  if (auth.role === 4) {
    router.push("/profile");
  }

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
          Sign in
        </Text>
        <Input
          placeholder="Email / Phone"
          m={{ b: "1rem" }}
          fontFamily="primary"
          value={email}
          onChange={handleEmail}
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
        <Div m={{ b: "1rem" }} d="flex" align="center" justify="space-between">
          <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            {/**<Checkbox
              onChange={() => setRemember(!remember)}
              checked={remember}
            />
            Remember me */}
          </Label>
          <Anchor m={{ t: "-0.5rem" }} href="/auth/forgot-password">
            Lost password?
          </Anchor>
        </Div>
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
          {loading ? "Loading" : "Sign in"}
        </Button>
      </form>
      <Notification
        bg="info700"
        isOpen={error}
        onClose={() =>
          setTimeout(() => {
            setError(false);
          }, 2000)
        }
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {auth.message}
      </Notification>
    </>
  );
}
