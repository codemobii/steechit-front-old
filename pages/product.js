import { Div, Icon, Image, Text } from "atomize";
import Axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainButton from "../components/buttons/main_button";
import Layout from "../components/layouts/layout";
import Carousel from "nuka-carousel";
import BlackButton from "../components/buttons/black_button";
import { useSelector } from "react-redux";

export default function ProductItem() {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [store, setStore] = useState({});
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
          setStore(res.data);
          const type = res.data.type;
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
                discount: res.data.availableOptions.percentageDiscount,
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
    <Layout title={`View product | Steechit`}>
      <Div
        w="100%"
        d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
        align="flex-start"
        justify="space-between"
        m={{ t: "30px" }}
      >
        <Div
          w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
          bg="#fff"
          shadow="3"
          rounded="md"
          p="20px"
          m={{ b: "20px" }}
        >
          <Carousel>
            {product.image === undefined
              ? null
              : product.image.map((i) => (
                  <Image
                    src={i.url}
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    objectPosition="center"
                  />
                ))}
          </Carousel>
          <Div
            d="flex"
            align="center"
            m={{ t: "20px" }}
            style={{ flexFlow: "wrap" }}
          >
            <Text tag="header" textSize="heading">
              {product.name}
            </Text>
          </Div>

          {store.type === "tailor" && (
            <Text tag="h3" textSize="subheader">
              Sewing only - ₦{product.sPrice}
            </Text>
          )}
          {store.type === "fabric" ? (
            <Text textSize="subheader" tag="h3" textSize="subheader">
              ₦{product.mPrice} (per yard)
            </Text>
          ) : (
            <Text textSize="subheader" tag="h3" textSize="subheader">
              With fabrics ₦{product.mPrice} (per yard)
            </Text>
          )}
          <Text m={{ t: "20px" }}>{product.description}</Text>
        </Div>
        <Div
          w={{ xs: "100%", sm: "100%", md: "34%", lg: "34%", xl: "34%" }}
          bg="#fff"
          shadow="3"
          rounded="md"
        >
          <Div
            w="100%"
            p="15px"
            border={{ b: "1px solid" }}
            borderColor="gray400"
          >
            <Text tag="h1" textSize="subheading">
              Store
            </Text>
          </Div>
          <Image
            style={{ objectSize: "cover", objectPosition: "center" }}
            w="100%"
            h="200px"
            src={store.storeBanner && store.storeBanner.url}
          />
          <Div p="20px">
            <Text textSize="title" m={{ b: "10px" }}>
              {store.storeName}
            </Text>
            <Text m={{ b: "10px" }}>{store.address}</Text>
            <Div d="flex">
              <Link href={`${store_id}`}>
                <MainButton title="More products" />
              </Link>
              <Link href={`offer?s_id=${store_id}&p_id=${product_id}`}>
                <Div m={{ l: "10px" }}>
                  <BlackButton title="Buy now" />
                </Div>
              </Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
}
