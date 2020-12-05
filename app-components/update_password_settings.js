import {
  Button,
  Col,
  Icon,
  Input,
  Label,
  Notification,
  Row,
  Text,
} from "atomize";
import axios from "axios";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../services/store";

export default function UpdatePasswordSettings() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChecked, setPasswordChecked] = useState(false);

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  let handleConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  let handleCheckPassword = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordChecked(true);
    } else if (newPassword === confirmNewPassword) {
      setPasswordChecked(false);
    } else if (confirmNewPassword === "") {
      setPasswordChecked(false);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password === newPassword) {
      setLoading(true);
      try {
        const res = await axios({
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
          proxy: {
            host: "104.236.174.88",
            port: 3128,
          },
          method: "PUT",
          url: `${process.env.apiUrl}users/${id}`,
          data: {
            password: newPassword,
          },
        });
        setLoading(false);

        setMessage("Updated successfully");
        setShow(true);
        console.log(res);
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        console.log(e);

        setMessage(msg);
        setShow(true);
        setLoading(false);
      }
    } else {
      setMessage("Password incorrect");
      setShow(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              Current password
              <Input
                placeholder="Current password"
                name={password}
                onChange={handlePassword}
                type="password"
              />
              {passwordChecked === true ? (
                <Text textColor="danger700" tag="label">
                  Password not match
                </Text>
              ) : null}
            </Label>
          </Col>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              New password
              <Input
                placeholder="New password"
                name={newPassword}
                onChange={handleNewPassword}
                type="password"
              />
            </Label>
          </Col>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              Confirm password
              <Input
                placeholder="Confirm password"
                name={confirmNewPassword}
                onChange={handleConfirmNewPassword}
                onKeyUp={handleCheckPassword}
                type="password"
              />
            </Label>
          </Col>
        </Row>
        <Button
          fontFamily="primary"
          bg="warning700"
          justify="center"
          m={{ t: "1rem" }}
          prefix={
            loading ? (
              <Icon
                name="Loading3"
                size="18px"
                color="white"
                m={{ r: "0.5rem" }}
              />
            ) : null
          }
        >
          {loading ? "Saving" : "Save changes"}
        </Button>
      </form>
      <Notification
        bg="warning700"
        isOpen={show}
        onClose={() => setShow(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {message}
      </Notification>
    </>
  );
}
