import { Anchor, Button, Div, Icon, Image, SideDrawer, Text } from "atomize";
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
      <Anchor>
        <Image src="https://www.openphone.co/images/open-phone.svg" w="160px" />
      </Anchor>
      <Div m={{ t: "30px" }}>
        <Anchor
          href="https://www.google.com"
          target="_blank"
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          Tailors
        </Anchor>
        <Anchor
          href="https://www.google.com"
          target="_blank"
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          Fabric Stores
        </Anchor>
        <Anchor
          href="https://www.google.com"
          target="_blank"
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          Logistics
        </Anchor>
        <Anchor
          href="https://www.google.com"
          target="_blank"
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          About
        </Anchor>
        <Anchor
          href="https://www.google.com"
          target="_blank"
          d="block"
          textColor="#fff"
          m={{ b: "1rem" }}
          fontFamily="primary"
        >
          Help
        </Anchor>
      </Div>
    </SideDrawer>
  );
}
