import { Button, Icon } from "atomize";
import React from "react";

export default function BlackButton({
  title = "Button",
  onClick,
  loading = false,
}) {
  return (
    <Button
      type="button"
      bg="black700"
      hoverBg="black800"
      onClick={onClick}
      prefix={
        loading ? (
          <Icon name="Loading3" size="18px" color="white" m={{ r: "0.5rem" }} />
        ) : null
      }
    >
      {title}
    </Button>
  );
}
