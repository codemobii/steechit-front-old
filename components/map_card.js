import { Div } from "atomize";
import Link from "next/link";
import React from "react";

export default function MapCard({ store, image }) {
  return (
    <a href={`/${store._id}`}>
      <div style={{ width: "160px", position: "relative", cursor: "pointer" }}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: 6,
          }}
        />
        <p
          style={{
            fontSize: 15,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {store.storeName}
        </p>
        <p style={{ fontSize: 12, marginBottom: 10 }}>{store.address}</p>
      </div>
    </a>
  );
}
