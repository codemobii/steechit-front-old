import {
  Icon,
  Image,
  Input,
  Label,
  Modal,
  Notification,
  Switch,
  Text,
} from "atomize";
import Axios from "axios";
import { get } from "lodash";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainButton from "./buttons/main_button";

export default function RequestOfferFormFabric(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [getting_measurement, setGetting_measurement] = useState(false);
  const [share_measurement, setShare_measurement] = useState(false);
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Error");
  const [price, setPrice] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [quantity, setQuantity] = useState("1");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("");
  const [done, setDone] = useState(false);

  // Handle enter pin

  const handleSetPin = (e) => {
    if (pin.length !== 4) {
      setPin(e.target.value);
    } else {
      return false;
    }
  };

  const price_n = props.product_info.mPrice;

  const auth = useSelector((state) => state.auth);

  const token = auth.token;
  const id = auth._id;

  const router = useRouter();

  console.log(props.product_info);

  // Handle get measurement
  const handleGetMeasurement = async () => {
    if (!share_measurement) {
      setGetting_measurement(true);
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
        url: `${process.env.apiUrl}measurements/`,
        params: {
          user: id,
        },
      })
        .then(async (res) => {
          if (res.data.length !== 0) {
            const gend = res.data[0].gender;
            setSize(res.data[0]._id);
            setShare_measurement(true);
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
              url: `${process.env.apiUrl}${
                gend === "M" ? "menMeasurement" : "womenMeasurement"
              }/`,
              params: {
                user: id,
              },
            }).then((res) => {
              setGender(res.data._id);
            });
          } else {
            setErrorMsg("You don't have any measurement to share");
            setError(true);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg("Something went wrong!");
          setError(true);
        })
        .finally(() => setGetting_measurement(false));
    } else {
      setShare_measurement(false);
    }
  };

  // Handle Submit

  const handleSubmit = async () => {
    setLoading(true);
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
      url: `${process.env.apiUrl}wallet/`,
      params: {
        user: id,
      },
    })
      .then(async (res) => {
        const pro_price = parseFloat(price_n) * parseFloat(quantity);
        const wallet_bal = parseFloat(res.data[0].amount);

        const data = {
          wallet: res.data[0]._id,
          PTN: pin,
          store: props.store,
          consideration: pro_price,
          deliveryDate: moment(deliveryDate).format("YYYY-MM-DD"),
          sample: [props.product],
          user: id,
          initiator: "User",
          measurment: {
            unit: "YD",
            size: 29,
          },
          qauntity: parseFloat(quantity),
          openOffer: true,
          type: "order",
        };

        console.log(res);

        if (pro_price > wallet_bal) {
          setErrorMsg(
            "You don't have enough funds to continue, fund your wallet"
          );
          setError(true);
        } else {
          console.log(data);
          await Axios({
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            proxy: {
              host: "104.236.174.88",
              port: 3128,
            },
            method: "POST",
            url: `${process.env.apiUrl}offerFabrics`,
            data,
          })
            .then((ress) => {
              setErrorMsg("Offer sent successfully");
              setError(true);
              setIsOpen(false);
              setDone(true);
            })
            .catch((er) => {
              const msg = get(er, "response.data.message") || e.message;
              console.log(msg);
              setErrorMsg(msg);
              setError(true);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Something went wrong!");
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form>
        <Label d="block" m={{ b: "1rem" }}>
          Yards
          <Input
            placeholder=""
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            type="number"
          />
        </Label>
        <Label d="block" m={{ b: "1rem" }}>
          Price (Per yard)
          <Text textSize="subheader">
            {parseFloat(price_n) * parseFloat(quantity)}
          </Text>
        </Label>
        {/* <Label d="block" m={{ b: "1rem" }}>
          Delivery date
          <Input
            placeholder=""
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            type="date"
          />
        </Label> */}

        {/** <Label d="block" m={{ b: "1rem" }}>
          Gender
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="select"
          >
            <option value="None">Select gender</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </Label>

        <Label
          onClick={handleGetMeasurement}
          align="center"
          textWeight="600"
          m={{ b: "1rem" }}
        >
          <Switch checked={share_measurement} isLoading={getting_measurement} />
          Share measurement with tailor
        </Label> */}
        {/** !share_measurement && (
          <>
            <Label d="block" m={{ b: "1rem" }}>
              Measurement Unit
              <select
                onChange={(e) => setUnit(e.target.value)}
                value={unit}
                className="select"
              >
                <option>Select unit of measurement</option>
                <option value="YD">Yard</option>
                <option value="CM">Centimeter</option>
                <option value="M">Meter</option>
              </select>
            </Label>
            <Label d="block" m={{ b: "1rem" }}>
              Size
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="select"
              >
                <option>Select size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
                <option value="XXL">Extra Extra Large</option>
              </select>
            </Label>{" "}
          </>
        ) */}
        <MainButton onClick={() => setIsOpen(true)} title="Continue" />
      </form>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        align={{
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
          xl: "center",
        }}
        rounded="md"
        maxW="25rem"
        p="20px"
        bg="#fff"
        overflow="hidden"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="32px"
          onClick={() => setIsOpen(false)}
          cursor="pointer"
        />
        <form>
          <Text
            textAlign="center"
            tag="header"
            textSize="title"
            m={{ b: "2rem" }}
          >
            Enter your pin
          </Text>

          <Label d="block" m={{ b: "1rem" }}>
            PIN
            <Input
              type="number"
              value={pin}
              onChange={(e) => handleSetPin(e)}
            />
          </Label>
          <MainButton
            onClick={handleSubmit}
            loading={loading}
            title="Make offer"
          />
        </form>
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
      <Modal
        isOpen={done}
        onClose={() => setDone(true)}
        align={{
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
          xl: "center",
        }}
        rounded="md"
        maxW="25rem"
        p="20px"
        bg="#fff"
        overflow="hidden"
        style={{ textAlign: "center" }}
      >
        <Image
          w="100px"
          h="100px"
          src="https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png"
          m={{ x: "auto", b: "30px" }}
        />
        <Text tag="h1" textSize="heading" textAlign="center">
          Kindly the contact this store to follow up on your order
        </Text>
        <Link href="/profile/contracts">
          <MainButton title="Okay" />
        </Link>
      </Modal>
    </>
  );
}
