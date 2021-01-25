import { Div } from "atomize";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import store from "../../services/store";
import Layout from "../layouts/layout";
import StoreSidebar from "../layouts/store_sidebar";
import { useSelector } from "react-redux";
import Axios from "axios";
import StoreMobileMenu from "./store_mobile_menu";

export default function StoreLayout({
  children,
  title = "My Store | Steechit",
  isSidebar = true,
}) {
  // Getting auth state and user data for structuring the navbar
  const token = store.getState().auth.token;
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const id = auth._id;
  const [storeName, setStoreName] = useState("");
  const [storeImg, setStoreImg] = useState("");
  const [loading, setLoading] = useState(true);

  if (!token) {
    router.replace("/?auth=true");
  }

  useEffect(() => {
    const getStore = async () => {
      await Axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}stores/`,
        params: {
          user: id,
        },
      })
        .then(async (store_res) => {
          if (store_res.data.length === 0) {
            router.replace("/store/start");
          } else {
            setStoreName(store_res.data[0].storeName);
            setStoreImg(store_res.data[0].storeLogo.url);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    getStore();
  }, []);

  return (
    <>
      <Layout title={title}>
        <Div
          w="100%"
          d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
          align="flex-start"
          justify="space-between"
          m={{ t: "30px" }}
        >
          {isSidebar && (
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
              <StoreSidebar
                loading={loading}
                storeName={storeName}
                storeImg={storeImg}
              />
            </Div>
          )}
          <Div
            bg="#fff"
            shadow="3"
            rounded="md"
            w={{
              xs: "100%",
              sm: "100%",
              md: isSidebar ? "63%" : "100%",
              lg: isSidebar ? "63%" : "100%",
              xl: isSidebar ? "63%" : "100%",
            }}
          >
            {children}
          </Div>
        </Div>
        <StoreMobileMenu />
      </Layout>
    </>
  );
}
