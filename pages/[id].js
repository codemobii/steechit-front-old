import React, { Component } from "react";
import {
  Button,
  Col,
  Div,
  Icon,
  Image,
  Notification,
  Row,
  Text,
} from "atomize";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Layout from "../app-components/layout";
import OrderModal from "../app-components/order_modal";
import store from "../services/store";
import { useRouter } from "next/router";
import EmptyList from "../app-components/empty_list";

const token = store.getState().auth.token;

export default function Fabrics(props) {
  const router = useRouter();
  return <Tailor {...props} router={router} />;
}

export class Tailor extends Component {
  constructor(props) {
    super(props);
    this.id = "";
    this.state = {
      router: props.router.query.product,
      tailor: this.props.tailor,
      products: [],
      loading_pro: false,
      openModal: false,
      product: {},
      loading: false,
      error: false,
      success: false,
      message: "",
      showNumber: false,
    };
  }

  getProduct = async () => {
    this.setState({ loading: true });
    await axios
      .get(`${process.env.apiUrl}products/${this.id}`)
      .then((res) => {
        this.setState({
          product: {
            id: res.data._id,
            name: res.data.productName,
            image: res.data.productPictures,
            price: res.data.availableOptions[0].price,
            discount: res.data.availableOptions[0].percentageDiscount,
          },
        });
        console.log(this.state.product);
      })
      .catch((err) => {
        this.setState({ message: "Oops, something went wrong.", error: true });
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  getProducts = async () => {
    await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "GET",
      url: `https://steechit-api.herokuapp.com/products/`,
      params: {
        store: this.state.tailor._id,
      },
    })
      .then((res) => {
        this.setState({ products: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => this.setState({ loading_pro: false }));
  };

  componentDidMount() {
    console.log(this.state.router);
    if (this.state.router !== undefined) {
      this.id = this.state.router;
      this.setState({ openModal: true });
      this.getProduct();
    }
    this.getProducts();
  }

  truncate = (str) => {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
  };

  render() {
    const {
      tailor,
      products,
      error,
      message,
      product,
      success,
      loading,
      openModal,
      showNumber,
    } = this.state;
    return (
      <>
        <Layout title={`${tailor.storeName} | Steechit`}>
          <Div
            w="100%"
            d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
            align="flex-start"
            justify="space-between"
          >
            <Div
              w={{ xs: "100%", sm: "100%", md: "35%", lg: "35%", xl: "35%" }}
              bg="#fff"
              border="1px solid"
              borderColor="gray300"
              rounded="md"
              p={{ t: "10px", b: "30px", r: "10px", l: "10px" }}
              m={{ b: "2rem" }}
            >
              <Div
                bgImg={tailor.storeBanner.url}
                bgSize="cover"
                bgPos="center"
                w="100%"
                h={{
                  xs: "100px",
                  sm: "100px",
                  md: "100px",
                  lg: "180px",
                  xl: "180px",
                }}
                rounded="md"
                bg="#fff"
              />
              <Div m={{ t: "-70px" }}>
                <Div d="flex" justify="center" m={{ b: "20px" }}>
                  <Image
                    src={tailor.storeLogo.url}
                    rounded="lg"
                    w="130px"
                    h="130px"
                    style={{
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                    border="2px solid"
                    borderColor="#fff"
                    bg="#fff"
                  />
                </Div>
                <Text
                  tag="header"
                  textAlign="center"
                  m={{ b: "20px" }}
                  textSize="heading"
                >
                  {tailor.storeName}
                </Text>
                <Text tag="header" textAlign="center" textSize="section">
                  {tailor.address}
                </Text>
                <Div d="flex" justify="center">
                  <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Div>

                <Div m={{ t: "25px" }} d="flex" justify="center">
                  <Button
                    prefix={
                      <Icon
                        name="MessageSolid"
                        size="24px"
                        color="white"
                        m={{ r: "0.5rem" }}
                      />
                    }
                    bg="danger700"
                    hoverBg="danger800"
                    rounded="circle"
                    p={{ r: "1.5rem", l: "1rem" }}
                    hoverShadow="4"
                    onClick={() => {
                      if (success) {
                        this.setState({ showNumber: !showNumber });
                      } else {
                        this.setState({
                          message:
                            "Please book first, then you can contact tailor to take your measurement and follow up subsequently",
                          error: true,
                        });
                      }
                    }}
                  >
                    {showNumber ? tailor.phone : "Show contact"}
                  </Button>
                </Div>
              </Div>
            </Div>
            <Div
              w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
            >
              <Text textSize="display1" m={{ b: "2rem" }}>
                My works
              </Text>
              <Row>
                {products.length !== 0 ? (
                  products.map((p) =>
                    p.store === tailor._id ? (
                      <Col
                        size={{
                          xs: "6",
                          sm: "6",
                          md: "6",
                          lg: "4",
                          xl: "4",
                        }}
                      >
                        <Div
                          cursor="pointer"
                          onClick={() => {
                            this.id = p._id;
                            this.setState({ openModal: true });
                            this.getProduct();
                          }}
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
                              xs: "130px",
                              sm: "130px",
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
                              {p.availableOptions[0].percentageDiscount !==
                              0 ? (
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
                      </Col>
                    ) : null
                  )
                ) : (
                  <EmptyList />
                )}
              </Row>
            </Div>
          </Div>
        </Layout>

        <OrderModal
          isOpen={openModal}
          onClose={() => {
            this.setState({ openModal: false, product: {} });
          }}
          product={product}
          loading={loading}
          tailor={tailor._id}
          onSuccess={() => this.setState({ success: true })}
        />

        {/** All notifications */}

        <Notification
          bg="warning700"
          isOpen={error}
          onClose={() => {
            setTimeout(() => {
              this.setState({ error: false });
            }, 3000);
          }}
          prefix={
            <Icon
              name="CloseSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          {message}
        </Notification>
      </>
    );
  }
}

export async function getStaticProps({ params }) {
  const id = params.id;

  const tailor_res = await fetch(`${process.env.apiUrl}stores/${id}`);
  const products_res = await fetch(`${process.env.apiUrl}products/`);
  const tailor = await tailor_res.json();
  const products = await products_res.json();

  return {
    props: {
      tailor,
    },
  };
}

export async function getStaticPaths() {
  const tailors_res = await fetch(`${process.env.apiUrl}stores`);

  const tailors = await tailors_res.json();

  return {
    paths: tailors.map((t) => {
      return {
        params: {
          id: t._id,
        },
      };
    }),
    fallback: false,
  };
}
