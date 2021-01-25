import { Button, Icon, Text } from "atomize";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { LogOutRequest } from "../../services/login_action";

export default function SettingSidebar() {
  const dispatch = useDispatch();
  const router = useRouter();
  function LogOutForm() {
    if (dispatch(LogOutRequest({ date: "pen" }))) {
      router.push("/?auth=true");
    }
  }
  return (
    <>
      <Text tag="header" m={{ b: "2rem" }} textSize="title">
        Edit profile
      </Text>
      <Link href="/profile/settings?action=about-me">
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
          KYC
        </Button>
      </Link>
      <Link href="/profile/settings?action=contact">
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
      <Link href="/profile/settings?action=measurement">
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
          Measurement
        </Button>
      </Link>
      <Link href="/profile/settings?action=update-password">
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

      <Button
        onClick={LogOutForm}
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
    </>
  );
}
