import { Col, Div, Icon, Notification, Row, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import store from "../../services/store";
import ProfileLoader from "../../app-components/profile_loader";
import ProfileLayout from "../../app-components/profile_layout";
import AddMeasurement from "../../app-components/add_measurement";
import { useRouter } from "next/router";

export default function Measurement() {
  const [loading, setLoading] = useState(true);
  const [measurement, setMeasurement] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const getMeasurement = async () => {
    await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "GET",
      url: `${process.env.apiUrl}measurements`,
      data: {
        user: id,
      },
    })
      .then(async (res) => {
        const getGender = await axios({
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
          proxy: {
            host: "104.236.174.88",
            port: 3128,
          },
          method: "GET",
          url: `${process.env.apiUrl}menMeasurement/`,
          params: {
            user: id,
          },
        });
        setMeasurement(getGender.data);
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMeasurement();
  }, []);

  return (
    <>
      <ProfileLayout title="Measurement | Steechit">
        <Div
          p="20px"
          style={{ borderBottom: "1px solid #ccc" }}
          d="flex"
          justify="space-between"
          align="center"
        >
          <Text tag="header" textSize="title">
            My Measurement
          </Text>
        </Div>
        <Div w="100%" p="20px">
          {loading ? (
            <ProfileLoader />
          ) : (
            <Row>
              <Col
                size={{
                  xs: "12",
                  sm: "12",
                  md: "6",
                  lg: "6",
                  xl: "6",
                }}
              >
                <Div
                  h="300px"
                  w="100%"
                  bg="success200"
                  rounded="lg"
                  d="flex"
                  align="center"
                  justify="center"
                  textAlign="center"
                  cursor="pointer"
                  onClick={() =>
                    setShowModal(measurement.length !== "" ? true : false)
                  }
                  m={{
                    b: { xs: "20px", sm: "20px", md: "0", lg: "0", xl: "0" },
                  }}
                >
                  <Div>
                    <Icon name="Draft" size="70px" color="success800" />
                    <Text tag="header" textSize="subheader">
                      Add Your Measurement
                    </Text>
                  </Div>
                </Div>
              </Col>
              <Col
                size={{
                  xs: "12",
                  sm: "12",
                  md: "6",
                  lg: "6",
                  xl: "6",
                }}
              >
                <Div
                  h="300px"
                  w="100%"
                  bg="danger200"
                  rounded="lg"
                  d="flex"
                  align="center"
                  justify="center"
                  textAlign="center"
                  cursor="pointer"
                >
                  <Div>
                    <Icon name="Link" size="70px" color="danger800" />
                    <Text tag="header" textSize="subheader">
                      Share your measurement
                    </Text>
                  </Div>
                </Div>
              </Col>
            </Row>
          )}
        </Div>
      </ProfileLayout>
      <AddMeasurement isOpen={showModal} onClose={() => setShowModal(false)} />
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
        Sorry you already have a measurement
      </Notification>
    </>
  );
}
