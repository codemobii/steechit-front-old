import React, { Component } from "react";
import {
  Col,
  Container,
  Div,
  Icon,
  Image,
  Notification,
  Row,
  Text,
} from "atomize";
import BlackButton from "../components/buttons/black_button";
import MainButton from "../components/buttons/main_button";
import Layout from "../components/layouts/layout";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import OrderModal from "../components/modals/order_modal";
import store from "../services/store";
import { useRouter } from "next/router";
import EmptyList from "../components/parts/empty_list";
import Link from "next/link";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

const token = store.getState().auth.token;

export default function Fabrics(props) {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const id = auth._id;

  return <StoreId {...props} auth={id} router={router} />;
}

export class StoreId extends Component {
  constructor(props) {
    super(props);
    this.id = "";
    this.state = {
      router: props.router.query.product,
      tailor: this.props.tailor,
      user_id: this.props.auth,
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
      url: `${process.env.apiUrl}products/`,
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
        <Layout isWide={true} title={`${tailor.storeName} | Steechit`}>
          <Container
            w={{
              xs: "100%",
              sm: "720px",
              md: "960px",
              lg: "960px",
              xl: "960px",
            }}
            m={{ x: "auto", t: "100px" }}
          >
            <Div
              bg="#fff"
              w="100%"
              rounded="md"
              minH="250px"
              d="flex"
              justify="center"
            >
              <Div m={{ t: "-80px" }} p="20px" textAlign="center">
                <Div
                  rounded="circle"
                  w="130px"
                  h="130px"
                  d="flex"
                  align="center"
                  justify="center"
                  bg="black700"
                  pos="relative"
                  m="auto"
                >
                  <Image
                    src={tailor.storeLogo.url}
                    rounded="circle"
                    w="120px"
                    h="120px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    pos="center"
                  />
                </Div>
                <Text tag="h1" textSize="display1">
                  {tailor.storeName}
                </Text>
                <Text>{tailor.address}</Text>
                <Div m={{ t: "20px" }} d="flex" align="center" justify="center">
                  <Div>
                    <MainButton
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
                      title={showNumber ? tailor.phone : "Show contact"}
                    />
                  </Div>
                  {tailor.type !== "fabric" && (
                    <Div m={{ l: "10px" }}>
                      <Link
                        href={`/offer?s_id=${tailor._id}&p_id=create_new_product`}
                      >
                        <BlackButton title="Request an offer" />
                      </Link>
                    </Div>
                  )}
                </Div>
              </Div>
            </Div>

            <Image
              src={tailor.storeBanner.url}
              w="100%"
              bg="black700"
              h="350px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              m={{ t: "20px" }}
              rounded="md"
            />

            {/* About */}

            {tailor.description !== undefined && (
              <Div m={{ y: "20px" }} w="100%" rounded="md" bg="#fff">
                <Div
                  w="100%"
                  p="20px"
                  border={{ b: "1px solid" }}
                  borderColor="gray400"
                >
                  <Text tag="h1" textSize="title">
                    About {tailor.storeName}
                  </Text>
                </Div>

                <Div p="20px">
                  <Text tag="p" textSize="paragraph">
                    {tailor.description}
                  </Text>
                </Div>
              </Div>
            )}

            <Div m={{ y: "20px" }} w="100%" rounded="md" bg="#fff">
              <Div
                w="100%"
                p="20px"
                border={{ b: "1px solid" }}
                borderColor="gray400"
              >
                <Text tag="h1" textSize="title">
                  Products
                </Text>
              </Div>
              <Div p="20px">
                <Row>
                  {products.length !== 0 ? (
                    products.map((p) =>
                      p.store === tailor._id ? (
                        <Col
                          size={{
                            xs: "12",
                            sm: "6",
                            md: "6",
                            lg: "4",
                            xl: "4",
                          }}
                        >
                          <Link
                            href={`/product?p_id=${p._id}&s_id=${this.state.tailor._id}`}
                          >
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
                                  xs: "130px",
                                  sm: "130px",
                                  md: "150px",
                                  lg: "200px",
                                  xl: "200px",
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

                                {tailor.type === "fabric" ? (
                                  <NumberFormat
                                    value={p.fabric.materialPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₦"}
                                    renderText={(value) => (
                                      <Text textSize="subheader">
                                        {value} (Per yard)
                                      </Text>
                                    )}
                                  />
                                ) : (
                                  <NumberFormat
                                    value={p.tailor.sowingPrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₦"}
                                    renderText={(value) => (
                                      <Text textSize="subheader">{value}</Text>
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
                      ) : null
                    )
                  ) : (
                    <EmptyList />
                  )}
                </Row>
              </Div>
            </Div>
          </Container>
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
