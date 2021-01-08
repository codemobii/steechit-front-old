import {
  Button,
  Col,
  Div,
  Icon,
  Image,
  Input,
  Label,
  Notification,
  Radiobox,
  Row,
  Text,
} from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CreateStoreForm({ user }) {
  const auth = useSelector((state) => state.auth);

  const token = auth.token;
  const id = auth._id;

  const router = useRouter();

  const [storeName, setStoreName] = useState(user.storeName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [stateU, setStateU] = useState("");
  const [getState, setGetState] = useState([]);
  const [address, setAddress] = useState(user.address);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [imageUrlLogo, setImageUrlLogo] = useState("");
  const [imageUrlBanner, setImageUrlBanner] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("0");

  useEffect(() => {
    const getPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((current) => {
          setLatitude(current.coords.latitude);
          setLongitude(current.coords.longitude);
        });
      }
    };

    const getCountries = async () => {
      const res = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}countries/`,
      });
      setCountry(res.data[0]._id);
    };

    const getStates = async () => {
      const res = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}states/`,
      });
      setGetState(res.data);
    };

    const getCategory = async () => {
      const res = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}categories/`,
      });
      setCategoryState(res.data);
      console.log(res.data);
    };

    getCountries();
    getStates();
    getCategory();
    getPosition();
  }, [token, latitude, longitude]);

  let handleStoreName = (e) => {
    setStoreName(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePhone = (e) => {
    setPhone(e.target.value);
  };

  let handleState = (e) => {
    setStateU(e.target.value);
  };

  let handleAddress = (e) => {
    setAddress(e.target.value);
  };

  let handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  let handleCity = (e) => {
    setCity(e.target.value);
  };

  let handleCategory = (e) => {
    setCategory(e.target.value);
  };

  //---- Upload image

  const handleStoreLogoUpload = async (event) => {
    const image = event.target.files[0];
    setUploadingLogo(true);
    const formData = new FormData();
    formData.append("image", image, image.name, image.size, image.type);
    await axios
      .post("https://steechit-image-manager.herokuapp.com/upload", formData)
      .then((saved) => {
        setMessage("Logo upload was successful.");
        setShow(true);
        setImageUrlLogo(saved.data.link);
      })
      .catch((error) => {
        setMessage("Something went wrong");
        setShow(true);
      })
      .finally(() => {
        setUploadingLogo(false);
      });
  };

  const handleStoreBannerUpload = async (event) => {
    const image = event.target.files[0];
    setUploadingBanner(true);
    const formData = new FormData();
    formData.append("image", image, image.name, image.size, image.type);
    await axios
      .post("https://steechit-image-manager.herokuapp.com/upload", formData)
      .then((save) => {
        setImageUrlBanner(save.data.link);
        setMessage("Store banner uploaded successfully");
        setShow(true);
      })
      .catch(() => {
        setMessage("Something went wrong");
        setShow(true);
      })
      .finally(() => {
        setUploadingBanner(false);
      });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (role === "0") {
      setMessage("Please select store role");
      setShow(true);
    } else {
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
          method: "POST",
          url: `${process.env.apiUrl}stores/`,
          data: {
            role_id: parseFloat(role),
            user: id,
            storeName: storeName,
            phone: phone,
            email: email,
            storeLogo: {
              thumb: "",
              url: imageUrlLogo,
            },
            storeBanner: {
              thumb: "",
              url: imageUrlBanner,
            },
            country: country,
            state: stateU,
            geolocation: {
              long: longitude,
              lat: latitude,
            },
            city: city,
            address: address,
            zipCode: zipCode,
            productCategories: category,
          },
        });

        setLoading(false);
        setMessage("Store created successfully");
        setShow(true);

        router.push("/profile/store");
        console.log(res);
      } catch (e) {
        const msg = get(e, "response.data.message") || e.message;
        console.log(msg);
        setMessage(msg);
        setLoading(false);
        setShow(true);
      }
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
              <Image
                src={imageUrlBanner}
                w="100%"
                h="150px"
                rounded="lg"
                pos="absolute"
                top="0"
                left="0"
                style={{ objectFit: "cover" }}
              />

              <Div
                pos="absolute"
                top="0"
                left="0"
                w="100%"
                h="150"
                rounded="lg"
                bg="red"
              />
              <div
                className="selectImageIcon"
                style={{ bottom: 20, right: 10 }}
              >
                <input
                  type="file"
                  ml={10}
                  className="selectImage"
                  onChange={handleStoreBannerUpload}
                />
              </div>
              <Div
                m={{ t: "3rem" }}
                rounded="circle"
                pos="relative"
                bg="gray200"
                w="120px"
                h="120px"
              >
                <Image
                  pos="absolute"
                  rounded="circle"
                  overflow="hidden"
                  w="100%"
                  h="100%"
                  style={{ objectFit: "cover" }}
                  left="0"
                  right="0"
                  src={imageUrlLogo}
                  shadow="3"
                />
                {uploadingLogo ? (
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
                    onChange={handleStoreLogoUpload}
                    src={imageUrlLogo}
                  />
                </div>
              </Div>
            </Div>
          </Col>
          <Col size="12">
            <Text>Store type?</Text>
            <Div d="flex">
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => setRole("2")}
                  checked={role === "2"}
                  name="count"
                />
                Fabric Store
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => setRole("3")}
                  checked={role === "3"}
                  name="count"
                />
                Tailor
              </Label>
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
              Store name
              <Input
                placeholder="Store name"
                value={storeName}
                onChange={handleStoreName}
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
                placeholder="Email address"
                value={email}
                onChange={handleEmail}
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
                type="number"
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
              <select class="select" onChange={handleState} value={stateU}>
                <option>Select state</option>
                {getState.map((item, key) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
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
              City
              <Input
                placeholder="Lagos"
                type="text"
                value={city}
                onChange={handleCity}
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
              Zip Code
              <Input
                placeholder="1001010"
                value={zipCode}
                onChange={handleZipCode}
              />
            </Label>
          </Col>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              Address
              <Input
                placeholder="Somewhere, somethere"
                value={address}
                onChange={handleAddress}
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
          {loading ? "Creating store" : "Create Store"}
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
