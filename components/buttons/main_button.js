import { Button, Icon } from "atomize";
import React from "react";

export default function MainButton({
  title = "Button",
  onClick,
  loading = false,
}) {
  return (
    <Button
      type="button"
      bg="warning700"
      hoverBg="warning800"
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
