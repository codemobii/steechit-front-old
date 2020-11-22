import { Button, Icon, Text } from "atomize";
import Link from "next/link";
import React from "react";

export default function SettingSidebar() {
  return (
    <>
      <Text tag="header" m={{ b: "2rem" }} textSize="title">
        Edit profile
      </Text>
      <Link href="/profile/settings?q=about-me">
        <Button
          w="100%"
          h="65px"
          justify="space-between"
          suffix={
            <Icon
              name="DownArrowCircle"
              size="24px"
              style={{ transform: "rotate(-90deg)" }}
            />
          }
          align="center"
          bg="white"
          textColor="black800"
          textSize="paragraph"
          rounded="xs"
          p="0"
          border={{ t: "1px solid" }}
          borderColor="gray300"
        >
          About you
        </Button>
      </Link>
      <Link href="/profile/settings?q=contact">
        <Button
          w="100%"
          h="65px"
          justify="space-between"
          suffix={
            <Icon
              name="DownArrowCircle"
              size="24px"
              style={{ transform: "rotate(-90deg)" }}
            />
          }
          align="center"
          bg="white"
          textColor="black800"
          textSize="paragraph"
          rounded="xs"
          p="0"
          border={{ t: "1px solid" }}
          borderColor="gray300"
        >
          Contact
        </Button>
      </Link>
      <Link href="/profile/settings?q=update-password">
        <Button
          w="100%"
          h="65px"
          justify="space-between"
          suffix={
            <Icon
              name="DownArrowCircle"
              size="24px"
              style={{ transform: "rotate(-90deg)" }}
            />
          }
          align="center"
          bg="white"
          textColor="black800"
          textSize="paragraph"
          rounded="xs"
          p="0"
          border={{ t: "1px solid" }}
          borderColor="gray300"
        >
          Update password
        </Button>
      </Link>
      <Link href="/auth/signout">
        <Button
          w="100%"
          h="65px"
          justify="space-between"
          suffix={
            <Icon
              name="DownArrowCircle"
              size="24px"
              style={{ transform: "rotate(-90deg)" }}
            />
          }
          align="center"
          bg="white"
          textColor="black800"
          textSize="paragraph"
          rounded="xs"
          p="0"
          border={{ t: "1px solid" }}
          borderColor="gray300"
        >
          Signout
        </Button>
      </Link>
    </>
  );
}
