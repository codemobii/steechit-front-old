import { Div, Image, Text } from "atomize";
import Axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthBox from "../components/modals/auth_box";
import MainButton from "../components/buttons/main_button";
import Layout from "../components/layouts/layout";
import OfferWithoutProduct from "../components/offer_without_product";
import OfferWithProduct from "../components/offer_with_product";

export default function Offer() {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [product, setProduct] = useState({});
  const [store_info, setStore_info] = useState({});
  const [loading, setLoading] = useState(true);

  // Getting the url params
  const product_id = router.query.p_id;
  const store_id = router.query.s_id;

  const auth = useSelector((state) => state.auth);
  const id = auth._id;

  useEffect(() => {
    console.log(router);
    const getItems = async () => {
      await Axios.get(`${process.env.apiUrl}stores/${store_id}`)
        .then(async (res) => {
          console.log(res);
          setStore_info(res.data);
          const type = res.data;
          await Axios.get(`${process.env.apiUrl}products/${product_id}`)
            .then(async (res) => {
              setProduct({
                id: res.data._id,
                name: res.data.productName,
                image: res.data.productPictures,
                mPrice:
                  type === "fabric"
                    ? res.data.fabric.materialPrice
                    : res.data.tailor.materialPrice,
                sPrice: res.data.tailor.sowingPrice,
                description: res.data.productDescription,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getItems();
  }, []);

  return (
    <Layout title={`Request an Offer | Steechit`}>
      {id ? (
        product_id === "create_new_product" ? (
          <OfferWithoutProduct store={store_info} store_id={store_id} />
        ) : (
          <OfferWithProduct
            product={product}
            store={store_info}
            product_id={product_id}
            store_id={store_id}
          />
        )
      ) : (
        <Div
          w="100%"
          h="500px"
          d="flex"
          align="center"
          justify="center"
          textAlign="center"
          bg="#fff"
          m={{ t: "30px" }}
          shadow="2"
          p="20px"
        >
          <Div>
            <Image
              src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
              w="300px"
              m={{ b: "20px" }}
            />
            <Text tag="header" textSize="title">
              Please login to view product and request an for an offer.
            </Text>
            <Div d="flex" justify="center" m={{ t: "20px" }}>
              <MainButton
                onClick={() => setOpenLogin(true)}
                title="Sign in now"
              />
            </Div>
          </Div>
        </Div>
      )}
      <AuthBox isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </Layout>
  );
}
