import React, { Component } from "react";
import {
  Button,
  Col,
  Div,
  Icon,
  Row,
  Text,
  Modal,
  Label,
  Radiobox,
} from "atomize";
import Link from "next/link";
import Layout from "../components/layout";
import MapModal from "../components/mobile_map_modal";
import MapView from "../components/map_view";
import store from "../services/store";
import Axios from "axios";
import Image from "next/image";
import EmptyList from "../components/empty_list";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.category = "";
    this.gender = "Both";
    this.category_name = "All category";
    this.state = {
      openMap: false,
      position: [],
      filter: false,
      loading: false,
      tailors: this.props.initial_tailors,
      categories: this.props.initial_categories,
    };
  }

  //

  getTailors = async () => {
    const token = store.getState().auth.token;
    this.setState({ loading: true });
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
      url: `https://steechit-api.herokuapp.com/stores/`,
      params:
        this.category !== ""
          ? { productCategories: { $oid: this.category } }
          : null,
    })
      .then((res) => {
        this.setState({ tailors: res.data });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((current) => {
        const currentPosition = {
          lat: current.coords.latitude,
          lng: current.coords.longitude,
        };
        this.setState({ position: currentPosition });
      });
    }
  };

  // Updating states with will mount

  UNSAFE_componentWillMount() {
    this.getUserLocation();
  }

  // On load

  componentDidMount() {
    this.getUserLocation();
    console.log(this.props.initial_tailors);
  }

  render() {
    const {
      categories,
      tailors,
      loading,
      position,
      filter,
      openMap,
    } = this.state;
    return (
      <>
        <Layout fixed={true}>
          <Div m={{ r: { xs: "0", sm: "0", md: "0", lg: "45%", xl: "45%" } }}>
            <Div
              d="flex"
              justify="space-between"
              m={{ b: "1rem" }}
              p={{ b: "0.5rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray500"
              align="center"
            >
              <Button
                p={{ x: "0" }}
                bg="transparent"
                textColor="black800"
                onClick={() => this.setState({ filter: true })}
                prefix={
                  <Icon name="Settings" size="20px" m={{ r: "0.5rem" }} />
                }
                align="center"
              >
                Filter{" "}
                <Label
                  d={{
                    xs: "none",
                    sm: "none",
                    md: "inline-block",
                    lg: "inline-block",
                    xl: "inline-block",
                  }}
                  m={{ l: "5px" }}
                >
                  (Category: {this.category_name})
                </Label>
              </Button>
              <Button
                p={{ x: "0" }}
                bg="transparent"
                textColor="black800"
                onClick={() => this.setState({ openMap: true })}
                prefix={
                  <Icon name="Location" size="20px" m={{ r: "0.5rem" }} />
                }
                align="center"
              >
                Map View
              </Button>
            </Div>
            <Row>
              {tailors.length === 0 ? (
                loading ? null : (
                  <EmptyList />
                )
              ) : (
                tailors.map((t) => (
                  <Col
                    size={{
                      xs: "12",
                      sm: "6",
                      md: "6",
                      lg: "6",
                      xl: "6",
                    }}
                  >
                    <Link href={`/${t._id}`}>
                      <Div
                        rounded="md"
                        overflow="hidden"
                        m={{ b: "2rem" }}
                        bg="#fff"
                        border="1px solid"
                        borderColor="gray300"
                        cursor="pointer"
                        hoverShadow="5"
                        transition="all 0.4s ease-in-out"
                      >
                        <Div
                          w="100%"
                          h={{
                            xs: "150px",
                            sm: "150px",
                            md: "150px",
                            lg: "180px",
                            xl: "180px",
                          }}
                          bg="#fff"
                          pos="relative"
                        >
                          <Image
                            alt={t.storeName}
                            src={t.storeBanner.url}
                            className="store_image"
                            layout="fill"
                          />
                          <Div
                            bg="rgba(0,0,0,0.5)"
                            pos="absolute"
                            top="0"
                            left="0"
                            w="100%"
                            h="100%"
                          />
                          <Div pos="absolute" bottom="0" left="0" p="15px">
                            <Text textSize="subheader" textColor="#fff">
                              {t.city}
                            </Text>
                            <Text textSize="title" textColor="#fff">
                              {t.storeName}
                            </Text>
                          </Div>
                        </Div>
                        <Div p={{ t: "1rem", b: "1rem", l: "15px", r: "15px" }}>
                          <Label d="flex" textSize="paragraph" align="center">
                            <Icon
                              name="StarSolid"
                              color="warning800"
                              size="20px"
                              m={{ t: "-3px", r: "6px", l: "-3px" }}
                            />
                            4.21{" "}
                            <Text m={{ l: "5px" }} textColor="black300">
                              (129)
                            </Text>
                            <Text
                              m={{ l: "6px", t: "-5px" }}
                              textColor="black300"
                            >
                              .
                            </Text>
                            <Text m={{ l: "6px" }} textColor="black300">
                              Lagos, Nigeria
                            </Text>
                          </Label>
                          <Text tag="label" fontFamily="primary">
                            {t.address}
                          </Text>
                        </Div>
                      </Div>
                    </Link>
                  </Col>
                ))
              )}
            </Row>
            <Div d="flex" justify="center">
              <Button
                prefix={
                  <Icon
                    name={loading ? "Loading3" : "Refresh"}
                    size="24px"
                    color="white"
                    m={{ r: "0.5rem" }}
                  />
                }
                bg="warning700"
                hoverBg="warning800"
                rounded="circle"
                p={{ r: "1.5rem", l: "1rem" }}
                border="1px solid"
                borderColor="gray300"
                hoverShadow="4"
                m={{ t: "2rem" }}
              >
                {loading ? "Loading" : "Load more"}
              </Button>
            </Div>
          </Div>
        </Layout>
        <MapModal
          isOpen={openMap}
          onClose={() => this.setState({ openMap: false })}
          position={position}
          tailors={tailors}
        />
        <Div
          pos="fixed"
          right="0"
          top="90px"
          w="45%"
          className="map"
          bg="#fff"
          d={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <MapView position={position} tailors={tailors} />
        </Div>
        <Modal
          isOpen={filter}
          onClose={() => this.setState({ filter: false })}
          rounded="md"
          maxW="20rem"
          bg="#fff"
          p="20px"
          overflow="hidden"
        >
          <Icon
            name="Cross"
            pos="absolute"
            top="1rem"
            right="1rem"
            size="32px"
            onClick={() => this.setState({ filter: false })}
            cursor="pointer"
          />
          <Div>
            <Text
              textAlign="center"
              tag="header"
              textSize="title"
              fontFamily="primary"
              m={{ b: "2rem" }}
            >
              FILTER RESULT
            </Text>
            <Div m={{ t: "1rem" }}>
              <Text tag="label" textColor="black200" fontFamily="primary">
                Categories
              </Text>
              <Label align="center" textWeight="600" m={{ t: "1rem" }}>
                <Radiobox
                  onChange={() => {
                    this.category = "";
                    this.category_name = "All category";
                    this.setState({ tailors: [], filter: false });
                    this.getTailors();
                  }}
                  checked={this.category === ""}
                  name="count"
                />
                All tailors
              </Label>
              {categories.map((c) => (
                <Label align="center" textWeight="600" m={{ t: "1rem" }}>
                  <Radiobox
                    onChange={() => {
                      this.category = c._id;
                      this.category_name = c.categoryName;
                      this.setState({ tailors: [], filter: false });
                      this.getTailors();
                    }}
                    checked={this.category === c._id}
                    name="count"
                  />
                  {c.categoryName}
                </Label>
              ))}
            </Div>
            <Div m={{ t: "1rem" }}>
              <Text tag="label" textColor="black200" fontFamily="primary">
                Gender
              </Text>
              <Label align="center" textWeight="600" m={{ t: "1rem" }}>
                <Radiobox
                  onChange={() => {
                    this.gender = "";
                  }}
                  checked={this.gender === ""}
                  name="count"
                />
                Both
              </Label>
              <Label align="center" textWeight="600" m={{ t: "1rem" }}>
                <Radiobox
                  onChange={() => {
                    this.gender = "Female";
                  }}
                  checked={this.gender === "Female"}
                  name="count"
                />
                Female
              </Label>
              <Label align="center" textWeight="600" m={{ t: "1rem" }}>
                <Radiobox
                  onChange={() => {
                    this.gender = "Male";
                  }}
                  checked={this.gender === "Male"}
                  name="count"
                />
                Male
              </Label>
            </Div>
          </Div>
        </Modal>
      </>
    );
  }
}

export async function getStaticProps() {
  const categories_res = await fetch(
    `https://steechit-api.herokuapp.com/categories/`
  );
  const tailors_res = await fetch(`https://steechit-api.herokuapp.com/stores`);

  const initial_tailors = await tailors_res.json();
  const initial_categories = await categories_res.json();

  return {
    props: {
      initial_tailors,
      initial_categories,
    },
  };
}
