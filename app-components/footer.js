import { Anchor, Container, Div, Text } from "atomize";
import React from "react";

export default function Footer() {
  return (
    <Div w="100%" bg="gray300">
      <Container>
        <Div
          style={{ borderBottom: ".0625rem solid rgba(0,0,0,.1)" }}
          p={{ b: "50px", t: "50px" }}
        >
          <Div maxW="600px">
            <Text tag="header" textSize="title" m={{ b: "10px" }}>
              About steechit
            </Text>
            <Text>
              Steechit is a platform that connects you to skilled fashion
              designers, top fabric (material) sellers near you and around the
              world. With a wide range of logistics companies to choose from,
              Steechit allows you to dictate the delivery of purchases you make.
            </Text>
          </Div>
        </Div>
        <Div d="block" p={{ t: "20px", b: "20px" }}>
          <Anchor
            href="https://www.google.com"
            target="_blank"
            d="inline-block"
            m={{ r: "2rem" }}
            fontFamily="primary"
          >
            Tailors
          </Anchor>
          <Anchor
            href="https://www.google.com"
            target="_blank"
            d="inline-block"
            m={{ r: "2rem" }}
            fontFamily="primary"
          >
            Fabric Store
          </Anchor>
          <Anchor
            href="https://www.google.com"
            target="_blank"
            d="inline-block"
            m={{ r: "2rem" }}
            fontFamily="primary"
          >
            Logistics
          </Anchor>
          <Anchor
            href="https://www.google.com"
            target="_blank"
            d="inline-block"
            m={{ r: "2rem" }}
            fontFamily="primary"
          >
            Help
          </Anchor>
        </Div>
      </Container>
    </Div>
  );
}
