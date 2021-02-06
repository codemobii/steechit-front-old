import { Button, Icon, Input, Label, Modal, Text } from "atomize";
import axios from "axios";
import { get } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function FundWallet({ isOpen, onClose }) {
  const [amount, setAmount] = useState("");

  //user state
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const token = auth.token;
  const id = auth._id;
  //
  function makeRef(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function MakePayment(e) {
    e.preventDefault();
    const formRef = makeRef(20);
    console.log(user.email + user.phone + user.firstName);
    // eslint-disable-next-line no-undef
    FlutterwaveCheckout({
      public_key: "FLWPUBK-ca94420209e8c53f45d673e4f4d58ac5-X",
      tx_ref: formRef,
      amount: amount,
      currency: "NGN",
      country: "NG",
      payment_options: "card",
      customer: {
        email: user.email,
        phone_number: user.phone,
        name: user.firstName,
      },
      callback: async (d) => {
        console.log(d);
        let trans_id = d.transaction_id;
        try {
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
            url: `${process.env.apiUrl}wallet`,
            data: {
              trnsId: trans_id,
            },
          })
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              const msg = get(e, "response.data.message") || e.message;
              console.log(msg);
            });
        } catch (error) {
          console.log(error);
        }
      },
      customizations: {
        title: "Steechit",
        description: "Fund your wallet",
        logo:
          "https://github.com/ijelechimaobi/steechit-front/blob/main/LOGO%203D%20Icon_3%20PNG.png?raw=true",
      },
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
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
        onClick={onClose}
        cursor="pointer"
      />
      <form onSubmit={MakePayment}>
        <Text
          textAlign="center"
          tag="header"
          textSize="title"
          m={{ b: "2rem" }}
        >
          Fund your wallet
        </Text>

        <Label d="block" m={{ b: "1rem" }}>
          Amount
          <Input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </Label>
        <Button
          p={{ r: "2rem", l: "2rem" }}
          bg="warning700"
          w="100%"
          m={{ t: "2rem" }}
        >
          Continue
        </Button>
      </form>
    </Modal>
  );
}
