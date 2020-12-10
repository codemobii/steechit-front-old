import { Button, Col, Div, Image, Row, Text } from "atomize";
import Link from "next/link";
import React from "react";
import Layout from "../app-components/layout";

export default function Fabrics({ products }) {
  const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <Layout title="Tailors | Steechit">
      <Row>
        {products.length !== 0
          ? products.map((p) => (
              <Col
                size={{
                  xs: "12",
                  sm: "12",
                  md: "6",
                  lg: "4",
                  xl: "4",
                }}
              >
                <Link href={`/${p.store}?product=${p._id}`}>
                  <Div
                    cursor="pointer"
                    rounded="md"
                    overflow="hidden"
                    m={{ b: "1.5rem" }}
                    bg="#fff"
                    border="1px solid"
                    borderColor="gray300"
                    position="relative"
                    hoverShadow="5"
                    transition="all 0.4s ease-in-out"
                  >
                    <Image
                      src={p.productPictures[0].url}
                      w="100%"
                      h="150px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <Div p="20px">
                      <Text tag="header" textSize="title">
                        {p.productName}
                      </Text>
                      <Text m={{ b: "1rem", t: "1rem" }}>
                        {truncate(p.productDescription)}
                      </Text>
                      <Div d="flex" align="center" justify="space-between">
                        <Text textSize="title">
                          ₦{p.availableOptions[0].price}
                          {p.availableOptions[0].percentageDiscount !== 0 ? (
                            <Text
                              textColor="danger500"
                              tag="sup"
                              textSize="subheader"
                            >
                              {p.availableOptions[0].percentageDiscount}%
                            </Text>
                          ) : null}
                        </Text>
                        <Button bg="warning800">Book now</Button>
                      </Div>
                    </Div>
                  </Div>
                </Link>
              </Col>
            ))
          : null}
      </Row>
    </Layout>
  );
}

export async function getStaticProps() {
  const products_res = await fetch(`${process.env.apiUrl}products`);

  const products = await products_res.json();

  return {
    props: {
      products,
    },
  };
}
