import React, { Component } from "react";
import { Button, Col, Div, Dropdown, Icon, Image, Row, Text } from "atomize";
import Link from "next/link";
import Layout from "../app-components/layout";
import Axios from "axios";

export default class Fabrics extends Component {
  constructor(props) {
    super(props);
    this.category = "";
    this.gender = "Both";
    this.category_name = "All category";
    this.selected_state = "";
    this.state = {
      products: this.props.products,
      categories: this.props.initial_categories,
      active_filter: "",
      loading: false,
    };
  }

  truncate = (str) => {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
  };

  getTailors = async () => {
    this.setState({ loading: true });
    await Axios({
      method: "GET",
      url: `${process.env.apiUrl}products/`,
      params: this.category !== "" ? { productCategory: this.category } : null,
    })
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { products, categories, active_filter, loading } = this.state;

    return (
      <Layout title="Fabrics | Steechit">
        <Div
          d="flex"
          align="center"
          m={{ b: "2rem" }}
          style={{ overflowY: "hidden" }}
        >
          <Button
            m={{ r: "1rem" }}
            rounded="lg"
            bg="#fff"
            textColor="black800"
            suffix={
              loading && this.category === "" ? (
                <Icon
                  name="Loading"
                  size="16px"
                  color="black800"
                  m={{ l: "1rem" }}
                />
              ) : null
            }
            onClick={() => {
              this.category = "";
              this.category_name = "All category";
              this.setState({ active_filter: "" });
              this.getTailors();
            }}
          >
            All states
          </Button>
          {categories.map((c) => (
            <Button
              m={{ r: "1rem" }}
              rounded="lg"
              bg="#fff"
              textColor="black800"
              suffix={
                loading && this.category_name === c.name ? (
                  <Icon
                    name="Loading"
                    size="16px"
                    color="black800"
                    m={{ l: "1rem" }}
                  />
                ) : null
              }
              onClick={() => {
                this.category = c._id;
                this.category_name = c.name;
                this.setState({ active_filter: "" });
                this.getTailors();
              }}
            >
              {c.name}
            </Button>
          ))}
        </Div>

        <Row>
          {products.length !== 0
            ? products.map((p) => (
                <Col
                  size={{
                    xs: "6",
                    sm: "6",
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
                        h={{
                          xs: "120px",
                          sm: "120px",
                          md: "200px",
                          lg: "250px",
                          xl: "250px",
                        }}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <Div p="10px">
                        <Text
                          tag="header"
                          textSize={{
                            xs: "subheader",
                            sm: "subheader",
                            md: "subheader",
                            lg: "title",
                            xl: "title",
                          }}
                        >
                          {p.productName}
                        </Text>
                        <Text
                          textSize={{
                            xs: "subheader",
                            sm: "subheader",
                            md: "subheader",
                            lg: "title",
                            xl: "title",
                          }}
                        >
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
                        <Text
                          m={{ b: "1rem", t: "1rem" }}
                          d={{
                            xs: "none",
                            sm: "none",
                            md: "block",
                            lg: "block",
                            xl: "block",
                          }}
                        >
                          {this.truncate(p.productDescription)}
                        </Text>
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
}

export async function getStaticProps() {
  const products_res = await fetch(`${process.env.apiUrl}products`);
  const categories_res = await fetch(`${process.env.apiUrl}states/`);

  const products = await products_res.json();
  const initial_categories = await categories_res.json();

  return {
    props: {
      products,
      initial_categories,
    },
  };
}
