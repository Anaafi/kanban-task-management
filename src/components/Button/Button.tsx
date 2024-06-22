import React from "react";

import { cn } from "../../libs";
import { Spinner } from "../Spinner";
// import { Spinner } from '../Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

const styles = {
  primary: "px-6 py-4 bg-purple-1000  text-white rounded-full",
  secondary: "px-6 py-4 bg-purple-5000  text-purple-1000 rounded-full",
  tertiary: "px-4 py-3 w-[92px] border border-gray-300 bg-white rounded-md",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  isLoading,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "flex justify-center items-center gap-2 w-full",
        className,
        styles[`${variant}`]
      )}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};
