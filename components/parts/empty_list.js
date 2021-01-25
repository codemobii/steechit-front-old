import { Div, Text, Image } from "atomize";
import React from "react";

export default function EmptyList() {
  return (
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
          Nothing found !
        </Text>
      </Div>
    </Div>
  );
}
