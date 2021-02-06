import { Anchor, Button, Div, Dropdown, Icon, Image, Tag, Text } from "atomize";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileLoader from "../../../components/parts/profile_loader";
import EmptyList from "../../../components/parts/empty_list";
import store from "../../../services/store";
import Link from "next/link";
import DeleteProduct from "../../../components/modals/delete_product";
import { useRouter } from "next/router";
import StoreLayout from "../../../components/layouts/store_layout";
import NumberFormat from "react-number-format";

export default function Store() {
  // Getting auth state and user data for structuring the navbar
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = store.getState().auth.token;
  const id = auth._id;
  //
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [hasStore, setHasStore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [product, setProduct] = useState({});
  const [type, setType] = useState("");
  const [showN, setShowN] = useState("");
  const [storeId, setStoreId] = useState("");

  const menuList = (
    <Div>
      <Link href="/products/339393">
        <Anchor d="block" p="5px 10px">
          Details
        </Anchor>
      </Link>
      <Anchor d="block" p="10px">
        Edit
      </Anchor>
      <Anchor textColor="danger800" d="block" p="10px">
        Update
      </Anchor>
    </Div>
  );

  useEffect(() => {
    const getUserItems = async () => {
      await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        proxy: {
          host: "104.236.174.88",
          port: 3128,
        },
        method: "GET",
        url: `${process.env.apiUrl}stores/`,
        params: {
          user: id,
        },
      })
        .then(async (store_res) => {
          console.log(store_res);
          if (store_res.data.length !== 0) {
            setHasStore(true);
            setType(store_res.data[0].type);
            setStoreId(store_res.data[0]._id);
            console.log(store_res.data[0]);
            await axios({
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              proxy: {
                host: "104.236.174.88",
                port: 3128,
              },
              method: "GET",
              url: `${process.env.apiUrl}products/`,
              params: {
                user: id,
              },
            })
              .then((res) => {
                setProducts(res.data);
                console.log(res.data);
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
  }, [id, token]);

  return (
    <>
      <StoreLayout>
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
            <Link href="/store/products/create">
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
                Create a product
              </Button>
            </Link>
          </Div>
        </Div>
        <Div w="100%" p="20px">
          {loading ? (
            <ProfileLoader />
          ) : hasStore ? (
            products.length === 0 ? (
              <>
                <EmptyList />

                <Link href="/profile/store/sell">
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
                    Sell a product
                  </Button>
                </Link>
              </>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Created on</th>
                    {type === "fabric" ? (
                      <th scope="col">Material Price</th>
                    ) : (
                      <>
                        <th scope="col">Material Price</th>{" "}
                        <th scope="col">Sowing Price</th>
                      </>
                    )}
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr>
                      <td data-label="Image">
                        <Image
                          w="60px"
                          h="60px"
                          style={{ objectSize: "cover" }}
                          src={p.productPictures[0].url}
                        />
                      </td>
                      <td data-label="Name">{p.productName}</td>
                      <td data-label="Created on">
                        {new Date(p.createdAt).toDateString()}
                      </td>
                      {type === "fabric" ? (
                        <td data-label="Material Price">
                          <NumberFormat
                            value={p.fabric.materialPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </td>
                      ) : (
                        <>
                          <td data-label="Material Price">
                            <NumberFormat
                              value={p.tailor.materialPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </td>{" "}
                          <td data-label="Sowing Price">
                            <NumberFormat
                              value={p.tailor.sowingPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </td>
                        </>
                      )}
                      <td data-label="Action">
                        <Dropdown
                          isOpen={showN === i + 1}
                          onClick={() => {
                            if (showN !== i + 1) {
                              setShowN(i + 1);
                            } else {
                              setShowN(0);
                            }
                          }}
                          border="none"
                          menu={
                            <Div>
                              <Link
                                href={`/product?p_id=${p._id}&s_id=${storeId}`}
                              >
                                <Anchor d="block" p="5px 10px">
                                  Details
                                </Anchor>
                              </Link>
                              <Link
                                href={`/store/products/${p._id}?action=edit`}
                              >
                                <Anchor d="block" p="10px">
                                  Edit
                                </Anchor>
                              </Link>
                              <Anchor
                                textColor="danger800"
                                d="block"
                                p="10px"
                                onClick={() => {
                                  setProduct(p._id);
                                  setShowDelete(true);
                                }}
                              >
                                Delete
                              </Anchor>
                            </Div>
                          }
                          w="fit-content"
                        >
                          more
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <Div
              w="100%"
              h="auto"
              p="30px"
              d="flex"
              align="center"
              justify="center"
            >
              <Div textAlign="center">
                <Image
                  src="https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-moderation.svg"
                  width="300px"
                  m={{ b: "20px" }}
                />
                <Text tag="header" textSize="title">
                  You don't have a store
                </Text>
                <Link href="/profile/store/start">
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
                </Link>
              </Div>
            </Div>
          )}
        </Div>
      </StoreLayout>
      <DeleteProduct
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        product={product}
      />
    </>
  );
}
