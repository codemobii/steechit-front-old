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

export default function AddMeasurement({ isOpen, onClose }) {
  const auth = useSelector((state) => state.auth);

  const token = auth.token;
  const id = auth._id;

  const [measurementType, setMeasurementType] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [genderState, setGenderState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [setting, setSetting] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [burst, setBurst] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [average, setAverage] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [skirt, setSkirt] = useState("");
  const [dress, setDress] = useState("");
  const [blouse, setBlouse] = useState("");
  const [femaleShortSleeveLength, setFemaleShortSleeveLength] = useState("");
  const [femaleShortSleeveWidth, setFemaleShortSleeveWidth] = useState("");
  const [femaleElbowSleeveLength, setFemaleElbowSleeveLength] = useState("");
  const [femaleElbowSleeveWidth, setFemaleElbowSleeveWidth] = useState("");
  const [femaleLongSleeveLength, setFemaleLongSleeveLength] = useState("");
  const [femaleLongSleeveWidth, setFemaleLongSleeveWidth] = useState("");
  const [maleShoulder, setMaleShoulder] = useState("");
  const [shirt, setShirt] = useState("");
  const [chest, setChest] = useState("");
  const [tummy, setTummy] = useState("");
  const [neck, setNeck] = useState("");
  const [roundSleeve, setRoundSleeve] = useState("");
  const [maleShortSleeveLength, setMaleShortSleeveLength] = useState("");
  const [maleLongSleeveLength, setMaleLongSleeveLength] = useState("");
  const [pantLength, setPantLength] = useState("");
  const [pantHip, setPantHip] = useState("");
  const [pantWaist, setPantWaist] = useState("");
  const [pantLap, setPantLap] = useState("");
  const [pantKnee, setPantKnee] = useState("");
  const [pantAnkle, setPantAnkle] = useState("");
  const [measurementID, setMeasurementID] = useState("");
  let measurement = "";

  const handleMeasurementType = (e) => {
    setMeasurementType(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleGender = async (e) => {
    setSetting(true);
    setGenderState(false);
    setGender(e.target.value);
    let Gender = e.target.value;
    const res = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "POST",
      url: `${process.env.apiUrl}measurements/`,
      data: {
        user: id,
        measurementType: measurementType,
        gender: Gender,
        description: description,
      },
    });
    measurement = res.data._id;
    setMeasurementID(res.data._id);
    setTimeout(() => {
      setSetting(false);
      setGenderState(true);
    }, 2000);
  };

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
    if (gender === "M") {
      console.log(measurement);
      console.log(measurementID);
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
          method: "POST",
          url: `${process.env.apiUrl}menMeasurement/`,
          data: {
            user: id,
            measurement: measurementID,
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
    } else if (gender === "F") {
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
          method: "POST",
          url: `${process.env.apiUrl}womenMeasurement/`,
          data: {
            user: id,
            measurement: measurementID,
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
      }
    }
  };

  return (
    <>
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
        <form onSubmit={handleSubmit}>
          <Text
            textAlign="center"
            tag="header"
            textSize="title"
            m={{ b: "2rem" }}
          >
            Add your measurement
          </Text>

          <Label d="block" m={{ b: "1rem" }}>
            Measurement Type
            <select
              class="select"
              onChange={handleMeasurementType}
              value={measurementType}
            >
              <option>Select Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="XXL">Extra Extra Large</option>
            </select>
          </Label>

          <Label d="block" m={{ b: "1rem" }}>
            Measurement Description
            <Textarea
              value={description}
              onChange={handleDescription}
              placeholder="Description"
            />
          </Label>

          <Label d="block" m={{ b: "1.5rem" }}>
            Your Gender
            <select class="select" onChange={handleGender} value={gender}>
              <option>Select gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </Label>
          {setting ? (
            <Div m={{ t: "20px" }} d="flex" align="center" justify="center">
              <Icon name="Loading3" size="24px" />
            </Div>
          ) : null}

          {genderState === true && gender === "F" ? (
            <>
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
            </>
          ) : genderState === true && gender === "M" ? (
            <>
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
            </>
          ) : null}

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
            {loading ? "Loading" : "Add measurement"}
          </Button>
        </form>
      </Modal>
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
        Measurement Added Successfully
      </Notification>
    </>
  );
}
