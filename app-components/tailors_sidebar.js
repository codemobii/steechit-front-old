import { Checkbox, Div, Label, Text } from "atomize";
import React from "react";

export default function TailorsSidebar() {
  return (
    <>
      <Text tag="h4" textColor="black800" fontFamily="primary">
        FILTER
      </Text>
      <Div m={{ t: "1rem" }}>
        <Text tag="label" textColor="black200" fontFamily="primary">
          Categories
        </Text>
        <Label align="center" textWeight="600" m={{ b: "0.5rem", t: "1rem" }}>
          <Checkbox undetermine /> Normal Checkbox
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
      </Div>
      <Div m={{ t: "1rem" }}>
        <Text tag="label" textColor="black200" fontFamily="primary">
          Gender
        </Text>
        <Label align="center" textWeight="600" m={{ b: "0.5rem", t: "1rem" }}>
          <Checkbox undetermine /> Normal Checkbox
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
      </Div>
      <Div m={{ t: "1rem" }}>
        <Text tag="label" textColor="black200" fontFamily="primary">
          Locations
        </Text>
        <Label align="center" textWeight="600" m={{ b: "0.5rem", t: "1rem" }}>
          <Checkbox undetermine /> Normal Checkbox
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
          <Checkbox undetermine /> Undetermine
        </Label>
      </Div>
    </>
  );
}
