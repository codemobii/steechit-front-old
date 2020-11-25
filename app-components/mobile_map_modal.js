import { Anchor, Button, Div, Icon, Input, Modal, Text } from "atomize";
import React from "react";
import Mapview from "./map_view";

export default function MapModal({ isOpen, onClose, position, tailors }) {
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
      maxW="80rem"
      h="600px"
      bg="#fff"
      p="0rem"
      overflow="hidden"
    >
      <Mapview position={position} tailors={tailors} />
    </Modal>
  );
}
