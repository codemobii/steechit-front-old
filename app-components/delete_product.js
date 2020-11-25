import { Button, Div, Icon, Input, Label, Modal, Text } from "atomize";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function DeleteProduct({ isOpen, onClose, product }) {
  //user state
  const user = useSelector((state) => state.user);

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
      maxW="25rem"
      p="20px"
      bg="#fff"
      overflow="hidden"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="32px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text textAlign="center" tag="header" textSize="title" m={{ b: "2rem" }}>
        Delete product?
      </Text>

      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Delete
        </Button>
      </Div>
    </Modal>
  );
}
