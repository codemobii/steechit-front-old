import { Div, Icon, Text } from "atomize";
import Link from "next/link";
import React from "react";

export default function ProfileMobileMenu() {
  return (
    <Div
      pos="fixed"
      bottom="0"
      left="0"
      w="100%"
      bg="#fff"
      d={{ xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }}
      shadow="5"
    >
      <Link href="/profile">
        <Div w="25%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="UserSolid"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Profile
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/profile/contracts">
        <Div w="25%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="Bag"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Contracts
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/profile/offers">
        <Div w="25%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="Store"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Offers
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/profile/wallet">
        <Div w="25%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="Card"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Wallet
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/profile/settings?action=about-me">
        <Div w="25%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="SettingsSolid"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Settings
            </Text>
          </Div>
        </Div>
      </Link>
    </Div>
  );
}
