import React from "react";

import { Button, Img, List, Text } from "components";

type ScheduleRescheduleCalendarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "septembercounter"
  | "mo"
  | "tu"
  | "we"
  | "th"
  | "fr"
  | "sa"
  | "su"
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"
  | "ten"
  | "eleven"
  | "twelve"
  | "thirteen"
  | "fourteen"
  | "fifteen"
  | "sixteen"
  | "seventeen"
  | "eighteen"
  | "nineteen"
  | "twenty"
  | "twentyone"
  | "twentytwo"
  | "twentythree"
  | "twentyfour"
  | "twentyfive"
  | "twentysix"
  | "twentyseven"
  | "twentyeight"
  | "twentynine"
  | "thirty"
  | "thirtyone"
  | "one1"
  | "two1"
  | "three1"
  | "four1"
> &
  Partial<{
    septembercounter: string;
    mo: string;
    tu: string;
    we: string;
    th: string;
    fr: string;
    sa: string;
    su: string;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    nine: string;
    ten: string;
    eleven: string;
    twelve: string;
    thirteen: string;
    fourteen: string;
    fifteen: string;
    sixteen: string;
    seventeen: string;
    eighteen: string;
    nineteen: string;
    twenty: string;
    twentyone: string;
    twentytwo: string;
    twentythree: string;
    twentyfour: string;
    twentyfive: string;
    twentysix: string;
    twentyseven: string;
    twentyeight: string;
    twentynine: string;
    thirty: string;
    thirtyone: string;
    one1: string;
    two1: string;
    three1: string;
    four1: string;
  }>;

const ScheduleRescheduleCalendar: React.FC<ScheduleRescheduleCalendarProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
            size="txtInterBlack24"
          >
            {props?.septembercounter}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-[46px] w-[46px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Img
              className="h-[46px] w-[46px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[-1px] items-center justify-start w-auto sm:w-full">
          <div className="flex sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm w-[21px]"
                size="txtInterSemiBold14"
              >
                {props?.mo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm"
                size="txtInterSemiBold14"
              >
                {props?.tu}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm w-6"
                size="txtInterSemiBold14"
              >
                {props?.we}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm"
                size="txtInterSemiBold14"
              >
                {props?.th}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm w-3.5"
                size="txtInterSemiBold14"
              >
                {props?.fr}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm"
                size="txtInterSemiBold14"
              >
                {props?.sa}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-16">
              <Text
                className="text-black-900 text-center text-sm"
                size="txtInterSemiBold14"
              >
                {props?.su}
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col items-center w-full"
            orientation="vertical"
          >
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.one}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.two}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.three}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.four}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.five}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.six}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.seven}
              </Button>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.eight}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.nine}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.ten}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.eleven}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twelve}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.thirteen}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.fourteen}
              </Button>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.fifteen}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.sixteen}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.seventeen}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.eighteen}
              </Button>
              <Button
                className="border border-solid border-white-A700 cursor-pointer font-inter font-semibold h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="pink_900"
                size="2xl"
                variant="fill"
              >
                {props?.nineteen}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twenty}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentyone}
              </Button>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentytwo}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentythree}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentyfour}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentyfive}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentysix}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentyseven}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentyeight}
              </Button>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[-1px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.twentynine}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.thirty}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="outline"
              >
                {props?.thirtyone}
              </Button>
              <Button
                className="!text-gray-500 border border-solid border-white-A700 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="gray_100"
                size="2xl"
                variant="fill"
              >
                {props?.one1}
              </Button>
              <Button
                className="!text-gray-500 border border-solid border-white-A700 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="gray_100"
                size="2xl"
                variant="fill"
              >
                {props?.two1}
              </Button>
              <Button
                className="!text-gray-500 border border-solid border-white-A700 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="gray_100"
                size="2xl"
                variant="fill"
              >
                {props?.three1}
              </Button>
              <Button
                className="!text-gray-500 border border-solid border-white-A700 cursor-pointer font-inter h-16 leading-[normal] text-center text-sm w-16"
                shape="square"
                color="gray_100"
                size="2xl"
                variant="fill"
              >
                {props?.four1}
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

ScheduleRescheduleCalendar.defaultProps = {
  septembercounter: "September 2023",
  mo: "Mo",
  tu: "Tu",
  we: "We",
  th: "Th",
  fr: "Fr",
  sa: "Sa",
  su: "Su",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  eleven: "11",
  twelve: "12",
  thirteen: "13",
  fourteen: "14",
  fifteen: "15",
  sixteen: "16",
  seventeen: "17",
  eighteen: "18",
  nineteen: "19",
  twenty: "20",
  twentyone: "21",
  twentytwo: "22",
  twentythree: "23",
  twentyfour: "24",
  twentyfive: "25",
  twentysix: "26",
  twentyseven: "27",
  twentyeight: "28",
  twentynine: "29",
  thirty: "30",
  thirtyone: "31",
  one1: "1",
  two1: "2",
  three1: "3",
  four1: "4",
};

export default ScheduleRescheduleCalendar;
