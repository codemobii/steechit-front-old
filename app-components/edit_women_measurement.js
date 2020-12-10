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

export default function EditWomenMeasurement({ measurement }) {
  const auth = useSelector((state) => state.auth);

  const token = auth.token;

  const [loading, setLoading] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [burst, setBurst] = useState(measurement.bust);
  const [waist, setWaist] = useState(measurement.waist);
  const [hip, setHip] = useState(measurement.hip);
  const [average, setAverage] = useState(measurement.average);
  const [shoulder, setShoulder] = useState(measurement.shoulder);
  const [skirt, setSkirt] = useState(measurement.length.skirt);
  const [dress, setDress] = useState(measurement.length.dress);
  const [blouse, setBlouse] = useState(measurement.length.blouse);
  const [femaleShortSleeveLength, setFemaleShortSleeveLength] = useState(
    measurement.sleeve.short.length
  );
  const [femaleShortSleeveWidth, setFemaleShortSleeveWidth] = useState(
    measurement.sleeve.short.width
  );
  const [femaleElbowSleeveLength, setFemaleElbowSleeveLength] = useState(
    measurement.sleeve.elbow.length
  );
  const [femaleElbowSleeveWidth, setFemaleElbowSleeveWidth] = useState(
    measurement.sleeve.elbow.width
  );
  const [femaleLongSleeveLength, setFemaleLongSleeveLength] = useState(
    measurement.sleeve.long.length
  );
  const [femaleLongSleeveWidth, setFemaleLongSleeveWidth] = useState(
    measurement.sleeve.long.width
  );

  let measurement_id = measurement._id;

  const handleBurst = (e) => {
    setBurst(e.target.value);
  };

  const handleWaist = (e) => {
    setWaist(e.target.value);
  };

  const handleHip = (e) => {
    setHip(e.target.value);
  };

  const handleAverage = (e) => {
    setAverage(e.target.value);
  };

  const handleShoulder = (e) => {
    setShoulder(e.target.value);
  };

  const handleSkirt = (e) => {
    setSkirt(e.target.value);
  };

  const handleDress = (e) => {
    setDress(e.target.value);
  };

  const handleBlouse = (e) => {
    setBlouse(e.target.value);
  };

  const handleFemaleElbowSleeveLength = (e) => {
    setFemaleElbowSleeveLength(e.target.value);
  };

  const handleFemaleElbowSleeveWidth = (e) => {
    setFemaleElbowSleeveWidth(e.target.value);
  };

  const handleFemaleLongSleeveLength = (e) => {
    setFemaleLongSleeveLength(e.target.value);
  };

  const handleFemaleLongSleeveWidth = (e) => {
    setFemaleLongSleeveWidth(e.target.value);
  };

  const handleFemaleShortSleeveLength = (e) => {
    setFemaleShortSleeveLength(e.target.value);
  };

  const handleFemaleShortSleeveWidth = (e) => {
    setFemaleShortSleeveWidth(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        url: `${process.env.apiUrl}womenMeasurement/${measurement_id}`,
        data: {
          bust: burst,
          waist: waist,
          hip: hip,
          average: average,
          shoulder: shoulder,
          length: {
            skirt: skirt,
            dress: dress,
            blouse: blouse,
          },
          sleeve: {
            short: {
              length: femaleShortSleeveLength,
              width: femaleShortSleeveWidth,
            },
            elbow: {
              length: femaleElbowSleeveLength,
              width: femaleShortSleeveWidth,
            },
            long: {
              length: femaleLongSleeveLength,
              width: femaleLongSleeveWidth,
            },
          },
        },
      });

      setLoading(false);
      setCheckSubmit(true);
      window.location.reload();

      console.log(res);
    } catch (err) {
      const msg = get(err, "response.data.message") || e.message;
      console.log(msg);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text textAlign="center" tag="header" textSize="title" m={{ b: "2rem" }}>
        Edit your measurement
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
            Burst Size
            <Input onChange={handleBurst} value={burst} />
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
            Waist Size
            <Input onChange={handleWaist} value={waist} />
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
            Hip Size
            <Input onChange={handleHip} value={hip} />
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
            Average Size
            <Input onChange={handleAverage} value={average} />
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
            Shoulder Size
            <Input onChange={handleShoulder} value={shoulder} />
          </Label>
        </Col>
      </Row>
      <Text m={{ b: "0.5rem" }} tag="header" textSize="title">
        Length
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
            Skirt Length
            <Input onChange={handleSkirt} value={skirt} />
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
            Dress Length
            <Input onChange={handleDress} value={dress} />
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
            Blouse Size
            <Input onChange={handleBlouse} value={blouse} />
          </Label>
        </Col>
      </Row>
      <Text m={{ b: "0.5rem" }} tag="header" textSize="title">
        Sleeve
      </Text>
      <Label d="block" m={{ b: "1rem" }}>
        Short Sleeve
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
              onChange={handleFemaleShortSleeveLength}
              value={femaleShortSleeveLength}
              placeholder="Enter Short Sleeve Length"
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
              onChange={handleFemaleShortSleeveWidth}
              value={femaleShortSleeveWidth}
              placeholder="Enter Short Sleeve Width"
            />
          </Col>
        </Row>
      </Label>
      <Label d="block" m={{ b: "1rem" }}>
        Elbow Sleeve
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
              onChange={handleFemaleElbowSleeveLength}
              value={femaleElbowSleeveLength}
              placeholder="Enter Elbow Sleeve Length"
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
              onChange={handleFemaleElbowSleeveWidth}
              value={femaleElbowSleeveWidth}
              placeholder="Enter Elbow Sleeve Width"
            />
          </Col>
        </Row>
      </Label>
      <Label d="block">
        Long Sleeve
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
              onChange={handleFemaleLongSleeveLength}
              value={femaleLongSleeveLength}
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
              onChange={handleFemaleLongSleeveWidth}
              value={femaleLongSleeveWidth}
              placeholder="Enter Long Sleeve With"
            />
          </Col>
        </Row>
      </Label>

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
