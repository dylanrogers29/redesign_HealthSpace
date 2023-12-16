import React from "react";

const sizeClasses = {
  txtInriaSerifRegular20: "font-inriaserif font-normal",
  txtInriaSerifRegular40: "font-inriaserif font-normal",
  txtInriaSansBold30: "font-bold font-inriasans",
  txtInriaSerifRegular24: "font-inriaserif font-normal",
  txtInterRegular40: "font-inter font-normal",
  txtInriaSansBold32: "font-bold font-inriasans",
  txtInriaSerifRegular25: "font-inriaserif font-normal",
  txtInterSemiBold20Gray400: "font-inter font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtInriaSansRegular24Gray900: "font-inriasans font-normal",
  txtInriaSansRegular18: "font-inriasans font-normal",
  txtInriaSerifBold33: "font-bold font-inriaserif",
  txtInriaSerifBold50: "font-bold font-inriaserif",
  txtInriaSansRegular32: "font-inriasans font-normal",
  txtInriaSansRegular30: "font-inriasans font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtInriaSansBold30WhiteA700: "font-bold font-inriasans",
  txtInriaSansBold40: "font-bold font-inriasans",
  txtInriaSerifRegular30: "font-inriaserif font-normal",
  txtInterRegular30: "font-inter font-normal",
  txtInriaSansBold24: "font-bold font-inriasans",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInriaSerifBold48: "font-bold font-inriaserif",
  txtInriaSansRegular30Black900: "font-inriasans font-normal",
  txtInriaSerifBold24: "font-bold font-inriaserif",
  txtInterBlack24: "font-black font-inter",
  txtInriaSansBold24Black900: "font-bold font-inriasans",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInriaSansRegular20: "font-inriasans font-normal",
  txtInriaSansLight24: "font-inriasans font-light",
  txtInriaSansRegular25: "font-inriasans font-normal",
  txtInriaSansRegular24: "font-inriasans font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
