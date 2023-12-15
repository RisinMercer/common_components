import { Button as MUIButton } from "@mui/material";
import React from "react";
import { ButtonPropsTypes } from "components/Button/ButtonPropsTypes";

/**
 * Primary UI component for user interaction
 */
const Button = ({ variant, color, size, label }: ButtonPropsTypes) => {
  return (
    <MUIButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "medium"}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
