import { ButtonProps } from "@mui/material/Button";

export interface ButtonPropsTypes extends Omit<ButtonProps, "color"> {
  label: string;
  color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
