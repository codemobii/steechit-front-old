import { Anchor, Button, Div, Icon, Input, Modal, Text } from "atomize";
import React from "react";
import EditMenMeasurement from "./edit_men_measurement";
import EditWomenMeasurement from "./edit_women_measurement";

export default function EditMeasurementModal({
  isOpen,
  onClose,
  measurement,
  gender,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="30rem"
      bg="#fff"
      p="0rem"
      overflow="hidden"
      p="20px"
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
      {gender === "M" ? (
        <EditMenMeasurement measurement={measurement} />
      ) : (
        <EditWomenMeasurement measurement={measurement} />
      )}
    </Modal>
  );
}
