import { Anchor, Container, Div, Text } from "atomize";
import Link from "next/link";
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
              About Steechit
            </Text>
            <Text>
              Steechit is a platform that connects you to skilled fashion
              designers, top fabric (material) sellers near you and around the
              world. With a wide range of logistics companies to choose from,
              Steechit allows you to dictate the delivery of purchases you make.
            </Text>
          </Div>
        </Div>
        <Div d="flex" p={{ t: "20px", b: "20px" }}>
          <Link href="/?explore=t">
            <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
              Book Tailors
            </Anchor>
          </Link>
          <Link href="/fabrics">
            <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
              Buy Materials
            </Anchor>
          </Link>
          {/* <Link href="/logistics">
            <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
              Logistics
            </Anchor>
          </Link> */}
          <Link href="/">
            <Anchor d="block" m={{ r: "30px" }} fontFamily="primary">
              About
            </Anchor>
          </Link>
        </Div>
      </Container>
    </Div>
  );
}
