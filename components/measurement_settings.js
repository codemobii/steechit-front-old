import { Col, Div, Icon, Notification, Row, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import store from "../services/store";
import ProfileLoader from "./parts/profile_loader";
import AddMeasurement from "./forms/add_measurement";
import { useRouter } from "next/router";
import EditMeasurementModal from "./modals/edit_measurement_modal";

export default function Measurement() {
  const [loading, setLoading] = useState(true);
  const [measurement, setMeasurement] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [noMeasurement, setNoMeasurement] = useState(false);
  const [error, setError] = useState(false);
  const [editMeasurementModal, setEditMeasurementModal] = useState(false);
  const [gender, setGender] = useState("");
  const [measurement_id, setMeasurement_id] = useState("");

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
      params: {
        user: id,
      },
    })
      .then(async (res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          setNoMeasurement(true);
        } else {
          setGender(res.data[0].gender);
          if (res.data[0].gender === "M") {
            const getMaleMeasurement = await axios({
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
            setMeasurement(getMaleMeasurement.data);
            setMeasurement_id(getMaleMeasurement.data._id);
          } else {
            const getFemaleMeasurement = await axios({
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              proxy: {
                host: "104.236.174.88",
                port: 3128,
              },
              method: "GET",
              url: `${process.env.apiUrl}womenMeasurement/`,
              params: {
                user: id,
              },
            });
            setMeasurement(getFemaleMeasurement.data);
            setMeasurement_id(getFemaleMeasurement.data._id);
          }
        }
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
      <Div w="100%">
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
                onClick={() => {
                  if (!noMeasurement) {
                    setEditMeasurementModal(true);
                  } else {
                    setShowModal(true);
                  }
                }}
                m={{
                  b: { xs: "20px", sm: "20px", md: "0", lg: "0", xl: "0" },
                }}
              >
                <Div>
                  <Icon name="Draft" size="70px" color="success800" />
                  <Text tag="header" textSize="subheader">
                    {!noMeasurement
                      ? "Add Your Measurement"
                      : "Review Your Measurement"}
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
                onClick={() =>
                  window.open(`/measurement/${measurement_id}`, "_blank")
                }
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
      <AddMeasurement isOpen={showModal} onClose={() => setShowModal(false)} />
      <EditMeasurementModal
        isOpen={editMeasurementModal}
        onClose={() => {
          setEditMeasurementModal(false);
          getMeasurement();
        }}
        gender={gender}
        measurement={measurement}
      />
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
        You don't have a measurement to share
      </Notification>
    </>
  );
}
