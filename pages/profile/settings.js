import { Div, Text } from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutMeSettings from "../../app-components/about_me_settings";
import ContactSettings from "../../app-components/contact_settings";
import Layout from "../../app-components/layout";
import ProfileLoader from "../../app-components/profile_loader";
import ProfileMobileMenu from "../../app-components/profile_mobile_menu";
import SettingSidebar from "../../app-components/settings_sidebar";
import StoreSettings from "../../app-components/store_settings";
import UpdatePasswordSettings from "../../app-components/update_password_settings";
import { profileRequest } from "../../services/profile_action";
import store from "../../services/store";

export default function Settings() {
  const router = useRouter();
  const title =
    router.query.q === undefined || router.query.q === "about-me"
      ? "About me"
      : router.query.q === "contact"
      ? "Contact"
      : router.query.q === "update-password"
      ? "Update Password"
      : router.query.q === "store"
      ? "My store"
      : null;

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

  return (
    <>
      <Layout title="Settings | Steechit">
        <Div
          w="100%"
          d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
          align="flex-start"
          justify="space-between"
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
              ) : router.query.q === undefined ||
                router.query.q === "about-me" ? (
                <div id="about-me">
                  <AboutMeSettings user={user} />
                </div>
              ) : router.query.q === "contact" ? (
                <div id="contact">
                  <ContactSettings user={user} />
                </div>
              ) : router.query.q === "update-password" ? (
                <div id="update-password">
                  <UpdatePasswordSettings user={user} />
                </div>
              ) : router.query.q === "store" ? (
                <StoreSettings user={user} />
              ) : null}
            </Div>
          </Div>
        </Div>
        <ProfileMobileMenu />
      </Layout>
    </>
  );
}
