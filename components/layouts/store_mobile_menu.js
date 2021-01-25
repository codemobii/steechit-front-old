import { Div, Icon, Text } from "atomize";
import Link from "next/link";
import React from "react";

export default function StoreMobileMenu() {
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
      <Link href="/store">
        <Div w="20%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="Bulk"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Home
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/store/contracts">
        <Div w="20%" d="flex" h="60px" align="center" justify="center">
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
      <Link href="/store/offers">
        <Div w="20%" d="flex" h="60px" align="center" justify="center">
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
      <Link href="/store/products">
        <Div w="20%" d="flex" h="60px" align="center" justify="center">
          <Div textAlign="center">
            <Icon
              style={{ transform: "translateY(10px)" }}
              name="FolderSolid"
              size="24px"
              color="black800"
            />
            <Text tag="label" d="block">
              Products
            </Text>
          </Div>
        </Div>
      </Link>
      <Link href="/store/settings?action=about-me">
        <Div w="20%" d="flex" h="60px" align="center" justify="center">
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
