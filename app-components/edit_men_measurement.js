import {
  Button,
  Col,
  Div,
  Icon,
  Input,
  Label,
  Modal,
  Notification,
  Row,
  Text,
  Textarea,
} from "atomize";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { get } from "lodash";

export default function EditMenMeasurement({ measurement }) {
  const auth = useSelector((state) => state.auth);

  const token = auth.token;

  const [maleShoulder, setMaleShoulder] = useState(
    measurement.shirt.shoulderLength
  );
  const [shirt, setShirt] = useState(measurement.shirt.length);
  const [chest, setChest] = useState(measurement.shirt.chest);
  const [tummy, setTummy] = useState(measurement.shirt.tummy);
  const [neck, setNeck] = useState(measurement.shirt.neck);
  const [roundSleeve, setRoundSleeve] = useState(measurement.shirt.roundSleeve);
  const [maleShortSleeveLength, setMaleShortSleeveLength] = useState(
    measurement.shirt.sleeve.short
  );
  const [maleLongSleeveLength, setMaleLongSleeveLength] = useState(
    measurement.shirt.sleeve.long
  );
  const [pantLength, setPantLength] = useState(measurement.pants.lenght);
  const [pantHip, setPantHip] = useState(measurement.pants.hip);
  const [pantWaist, setPantWaist] = useState(measurement.pants.waist);
  const [pantLap, setPantLap] = useState(measurement.pants.lap);
  const [pantKnee, setPantKnee] = useState(measurement.pants.knee);
  const [pantAnkle, setPantAnkle] = useState(measurement.pants.ankle);
  const [loading, setLoading] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);

  let measurement_id = measurement._id;

  const handleShirt = (e) => {
    setShirt(e.target.value);
  };

  const handleMaleShoulder = (e) => {
    setMaleShoulder(e.target.value);
  };

  const handleChest = (e) => {
    setChest(e.target.value);
  };

  const handleTummy = (e) => {
    setTummy(e.target.value);
  };

  const handleMaleLongSleeveLength = (e) => {
    setMaleLongSleeveLength(e.target.value);
  };

  const handleMaleShortSleeveLength = (e) => {
    setMaleShortSleeveLength(e.target.value);
  };

  const handleNeck = (e) => {
    setNeck(e.target.value);
  };

  const handleRoundSleeve = (e) => {
    setRoundSleeve(e.target.value);
  };

  const handlePantLength = (e) => {
    setPantLength(e.target.value);
  };

  const handlePantWaist = (e) => {
    setPantWaist(e.target.value);
  };

  const handlePantHip = (e) => {
    setPantHip(e.target.value);
  };

  const handlePantLap = (e) => {
    setPantLap(e.target.value);
  };

  const handlePantKnee = (e) => {
    setPantKnee(e.target.value);
  };

  const handlePantAnkle = (e) => {
    setPantAnkle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(measurement);
    try {
      const res = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "PUT",
        url: `${process.env.apiUrl}menMeasurement/${measurement_id}`,
        data: {
          shirt: {
            length: shirt,
            shoulderLength: maleShoulder,
            chest: chest,
            tummy: tummy,
            sleeve: {
              short: maleShortSleeveLength,
              long: maleLongSleeveLength,
            },
            roundSleeve: roundSleeve,
            neck: neck,
          },
          pants: {
            lenght: pantLength,
            waist: pantWaist,
            hip: pantHip,
            lap: pantLap,
            knee: pantKnee,
            ankle: pantAnkle,
          },
        },
      });

      setLoading(false);
      setCheckSubmit(true);
      console.log(res);
    } catch (er) {
      const msg = get(er, "response.data.message") || e.message;
      console.log(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text textAlign="center" tag="header" textSize="title" m={{ b: "2rem" }}>
        Edit your measurement
      </Text>
      <Text m={{ b: "0.5rem" }} tag="header" textSize="title">
        Shirt
      </Text>
      <Row>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Shirt Length
            <Input onChange={handleShirt} value={shirt} />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Shoulder Length
            <Input onChange={handleMaleShoulder} value={maleShoulder} />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Chest Size
            <Input onChange={handleChest} value={chest} />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Tummy Size
            <Input onChange={handleTummy} value={tummy} />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Round Sleeve
            <Input onChange={handleRoundSleeve} value={roundSleeve} />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Neck Size
            <Input onChange={handleNeck} value={neck} />
          </Label>
        </Col>
        <Col size="12">
          <Label d="block" m={{ b: "1rem" }}>
            Sleeve
            <Row>
              <Col
                size={{
                  xs: "12",
                  sm: "12",
                  md: "12",
                  lg: "6",
                  xl: "6",
                }}
              >
                <Input
                  onChange={handleMaleLongSleeveLength}
                  value={maleLongSleeveLength}
                  placeholder="Enter Long Sleeve Length"
                />
              </Col>
              <Col
                size={{
                  xs: "12",
                  sm: "12",
                  md: "12",
                  lg: "6",
                  xl: "6",
                }}
              >
                <Input
                  onChange={handleMaleShortSleeveLength}
                  value={maleShortSleeveLength}
                  placeholder="Enter Short Sleeve Length"
                />
              </Col>
            </Row>
          </Label>
        </Col>
      </Row>
      <Text m={{ b: "0.5rem" }} tag="header" textSize="title">
        Pants
      </Text>
      <Row>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Length
            <Input
              onChange={handlePantLength}
              value={pantLength}
              placeholder="Trouser Length"
            />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Waist
            <Input
              onChange={handlePantWaist}
              value={pantWaist}
              placeholder="Trouser Waist"
            />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Hip
            <Input
              onChange={handlePantHip}
              value={pantHip}
              placeholder="Trouser Hip"
            />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block">
            Lap
            <Input
              onChange={handlePantLap}
              value={pantLap}
              placeholder="Trouser Lap"
            />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block">
            Knee
            <Input
              onChange={handlePantKnee}
              value={pantKnee}
              placeholder="Trouser Knee"
            />
          </Label>
        </Col>
        <Col
          size={{
            xs: "12",
            sm: "12",
            md: "12",
            lg: "6",
            xl: "6",
          }}
        >
          <Label d="block" m={{ b: "1rem" }}>
            Ankle
            <Input
              onChange={handlePantAnkle}
              value={pantAnkle}
              placeholder="Trouser Ankle"
            />
          </Label>
        </Col>
      </Row>

      <Button
        w="100%"
        fontFamily="primary"
        bg="warning700"
        justify="center"
        m={{ t: "2rem" }}
        prefix={
          loading ? (
            <Icon
              name="Loading3"
              pos="absolute"
              top="50%"
              left="1rem"
              transform="translateY(-50%)"
              size="18px"
              color="white"
              m={{ r: "0.5rem" }}
            />
          ) : null
        }
        disabled={checkSubmit}
      >
        {loading ? "Loading" : "Save Changes"}
      </Button>
      <Notification
        bg="success700"
        isOpen={checkSubmit}
        onClose={() => setCheckSubmit(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        Measurement edited successfully
      </Notification>
    </form>
  );
}
