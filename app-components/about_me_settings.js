import {
  Button,
  Col,
  Div,
  Icon,
  Image,
  Input,
  Label,
  Notification,
  Row,
} from "atomize";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import store from "../services/store";
import axios from "axios";
import { get } from "lodash";

export default function AboutMeSettings({ user }) {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const token = store.getState().auth.token;
  const id = auth._id;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const [gender, setGender] = useState(user.gender);
  const [stateU, setStateU] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userImg, setUserImg] = useState(user.imageUrl);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(user.phone);

  let handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  let handleLastName = (e) => {
    setLastName(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePhone = (e) => {
    setPhone(e.target.value);
  };

  let handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  let handleGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  let handleCountry = (e) => {
    setCountry(e.target.value);
  };

  let handleState = (e) => {
    setStateU(e.target.value);
  };

  const handleImageUpload = async (event) => {
    if (event.target.files[0] !== "") {
      setUploading(true);
      const image = event.target.files[0];
      console.log(image);
      const formData = new FormData();
      formData.append("image", image, image.name, image.size, image.type);
      let save = await axios.post(
        "https://steechit-image-manager.herokuapp.com/upload",
        formData
      );
      const Img_url = save.data.link;
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
          url: `${process.env.apiUrl}users/${id}`,
          data: {
            avatar: {
              url: Img_url,
            },
          },
        });

        console.log(res);

        setUserImg(Img_url);

        setMessage("Image Upload Successful");
        setShow(true);
        setUploading(false);
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        console.log(e);
        setUploading(false);
        setMessage(msg);
        setShow(true);
      }
    } else {
      setMessage("Please select an image");
      setShow(true);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
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
        url: `${process.env.apiUrl}users/${id}`,
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          dateOfBirth: dateOfBirth,
          gender: gender,
          country: country,
          state: stateU,
        },
      });

      setLoading(false);

      setMessage("Updated successfully");
      setShow(true);
      console.log(res);
    } catch (e) {
      const msg = get(e, "response.data.message") || e.message;
      console.log(e);

      setMessage(msg);
      setShow(true);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size="12">
            <Div
              d="flex"
              align="center"
              justify="center"
              m={{ t: "1rem", b: "3rem" }}
              pos="relative"
            >
              <Div pos="relative" w="120px" h="120px">
                <Image
                  pos="absolute"
                  rounded="circle"
                  overflow="hidden"
                  w="100%"
                  h="100%"
                  style={{ objectFit: "cover" }}
                  left="0"
                  right="0"
                  src={userImg}
                  shadow="3"
                />
                {uploading ? (
                  <Div
                    rounded="circle"
                    className="overlay_light"
                    d="flex"
                    align="center"
                    justify="center"
                  >
                    <Icon name="Loading3" size="32px" />
                  </Div>
                ) : null}
                <div className="selectImageIcon">
                  <input
                    type="file"
                    className="selectImage"
                    onChange={handleImageUpload}
                  />
                </div>
              </Div>
            </Div>
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
              First name
              <Input
                placeholder="John"
                value={firstName}
                onChange={handleFirstName}
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
              Last name
              <Input
                placeholder="Doe"
                value={lastName}
                onChange={handleLastName}
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
              Phone number
              <Input
                placeholder="070********"
                value={phone}
                onChange={handlePhone}
                disabled
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
              Email address
              <Input
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={handleEmail}
                disabled
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
              Date of Birth
              <Input
                placeholder="Date of birth"
                type="date"
                value={dateOfBirth}
                onChange={handleDateOfBirth}
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
              Gender
              <select class="select" onChange={handleGender} value={gender}>
                <option>Select gender</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
              </select>
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
              Country
              <Input
                placeholder="Nigeria"
                value={country}
                onChange={handleCountry}
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
              State
              <Input
                placeholder="Lagos"
                value={stateU}
                onChange={handleState}
              />
            </Label>
          </Col>
        </Row>
        <Button
          fontFamily="primary"
          bg="warning700"
          justify="center"
          m={{ t: "1rem" }}
          prefix={
            loading ? (
              <Icon
                name="Loading3"
                size="18px"
                color="white"
                m={{ r: "0.5rem" }}
              />
            ) : null
          }
        >
          {loading ? "Saving" : "Save changes"}
        </Button>
      </form>
      <Notification
        bg="warning700"
        isOpen={show}
        onClose={() => setShow(false)}
        prefix={
          <Icon
            name="CloseSolid"
            color="white"
            size="18px"
            m={{ r: "0.5rem" }}
          />
        }
      >
        {message}
      </Notification>
    </>
  );
}
