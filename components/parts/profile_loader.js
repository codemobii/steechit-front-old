import { Div, Icon, Text } from "atomize";
import React from "react";
import Image from "next/image";

export default function ProfileLoader() {
  return (
    <Div w="100%" h="300px" d="flex" align="center" justify="center">
      <Icon name="Loading3" size="38px" />
    </Div>
  );
}
