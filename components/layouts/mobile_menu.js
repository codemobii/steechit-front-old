import { Anchor, Button, Div, Icon, Image, SideDrawer, Text } from "atomize";
import Link from "next/link";
import React from "react";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={onClose}
      w={{ xs: "100vw", sm: "24rem" }}
      bg="black800"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="32px"
        onClick={onClose}
        cursor="pointer"
        color="gray100"
      />
      <Link href="/">
        <Div d="flex" align="center">
          <Image
            src="https://github.com/ijelechimaobi/steechit-front/blob/main/LOGO%203D%20Icon_3%20PNG.png?raw=true"
            w="40px"
          />
          <Text m={{ l: "10px" }} textColor="#fff" textSize="subheader">
            STEECHIT
          </Text>
        </Div>
      </Link>
      <Div m={{ t: "30px" }}>
        <Link href="/">
          <Anchor
            d="block"
            textColor="#fff"
            m={{ b: "1rem" }}
            fontFamily="primary"
          >
            Tailors
          </Anchor>
        </Link>
        <Link href="/fabrics">
          <Anchor
            d="block"
            textColor="#fff"
            m={{ b: "1rem" }}
            fontFamily="primary"
          >
            Fabrics
          </Anchor>
        </Link>
        <Anchor
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          Logistics
        </Anchor>
        <Anchor
          onClick={onClose}
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          About
        </Anchor>
      </Div>
    </SideDrawer>
  );
}
