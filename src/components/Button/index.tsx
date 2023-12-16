import React from "react";

const shapes = { round: "rounded-[15px]", square: "rounded-none" } as const;
const variants = {
  fill: {
    pink_900: "bg-pink-900 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    white_A700: "bg-white-A700 text-black-900",
    gray_100: "bg-gray-100",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-black-900",
    gray_700: "border-2 border-gray-700 border-solid",
    white_A700: "border border-solid border-white-A700",
  },
} as const;
const sizes = {
  xs: "p-[5px]",
  sm: "p-[9px]",
  md: "pl-[7px] pr-2 py-3.5",
  lg: "p-4",
  xl: "pl-[15px] pr-4 py-5",
  "2xl": "p-[23px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
