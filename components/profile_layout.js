import { Div } from "atomize";
import React from "react";
import Layout from "./layout";
import ProfileMobileMenu from "./profile_mobile_menu";
import ProfileSidebar from "./profile_sidebar";

export default function ProfileLayout({
  children,
  title = "My Store | Steechit",
}) {
  return (
    <>
      <Layout title={title}>
        <Div
          w="100%"
          d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
          align="flex-start"
          justify="space-between"
        >
          <Div
            w={{ xs: "100%", sm: "100%", md: "34%", lg: "34%", xl: "34%" }}
            d={{
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            bg="#fff"
            shadow="3"
            rounded="md"
          >
            <ProfileSidebar />
          </Div>
          <Div
            bg="#fff"
            shadow="3"
            rounded="md"
            w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
          >
            {children}
          </Div>
        </Div>
        <ProfileMobileMenu />
      </Layout>
    </>
  );
}
