import { Button, Col, Icon, Input, Label, Notification, Row } from "atomize";
import Axios from "axios";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../services/store";

export default function ContactSettings({ user }) {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState(user.address);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [phone, setPhone] = useState(user.phone);

  let handleAddress = (e) => {
    setAddress(e.target.value);
  };

  let handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  let handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const res = await Axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "PUT",
        url: `https://steechit-api.herokuapp.com/users/${id}`,
        data: {
          phone: phone,
          contact: {
            address: address,
            zipCode: zipCode,
          },
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
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              Address
              <Input
                placeholder="72 Ostritch Street, Everywhere"
                value={address}
                onChange={handleAddress}
              />
            </Label>
          </Col>
          <Col
            size={{
              xs: "12",
              sm: "12",
              md: "12",
              lg: "6",
              xl: "6",
            }}
          >
            <Label d="block" m={{ b: "1rem" }}>
              Zip Code
              <Input
                placeholder="0100011"
                value={zipCode}
                onChange={handleZipCode}
              />
            </Label>
          </Col>
          <Col
            size={{
              xs: "12",
              sm: "12",
              md: "12",
              lg: "6",
              xl: "6",
            }}
          >
            <Label d="block" m={{ b: "1rem" }}>
              Phone number
              <Input
                placeholder="070********"
                value={phone}
                onChange={handlePhone}
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
