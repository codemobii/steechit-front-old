import { Col, Div, Label, Row, Text } from "atomize";
import React from "react";

export default function MenMeasurement({ measurement }) {
  return (
    <div>
      <Div p="20px">
        <Text m={{ b: "0.5rem" }} tag="header" textSize="title">
          Shirt
        </Text>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Shirt Length
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.length}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Shoulder Length
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.shoulderLength}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Chest Size
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.chest}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Tummy Size
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.tummy}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Round Size
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.roundSleeve}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Neck Size
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.neck}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Long Sleeve Length
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.sleeve.long}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Short Sleeve Length
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.shirt.sleeve.short}</Label>
          </Col>
        </Row>

        <Text m={{ b: "1.5rem", t: "1.5rem" }} tag="header" textSize="title">
          Pants
        </Text>

        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Length
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.lenght}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Waist
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.waist}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Hip
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.hip}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Lap
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.lap}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Knee
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.knee}</Label>
          </Col>
        </Row>
        <Row
          p={{ t: "0.5rem", b: "0.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Col size="8">
            <Label d="inline-block" textWeight="600">
              Ankle
            </Label>
          </Col>
          <Col size="4">
            <Label d="inline-block">{measurement.pants.ankle}</Label>
          </Col>
        </Row>
      </Div>
    </div>
  );
}
