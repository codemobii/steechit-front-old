import { Div, Text } from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutMeSettings from "../../components/forms/about_me_settings";
import ContactSettings from "../../components/forms/contact_settings";
import Layout from "../../components/layouts/layout";
import ProfileLoader from "../../components/parts/profile_loader";
import ProfileMobileMenu from "../../components/layouts/profile_mobile_menu";
import SettingSidebar from "../../components/layouts/settings_sidebar";
import StoreSettings from "../../components/forms/store_settings";
import UpdatePasswordSettings from "../../components/forms/update_password_settings";
import { profileRequest } from "../../services/profile_action";
import ErrorPage from "next/error";
import store from "../../services/store";
import Measurement from "../../components/measurement_settings";

export default function Settings() {
  const router = useRouter();
  const title =
    router.query.action === undefined || router.query.action === "about-me"
      ? "About me"
      : router.query.action === "contact"
      ? "Contact"
      : router.query.action === "update-password"
      ? "Update Password"
      : router.query.action === "store"
      ? "My store"
      : router.query.action === "measurement"
      ? "Measurement"
      : null;
  console.log(router);

  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios({
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
        }).then((res) => {
          setLoading(false);
        });
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        setLoading(false);
        console.log(msg);
      }
    };
    dispatch(profileRequest(token, id));
    getUser();
  }, [id, token]);

  if (router.query.action === undefined) {
    return <ErrorPage />;
  }

  return (
    <>
      <Layout title="Settings | Steechit">
        <Div
          w="100%"
          d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
          align="flex-start"
          justify="space-between"
          p={{ t: "30px" }}
        >
          <Div
            w={{ xs: "100%", sm: "100%", md: "34%", lg: "34%", xl: "34%" }}
            bg="#fff"
            shadow="3"
            rounded="md"
            p="20px"
            m={{ b: "1rem" }}
          >
            <SettingSidebar />
          </Div>
          <Div
            bg="#fff"
            shadow="3"
            rounded="md"
            w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
          >
            <Div
              p="20px"
              style={{ borderBottom: "1px solid #ccc" }}
              d="flex"
              justify="space-between"
              align="center"
            >
              <Text tag="header" textSize="title">
                {title}
              </Text>
            </Div>
            <Div p="20px">
              {loading ? (
                <ProfileLoader />
              ) : router.query.action === undefined ||
                router.query.action === "about-me" ? (
                <div id="about-me">
                  <AboutMeSettings user={user} />
                </div>
              ) : router.query.action === "contact" ? (
                <div id="contact">
                  <ContactSettings user={user} />
                </div>
              ) : router.query.action === "update-password" ? (
                <div id="update-password">
                  <UpdatePasswordSettings user={user} />
                </div>
              ) : router.query.action === "store" ? (
                <StoreSettings user={user} />
              ) : router.query.action === "measurement" ? (
                <Measurement />
              ) : null}
            </Div>
          </Div>
        </Div>
        <ProfileMobileMenu />
      </Layout>
    </>
  );
}
