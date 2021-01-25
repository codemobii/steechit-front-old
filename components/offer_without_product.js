import {
  Div,
  Image,
  Input,
  Label,
  Text,
  Button,
  Col,
  Icon,
  Notification,
  Row,
  Textarea,
} from "atomize";
import axios from "axios";
import { get } from "lodash";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MainButton from "./buttons/main_button";
import EmptyList from "./parts/empty_list";
import RequestOfferForm from "./request_offer_form_tailor";
import RequestOfferFormTailor from "./request_offer_form_tailor";
import RequestOfferFormFabric from "./request_offer_form_fabric";

export default function OfferWithoutProduct(props) {
  const router = useRouter();
  const [product, setProduct] = useState(undefined);
  // Getting the url params
  const store_id = props.store_id;
  const store = props.store;

  const auth = useSelector((state) => state.auth);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [categoryState, setCategoryState] = useState([]);
  const [measurement, setMeasurement] = useState("");
  const [price, setPrice] = useState("");
  const [percentageDiscount, setPercentageDiscount] = useState("");
  const [imageUrlLogo, setImageUrlLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [images, setImages] = useState([]);

  const token = auth.token;
  const id = auth._id;
  const store_type = store.type || "fabric";

  useEffect(() => {
    getCategory();
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
    const data = {
      productName: productName,
      productDescription: productDescription,
      productCategory: productCategory,
      store: store_id,
      type: store_type,
      imageCategory: "sample",
      user: store.user,
      availableOptions: {
        measurement: null,
        price: price,
        percentageDiscount: percentageDiscount,
      },
      productPictures: images,
      feedback: {
        user: id,
      },
      tailor: {
        sowingPrice: "",
        materialPrice: "",
      },
      fabric: {
        materialPrice: "",
      },
      tag: [],
    };
    console.log(data);
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
        url: `${process.env.apiUrl}products/`,
        data,
      });

      setLoading(false);
      setCheckSubmit(true);

      setMessage("Product uploaded successfully");
      setShow(true);

      setProduct({
        id: res.data._id,
        name: res.data.productName,
        image: res.data.productPictures,
        price:
          res.data.tailor.materialPrice || res.data.fabric.materialPrice || "",
        description: res.data.productDescription,
      });

      setProductName("");
      setPrice("");
      setImages([]);
      setProductCategory("");
      setPercentageDiscount("");
      setProductDescription("");

      setMessage("Sample uploaded successfully");
      setShow(true);
    } catch (e) {
      const msg = get(e, "response.data.message") || e.message;
      console.log(msg);
      setLoading(false);
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
      url: `${process.env.apiUrl}categories/`,
    });
    setCategoryState(res.data);
  };

  return (
    <Div
      w="100%"
      d={{ xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" }}
      align="flex-start"
      justify="space-between"
      m={{ t: "30px" }}
    >
      <Div w={{ xs: "100%", sm: "100%", md: "34%", lg: "34%", xl: "34%" }}>
        <Div bg="#fff" shadow="3" rounded="md">
          <Div
            w="100%"
            p="15px"
            border={{ b: "1px solid" }}
            borderColor="gray400"
          >
            <Text tag="h1" textSize="subheading">
              Store
            </Text>
          </Div>
          <Link href={`/${store_id}`}>
            <Div cursor="pointer" d="flex" align="center" p="10px">
              <Image
                bgSize="cover"
                w="60px"
                h="60px"
                rounded="circle"
                src={store.storeLogo && store.storeLogo.url}
              />
              <Div p="20px">
                <Text textSize="title">{store.storeName}</Text>
                <Text>{store.address}</Text>
              </Div>
            </Div>
          </Link>
        </Div>
        <Div m={{ t: "20px", b: "20px" }} bg="#fff" shadow="3" rounded="md">
          <Div
            w="100%"
            p="15px"
            border={{ b: "1px solid" }}
            borderColor="gray400"
          >
            <Text tag="h1" textSize="subheading">
              Sample
            </Text>
          </Div>
          {product !== undefined ? (
            <>
              <Image
                bgSize="cover"
                w="100%"
                h="200px"
                src={product.image && product.image[0].url}
              />
              <Div p="20px">
                <Text textSize="title" m={{ b: "10px" }}>
                  {product.name}
                </Text>
                <Text m={{ b: "10px" }}>{product.price}</Text>
                <Div d="flex"></Div>
              </Div>
            </>
          ) : (
            <Text p="20px" tag="h1" textSize="subheading">
              You need to upload a sample
            </Text>
          )}
        </Div>
      </Div>
      <Div
        w={{ xs: "100%", sm: "100%", md: "63%", lg: "63%", xl: "63%" }}
        bg="#fff"
        shadow="3"
        rounded="md"
      >
        <Div
          w="100%"
          p="15px"
          border={{ b: "1px solid" }}
          borderColor="gray400"
        >
          <Text tag="h1" textSize="subheading">
            {product === undefined ? "Upload a sample" : "Request an offer"}
          </Text>
        </Div>
        <Div p="20px">
          {product === undefined ? (
            <>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size="12">
                    <Div d="block" m={{ b: "1rem" }}>
                      Sample Image(s)
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
                      Sample Name
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
                      Sample Category
                      <select
                        className="select"
                        onChange={handleProductCategory}
                        value={productCategory}
                      >
                        <option>Select category</option>
                        {categoryState.map((value) => (
                          <option key={value} value={value._id}>
                            {value.categoryName}
                          </option>
                        ))}
                      </select>
                    </Label>
                  </Col>

                  {/**
                   * <Col size="12">
                    <Label d="block" m={{ b: "1rem" }}>
                      Consideration Price
                      <Input
                        placeholder="Price"
                        value={price}
                        onChange={handlePrice}
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
                      Discount for product in percent
                      <Input
                        placeholder="Discount"
                        value={percentageDiscount}
                        onChange={handlePercentageDiscount}
                      />
                    </Label>
                  </Col> */}
                  <Col size="12">
                    <Label d="block" m={{ b: "1rem" }}>
                      Sample Descriptions
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
                  {loading ? "Uploading" : "Upload sample"}
                </Button>
              </form>
            </>
          ) : (
            <>
              {store_type === "fabric" ? (
                <RequestOfferFormFabric product={product.id} store={store_id} />
              ) : (
                <RequestOfferFormTailor product={product.id} store={store_id} />
              )}
            </>
          )}
        </Div>
      </Div>
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
    </Div>
  );
}
