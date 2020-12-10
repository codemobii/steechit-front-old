import { Col, Div, Label, Row, Text } from "atomize";
import Axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyList from "../../app-components/empty_list";
import Layout from "../../app-components/layout";
import MenMeasurement from "../../app-components/men_measurement";
import ProfileLoader from "../../app-components/profile_loader";
import store from "../../services/store";

export default function Measurement() {
  const [measurement, setMeasurement] = useState({});
  const [noMeasurement, setNoMeasurement] = useState(false);
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState("");

  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const router = useRouter();

  const user = router.query.id;

  console.log(user);

  useEffect(() => {
    const getMeasurement = async () => {
      await Axios.get(`${process.env.apiUrl}menMeasurement/${user}`)
        .then(async (res) => {
          setMeasurement(res.data);
          setGender("M");
          await Axios.get(
            `${process.env.apiUrl}measurements/${res.data.measurement}`
          )
            .then((m_res) => {
              console.log(m_res.data);
            })
            .catch((errr) => {
              console.log(errr);
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));

      await Axios.get(`${process.env.apiUrl}womenMeasurement/${user}`)
        .then((res) => {
          setMeasurement(res.data);
          setGender("F");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    };

    getMeasurement();
  }, [user]);

  return (
    <Layout>
      <Div bg="#fff" shadow="3" rounded="md">
        {loading ? (
          <ProfileLoader />
        ) : measurement !== {} ? (
          gender === "M" ? (
            <MenMeasurement measurement={measurement} />
          ) : null
        ) : (
          <EmptyList />
        )}
      </Div>
    </Layout>
  );
}
