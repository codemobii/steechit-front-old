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
  Textarea,
} from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SellProductForm({ user }) {
  const auth = useSelector((state) => state.auth);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [categoryState, setCategoryState] = useState([]);
  const [measurement, setMeasurement] = useState("");
  const [price, setPrice] = useState("");
  const [percentageDiscount, setPercentageDiscount] = useState("");
  const [imageUrlLogo, setImageUrlLogo] = useState("");
  const [storeID, setStoreID] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [images, setImages] = useState([]);

  const token = auth.token;
  const id = auth._id;

  useEffect(() => {
    getCategory();
    getStore();
  }, []);

  let handleProductName = (e) => {
    setProductName(e.target.value);
  };

  let handleProductDescription = (e) => {
    setProductDescription(e.target.value);
  };

  let handleProductCategory = (e) => {
    setProductCategory(e.target.value);
  };

  let handleMeasurement = (e) => {
    setMeasurement(e.target.value);
  };

  let handlePrice = (e) => {
    setPrice(e.target.value);
  };

  let handlePercentageDiscount = (e) => {
    setPercentageDiscount(e.target.value);
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
        method: "POST",
        url: `https://steechit-api.herokuapp.com/products/`,
        data: {
          productName: productName,
          productDescription: productDescription,
          productCategory: productCategory,
          store: storeID,
          user: id,
          availableOptions: {
            measurement: null,
            price: price,
            percentageDiscount: percentageDiscount,
          },
          productPictures: images,
          feedback: {
            user: id,
          },
        },
      });

      setLoading(false);
      setCheckSubmit(true);

      setMessage("Product uploaded successfully");
      setShow(true);

      setProductName("");
      setPrice("");
      setImages([]);
      setProductCategory("");
      setPercentageDiscount("");
      setProductDescription("");

      console.log(res);
    } catch (e) {
      const msg = get(e, "response.data.message") || e.message;
      console.log(msg);
      setMessage(msg);
      setShow(true);
    }
  };

  const handleProductImageUpload = async (event) => {
    setUploading(true);
    if (images.length === 4) {
      setMessage("Your can only add four (4) images for product");
      setShow(true);
      setUploading(false);
    } else {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image, image.name, image.size, image.type);
      let save = await axios.post(
        "https://steechit-image-manager.herokuapp.com/upload",
        formData
      );
      setImageUrlLogo(save.data.link);

      var get_images = images;
      get_images.push({ url: save.data.link });
      setImages(get_images);

      console.log(images);

      setMessage("Image uploaded successfully");
      setShow(true);
      setUploading(false);
    }
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
      url: `https://steechit-api.herokuapp.com/categories/`,
    });
    setCategoryState(res.data);
  };

  const getStore = async () => {
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
      url: `https://steechit-api.herokuapp.com/stores/`,
      params: {
        user: id,
      },
    });
    setStoreID(res.data[0]._id);
    console.log(res.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size="12">
            <Div d="block" m={{ b: "1rem" }}>
              Product Image(s)
              <Div
                d="flex"
                style={{ flexFlow: "wrap" }}
                align="center"
                m={{ t: "0.5rem" }}
                justify="flex-start"
                pos="relative"
              >
                {images.map((i) => (
                  <Div
                    key={i}
                    pos="relative"
                    w="120px"
                    h="120px"
                    border="1px solid"
                    borderColor="gray300"
                    rounded="md"
                    d="flex"
                    align="center"
                    pos="relative"
                    overflow="hidden"
                    justify="center"
                    m={{ r: "1rem", b: "1rem" }}
                  >
                    <Image
                      pos="absolute"
                      top="0"
                      left="0"
                      w="100%"
                      h="100%"
                      src={i.url}
                      style={{ objectFit: "cover" }}
                    />
                    <Icon
                      zIndex="10"
                      name="CloseSolid"
                      size="30px"
                      color="gray600"
                      onClick={() => {
                        var let_imgs = images;
                        var a = let_imgs.indexOf(i, 0);
                        var new_imgs = let_imgs.splice(0, a);
                        setImages(new_imgs);
                        console.log(new_imgs);
                      }}
                    />
                  </Div>
                ))}
                <Div
                  pos="relative"
                  w="120px"
                  h="120px"
                  border="1px solid"
                  borderColor="gray300"
                  rounded="md"
                  d="flex"
                  align="center"
                  justify="center"
                  pos="relative"
                  overflow="hidden"
                  m={{ t: "-15px" }}
                >
                  <Icon
                    name={uploading ? "Loading3" : "Add"}
                    size="50px"
                    color="gray600"
                  />
                  <input
                    type="file"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      cursor: "pointer",
                      opacity: "0",
                    }}
                    onChange={handleProductImageUpload}
                  />
                </Div>
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
              Product Name
              <Input
                placeholder="Product Name"
                value={productName}
                onChange={handleProductName}
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
              Product Category
              <select
                className="select"
                onChange={handleProductCategory}
                value={productCategory}
              >
                <option>Select state</option>
                {categoryState.map((value) => (
                  <option key={value} value={value._id}>
                    {value.categoryName}
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
              Product Price
              <Input placeholder="Price" value={price} onChange={handlePrice} />
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
              Discount for product in percent
              <Input
                placeholder="Discount"
                value={percentageDiscount}
                onChange={handlePercentageDiscount}
              />
            </Label>
          </Col>
          <Col size="12">
            <Label d="block" m={{ b: "1rem" }}>
              Product Description
              <Textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={handleProductDescription}
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
          {loading ? "Uploading" : "Add product"}
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
