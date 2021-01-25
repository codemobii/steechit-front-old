import { Button } from "atomize";
import React from "react";

export default function LightButton({
  title = "Button",
  onClick,
  loading = false,
}) {
  return (
    <Button
      bg="transparent"
      textColor="warning800"
      hoverBg="warning200"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
