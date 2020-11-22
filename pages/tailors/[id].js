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
import Axios from "axios";
import ReactStars from "react-rating-stars-component";
import Layout from "../../components/layout";
import OrderModal from "../../components/order_modal";

export default class Tailor extends Component {
  constructor(props) {
    super(props);
    this.id = "";
    this.state = {
      tailor: this.props.tailor,
      products: this.props.products,
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
    await Axios.get(`https://steechit-api.herokuapp.com/products/${this.id}`)
      .then((res) => {
        this.setState({
          product: {
            id: res.data._id,
            name: res.data.productName,
            image: res.data.productPictures[0].url,
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
                    bg="warning700"
                    hoverBg="warning800"
                    rounded="circle"
                    p={{ r: "1.5rem", l: "1rem" }}
                    hoverShadow="4"
                    onClick={() => {
                      if (success) {
                        this.setState({ showNumber: !showNumber });
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
              <Row>
                {products.map((p) =>
                  p.store === this.state.tailor._id ? (
                    <Col
                      size={{
                        xs: "12",
                        sm: "12",
                        md: "12",
                        lg: "6",
                        xl: "6",
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
                          h="260px"
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <Div p="20px">
                          <Text
                            tag="h6"
                            textSize="subheader"
                            fontFamily="primary"
                          >
                            {p.productName}
                          </Text>
                          <Text tag="label" fontFamily="primary">
                            N{p.availableOptions[0].price}
                          </Text>
                        </Div>
                      </Div>
                    </Col>
                  ) : null
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
          bg="danger700"
          isOpen={error}
          onClose={() => this.setState({ error: false })}
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

  const tailor_res = await fetch(
    `https://steechit-api.herokuapp.com/stores/${id}`
  );
  const products_res = await fetch(
    "https://steechit-api.herokuapp.com/products"
  );

  const tailor = await tailor_res.json();
  const products = await products_res.json();

  return {
    props: {
      tailor,
      products,
    },
  };
}

export async function getStaticPaths() {
  const tailors_res = await fetch("https://steechit-api.herokuapp.com/stores");

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
