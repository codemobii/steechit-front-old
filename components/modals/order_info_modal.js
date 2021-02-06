import {
  Anchor,
  Button,
  Col,
  Div,
  Icon,
  Label,
  Modal,
  Row,
  Text,
} from "atomize";
import Link from "next/link";
import React, { useState } from "react";
import ProfileLoader from "../parts/profile_loader";

export default function OrderInfoModal({ isOpen, onClose, loading, order }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      align={{
        xs: "flex-start",
        sm: "flex-start",
        md: "flex-start",
        lg: "center",
        xl: "center",
      }}
      rounded="md"
      maxW="50rem"
      p="20px"
      overflow="hidden"
    >
      <Button
        rounded="circle"
        bg="#fff"
        onClick={() => {
          onClose();
        }}
        cursor="pointer"
        pos="absolute"
        top="1rem"
        right="1rem"
        zIndex="1000"
      >
        <Icon name="Cross" size="32px" />
      </Button>
      {loading ? (
        <ProfileLoader />
      ) : (
        <>
          <Text tag="h1" textSize="title">
            Contract Details
          </Text>
          <Row
            m={{ t: "20px" }}
            p={{ x: "0", y: "10px" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Col size="8">
              <Label d="inline-block" textWeight="600">
                Yards
              </Label>
            </Col>
            <Col size="4">
              <Label d="inline-block">{order.qauntity}</Label>
            </Col>
          </Row>
          <Row
            m={{ t: "20px" }}
            p={{ x: "0", y: "10px" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Col size="8">
              <Label d="inline-block" textWeight="600">
                Amount
              </Label>
            </Col>
            <Col size="4">
              <Label d="inline-block">{order.consideration}</Label>
            </Col>
          </Row>
          <Row
            m={{ t: "20px" }}
            p={{ x: "0", y: "10px" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Col size="8">
              <Label d="inline-block" textWeight="600">
                Order date
              </Label>
            </Col>
            <Col size="4">
              <Label d="inline-block">
                {new Date(order.createdAt).toDateString()}
              </Label>
            </Col>
          </Row>
          <Row
            m={{ t: "20px" }}
            p={{ x: "0", y: "10px" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Col size="8">
              <Label d="inline-block" textWeight="600">
                Product ordered
              </Label>
            </Col>
            <Col size="4">
              <Link
                href={`/product?p_id=${
                  order.sample !== undefined && order.sample[0]
                }&s_id=${order.store}`}
              >
                <Anchor>View product</Anchor>
              </Link>
            </Col>
          </Row>
          <Row
            m={{ t: "20px" }}
            p={{ x: "0", y: "10px" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Col size="8">
              <Label d="inline-block" textWeight="600">
                Store
              </Label>
            </Col>
            <Col size="4">
              <Link href={`/${order.store}`}>
                <Anchor>View store</Anchor>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Modal>
  );
}
