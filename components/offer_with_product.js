import { Div, Image, Input, Label, Text } from "atomize";
import Axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import MainButton from "./buttons/main_button";
import RequestOfferFormFabric from "./request_offer_form_fabric";
import RequestOfferFormTailor from "./request_offer_form_tailor";

export default function OfferWithProduct(props) {
  const router = useRouter();

  // Getting the url params
  const product_id = props.product_id;
  const store_id = props.store_id;

  const product = props.product;
  const store = props.store;

  const type = store.type;

  return (
    <Div
      w="100%"
      d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
      align="flex-start"
      justify="space-between"
      m={{ t: "30px" }}
    >
      <Div w={{ xs: "100%", sm: "100%", md: "34%", lg: "34%", xl: "34%" }}>
        <Div bg="#fff" shadow="3" rounded="md">
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
          <Link href={`/${store_id}`}>
            <Div cursor="pointer" d="flex" align="center" p="10px">
              <Image
                bgSize="cover"
                w="60px"
                h="60px"
                rounded="circle"
                src={store.storeLogo && store.storeLogo.url}
              />
              <Div p="20px">
                <Text textSize="title">{store.storeName}</Text>
                <Text>{store.address}</Text>
              </Div>
            </Div>
          </Link>
        </Div>
        <Div m={{ t: "20px", b: "20px" }} bg="#fff" shadow="3" rounded="md">
          <Div
            w="100%"
            p="15px"
            border={{ b: "1px solid" }}
            borderColor="gray400"
          >
            <Text tag="h1" textSize="subheading">
              Product
            </Text>
          </Div>
          <Image
            bgSize="cover"
            w="100%"
            h="200px"
            src={product.image && product.image[0].url}
          />
          <Div p="20px">
            <Text textSize="title" m={{ b: "10px" }}>
              {product.name}
            </Text>
            <NumberFormat
              value={product.mPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
              renderText={(value) => (
                <Text textSize="subheading">
                  {value} (Material Price Per yard)
                </Text>
              )}
            />
            {store.type === "tailor" && (
              <NumberFormat
                value={product.sPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
                renderText={(value) => (
                  <Text tag="h1" textSize="subheading">
                    {value} (Sowing price)
                  </Text>
                )}
              />
            )}
          </Div>
        </Div>
      </Div>
      <Div
        w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
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
            Make an order
          </Text>
        </Div>
        <Div p="20px">
          {type === "fabric" ? (
            <>
              <RequestOfferFormFabric
                product={product.id}
                product_info={product}
                store={store._id}
              />
            </>
          ) : (
            <RequestOfferFormTailor
              openOffer={true}
              product={product.id}
              productInfo={product}
              store={store._id}
            />
          )}
        </Div>
      </Div>
    </Div>
  );
}
