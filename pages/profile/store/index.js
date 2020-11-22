import { Button, Div, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import ProfileLayout from "../../../components/profile_layout";
import ProfileLoader from "../../../components/profile_loader";
import EmptyList from "../../../components/empty_list";
import store from "../../../services/store";
import Link from "next/link";
import DeleteProduct from "../../../components/delete_product";

export default function Store() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;

  const [products, setProducts] = useState([]);
  const [hasStore, setHasStore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getUserItems = async () => {
      await Axios({
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
      })
        .then(async (store_res) => {
          console.log(store_res);
          if (store_res.data.length !== 0) {
            setHasStore(true);
            await Axios({
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              proxy: {
                host: "104.236.174.88",
                port: 3128,
              },
              method: "GET",
              url: `https://steechit-api.herokuapp.com/products/`,
              params: {
                user: id,
              },
            })
              .then((res) => {
                setProducts(res.data);
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUserItems();
  }, [id, token, dispatch, products]);

  return (
    <>
      <ProfileLayout>
        <Div
          p="20px"
          style={{ borderBottom: "1px solid #ccc" }}
          d="flex"
          justify="space-between"
          align="center"
        >
          <Text
            tag="header"
            d={{
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            textSize="title"
          >
            My products
          </Text>

          <Div
            w={{
              xs: "100%",
              sm: "100%",
              md: "auto",
              lg: "auto",
              xl: "auto",
            }}
            d="flex"
            align="center"
          >
            <Link href="/profile/store">
              <Button
                h="3rem"
                p={{ x: "1.25rem" }}
                w="100%"
                textSize="body"
                textColor="white"
                bg="black700"
                hoverBg="black800"
                hoverBorderColor="info900"
                m={{ r: "0.5rem" }}
              >
                Catalogue
              </Button>
            </Link>
            <Link href="/profile/store/bookings">
              <Button
                w="100%"
                h="3rem"
                p={{ x: "1.25rem" }}
                textSize="body"
                textColor="info700"
                hoverTextColor="info900"
                bg="white"
                hoverBg="info200"
                hoverBorderColor="info900"
                m={{ r: "0.5rem" }}
              >
                Bookings
              </Button>
            </Link>
          </Div>
        </Div>
        <Div w="100%" p="20px">
          {loading ? (
            <ProfileLoader />
          ) : hasStore ? (
            products.length === 0 ? (
              <EmptyList />
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr>
                      <td data-label="Image">
                        <Image
                          w="60px"
                          h="60px"
                          objectFit="cover"
                          src={p.productPictures[0].url}
                        />
                      </td>
                      <td data-label="Name">{p.productName}</td>
                      <td data-label="Price">N{p.availableOptions[0].price}</td>
                      <td data-label="Action">
                        <Div d="flex">
                          <Button
                            bg="gray200"
                            textColor="medium"
                            m={{ r: "1rem" }}
                            onClick={() => {
                              setProduct({ name: p.productName, id: p._id });
                              setShowDelete(true);
                            }}
                          >
                            Delete
                          </Button>
                          <Button bg="info700">Edit</Button>
                        </Div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <Div w="100%" h="300px" d="flex" align="center" justify="center">
              <Div textAlign="center">
                <Image
                  src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg"
                  width="300px"
                  m={{ b: "20px" }}
                />
                <Text tag="header" textSize="title">
                  You don't have a store
                </Text>
                <Button
                  prefix={
                    <Icon
                      name="Store"
                      size="16px"
                      color="white"
                      m={{ r: "0.5rem" }}
                    />
                  }
                  bg="warning700"
                  hoverBg="warning800"
                  rounded="circle"
                  p={{ r: "1.5rem", l: "1rem" }}
                  shadow="3"
                  hoverShadow="4"
                  m={{ t: "2rem", r: "auto", l: "auto" }}
                >
                  Create your store
                </Button>
              </Div>
            </Div>
          )}
        </Div>
      </ProfileLayout>
      <DeleteProduct
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        product={product}
      />
    </>
  );
}
