import React from "react";

export interface ButtonProps {
  label: string;
  color: string | number;
}

const Button = ({ label, color }: ButtonProps) => {
  return <button style={{ color: `${color}` }}>{label}</button>;
};

export default Button;
