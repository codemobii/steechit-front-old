import { Div, Text } from "atomize";
import Axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutMeSettings from "../../components/about_me_settings";
import ContactSettings from "../../components/contact_settings";
import Layout from "../../components/layout";
import ProfileLoader from "../../components/profile_loader";
import ProfileMobileMenu from "../../components/profile_mobile_menu";
import SettingSidebar from "../../components/settings_sidebar";
import UpdatePasswordSettings from "../../components/update_password_settings";
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
      : null;

  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/?auth=true");
    }
    const getUser = async () => {
      try {
        await Axios({
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
        }).then((res) => {
          setLoading(false);
          console.log(res);
        });
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        setLoading(false);
        console.log(msg);
      }
    };
    dispatch(profileRequest(token, id));
    getUser();
  }, [id, token, user, dispatch]);

  return (
    <>
      <Layout>
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
              ) : null}
            </Div>
          </Div>
        </Div>
        <ProfileMobileMenu />
      </Layout>
    </>
  );
}
