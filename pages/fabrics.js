import React, { Component } from "react";
import {
  Button,
  Col,
  Div,
  Dropdown,
  Icon,
  Image,
  Input,
  Label,
  Radiobox,
  Row,
  Text,
} from "atomize";
import Link from "next/link";
import Layout from "../components/layouts/layout";
import Axios from "axios";
import NumberFormat from "react-number-format";

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
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.getTailors();
  }

  render() {
    const { products, categories, active_filter, loading } = this.state;

    const statesList = (
      <Div p="10px">
        <Label align="center" textWeight="600" m={{ t: "1rem" }}>
          <Radiobox
            onChange={() => {
              this.category = "";
              this.category_name = "";
              this.setState({ active_filter: "" });
              this.getTailors();
            }}
            checked={this.category === ""}
            name="count"
          />
          All states
        </Label>
        {categories.map((c) => (
          <Label align="center" textWeight="600" m={{ t: "1rem" }}>
            <Radiobox
              onChange={() => {
                this.category = c._id;
                this.category_name = c.name;
                this.setState({ active_filter: "" });
                this.getTailors();
              }}
              checked={this.category === c._id}
              name="count"
            />
            {c.name}
          </Label>
        ))}
      </Div>
    );

    return (
      <Layout title="Fabrics | Steechit">
        <Div d="flex" align="center" m={{ y: "2rem" }} w="100%">
          <Row w="100%">
            <Col
              size={{
                xs: "12",
                sm: "12",
                md: "12",
                lg: "4",
                xl: "4",
              }}
            >
              <Input
                p={{ x: "2.5rem" }}
                d={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                }}
                prefix={
                  <Icon
                    name="Search"
                    color="gray800"
                    size="24px"
                    pos="absolute"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                  />
                }
                placeholder="Keyword search . . ."
              />
            </Col>
            <Col
              size={{
                xs: "6",
                sm: "6",
                md: "6",
                lg: "4",
                xl: "4",
              }}
            >
              <Dropdown
                isOpen={active_filter === "states"}
                onClick={() => {
                  if (active_filter !== "states") {
                    this.setState({ active_filter: "states" });
                  } else {
                    this.setState({ active_filter: "" });
                  }
                }}
                menu={statesList}
              >
                {this.category_name == "" ? "All States" : this.category_name}
              </Dropdown>
            </Col>
          </Row>
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
                  <Link href={`/product?p_id=${p._id}&s_id=${p.store}`}>
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
                        src={
                          p.productPictures.length !== 0
                            ? p.productPictures[0].url
                            : "ii"
                        }
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

                        {p.fabric.materialPrice && (
                          <NumberFormat
                            value={p.fabric.materialPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => (
                              <Text textSize="subheading">
                                {value} (Per yard)
                              </Text>
                            )}
                          />
                        )}

                        {p.tailor.materialPrice && (
                          <NumberFormat
                            value={p.tailor.materialPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => (
                              <Text textSize="subheading">
                                {value} (Per yard)
                              </Text>
                            )}
                          />
                        )}

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
