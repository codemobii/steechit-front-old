import {
  Button,
  Div,
  Icon,
  Image,
  Input,
  Label,
  Modal,
  Notification,
  Radiobox,
  Text,
  Textarea,
} from "atomize";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import store from "../../services/store";
import axios from "axios";
import Carousel from "nuka-carousel";

export default function OrderModal({
  isOpen,
  onClose,
  product,
  loading,
  tailor,
  onSuccess,
}) {
  const [checking, setChecking] = useState(false);
  const [measurement, setMeasurement] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState("");
  const [ordering, setOrdering] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Error");
  const [success, setSuccess] = useState(false);

  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const getMeasurement = async () => {
    setChecking(true);
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
      url: `${process.env.apiUrl}menMeasurement/`,
      params: {
        user: id,
      },
    })
      .then(async (res) => {
        if (res.statusText === "OK") {
          setMeasurement(true);
        } else {
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
            url: `${process.env.apiUrl}womenMeasurement/`,
            params: {
              user: id,
            },
          })
            .then((ress) => {
              if (res.statusText === "OK") {
                setMeasurement(true);
                console.log(ress);
              } else {
                setErrorMsg("You don't have any measurement to add");
                setError(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Something went wrong!");
        setError(true);
      })
      .finally(() => setChecking(false));
  };

  console.log(product.image);

  const bookOrder = async (e) => {
    e.preventDefault();
    setOrdering(true);
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
      url: `${process.env.apiUrl}wallet/`,
      params: {
        user: id,
      },
    })
      .then(async (res) => {
        const pro_price = parseInt(product.price);
        const wallet_bal = parseInt(res.data[0].bal);
        const price = parseInt(product.price * quantity);

        const data = {
          customer: id,
          store: tailor,
          is_material: false,
          checkedMeasurment: measurement,
          chargedAmount: price,
          narration: message,
          installment: {
            initialPayment: price,
            nextPayment: price,
            closedPayment: price,
          },
        };
        console.log(res);
        if (pro_price > wallet_bal) {
          setErrorMsg(
            "You don't have enough funds to continue, fund your wallet"
          );
          setError(true);
        } else {
          console.log(data);
          await axios({
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            proxy: {
              host: "104.236.174.88",
              port: 3128,
            },
            method: "POST",
            url: `${process.env.apiUrl}contract`,
            data,
          })
            .then((ress) => {
              setSuccess(true);
              onSuccess();
            })
            .catch((er) => {
              console.log(er);
              setErrorMsg(er.message);
              setError(true);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Something went wrong!");
        setError(true);
      })
      .finally(() => setOrdering(false));
  };

  return (
    <>
      {" "}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setMeasurement(false);
          setSuccess(false);
        }}
        rounded="md"
        maxW="25rem"
        bg="#fff"
        p="0rem"
        overflow="hidden"
      >
        <Button
          rounded="circle"
          bg="#fff"
          onClick={() => {
            onClose();
            setMeasurement(false);
            setSuccess(false);
          }}
          cursor="pointer"
          pos="absolute"
          top="1rem"
          right="1rem"
          zIndex="1000"
        >
          <Icon name="Cross" size="32px" />
        </Button>
        {/** {token ? (
          success ? (
            <Div
              w="100%"
              d="flex"
              align="center"
              justify="center"
              textAlign="center"
              p="20px"
            >
              <Div>
                <Image
                  src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
                  width="200px"
                  m={{ b: "20px" }}
                />
                <Text textAlign="left" tag="header" textSize="title">
                  Your order have successfully been booked, thank you!
                </Text>
                <Div d="flex" align="flex-start" m={{ t: "1rem" }}>
                  <Icon
                    name="InfoSolid"
                    size="20px"
                    color="warning500"
                    m={{ r: "10px" }}
                  />
                  <Text textAlign="left" tag="label">
                    Contact tailor to take your measurement and follow up adter
                    placing your order.
                  </Text>
                </Div>
              </Div>
            </Div>
          ) : loading ? (
            <Div h="200px" d="flex" align="center" justify="center">
              <Icon name="Loading3" />
            </Div>
          ) : (
            <>
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
              <Div p="20px">
                <Div d="flex" align="center" style={{ flexFlow: "wrap" }}>
                  <Text tag="header" textSize="heading">
                    {product.name}
                  </Text>
                  <Icon m={{ l: "1rem", r: "1rem" }} name="Minus" size="20px" />
                  <Text tag="header" textSize="subheader">
                    ₦{product.price}
                  </Text>
                </Div>
                <form onSubmit={bookOrder}>
                  <Label align="center" m={{ b: "1rem", t: "1rem" }}>
                    <Radiobox
                      onChange={getMeasurement}
                      checked={measurement}
                      isLoading={checking}
                    />
                    Send my measurement?
                  </Label>

                  <Label align="center" m={{ b: "1rem", t: "1rem" }}>
                    Amount to pay : ({parseInt(product.price * quantity)})
                  </Label>
                  <Div m={{ t: "1rem" }}>
                    <Label d="block" m={{ b: "1rem" }}>
                      Quantity
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </Label>
                    <Label d="block">
                      Contact details?
                      <Textarea
                        placeholder="Your contact details"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Label>
                  </Div>
                  <Button
                    prefix={
                      ordering ? (
                        <Icon
                          name="Loading3"
                          size="24px"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />
                      ) : null
                    }
                    p={{ r: "1.5rem", l: "1rem" }}
                    bg="warning700"
                    w="100%"
                    m={{ t: "2rem" }}
                  >
                    {ordering ? "Booking" : "Book now"}
                  </Button>
                </form>
              </Div>
            </>
          )
        ) : (
          <Div
            w="100%"
            h="300px"
            d="flex"
            align="center"
            justify="center"
            textAlign="center"
          >
            <Div>
              <Image
                src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
                width="300px"
                m={{ b: "20px" }}
              />
              <Text tag="header" textSize="title">
                Please login to book.
              </Text>
            </Div>
          </Div>
        )} */}
        <Div
          w="100%"
          h="500px"
          d="flex"
          align="center"
          justify="center"
          textAlign="center"
        >
          <Div>
            <Image
              src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
              width="300px"
              m={{ b: "20px" }}
            />
            <Text tag="header" textSize="title">
              Please login to view product and request an for an offer.
            </Text>
          </Div>
        </Div>
      </Modal>
      <Notification
        bg="warning700"
        isOpen={error}
        onClose={() => {
          setTimeout(() => {
            setError(false);
          }, 2000);
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
        {errorMsg}
      </Notification>
    </>
  );
}
