import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { LuFlashlight } from "react-icons/lu";

export type ButtonProps = {
  children?: React.ReactNode | "string";
  onClick?: React.MouseEventHandler;
  tipo?: "theme" | "scrollUp";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  tipo,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button className={className} {...rest} onClick={onClick}>
      {tipo === "theme" && <LuFlashlight className="text-2xl text-primary" />}
      {tipo === "scrollUp" && (
        <FiArrowUpCircle className="text-4xl text-primary" />
      )}
      {children}
    </button>
  );
};

export default Button;
