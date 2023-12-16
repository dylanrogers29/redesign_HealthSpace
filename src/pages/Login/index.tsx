import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex font-inriaserif h-[1024px] justify-end mx-auto relative w-full">
        <div className="md:h-[1024px] h-[1367px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute md:h-[1024px] h-[1367px] inset-y-[0] my-auto pb-[343px] right-[0] w-[59%] md:w-full">
            <Img
              className="absolute h-[1024px] object-cover right-[0] top-[0] w-[72%]"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Img
              className="absolute h-[1024px] left-[0] object-cover top-[0]"
              src="images/img_polygon2.png"
              alt="polygonTwo"
            />
          </div>
          <div className="absolute bg-pink-900 flex md:flex-col flex-row gap-[55px] items-end justify-start left-[0] p-[27px] sm:px-5 top-[0] w-[59%]">
            <Img
              className="h-[71px] sm:h-auto md:ml-[0] ml-[29px] md:mt-0 mt-2 object-cover w-[46%] md:w-full"
              src="images/img_usclogohorizontalrgbgrev.png"
              alt="usclogohorizont"
            />
            <Text
              className="md:mt-0 mt-[39px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 tracking-[1.65px]"
              size="txtInriaSerifBold33"
            >
              MyHealthSpace
            </Text>
          </div>
        </div>
        <Img
          className="absolute h-[188px] object-cover right-[39%] top-[0]"
          src="images/img_polygon3.png"
          alt="polygonThree"
        />
        <div className="absolute bottom-[7%] flex flex-col items-end justify-start left-[15%] md:px-5 w-[35%]">
          <div className="flex flex-col font-inriaserif items-start justify-start mr-[5px] w-[99%] md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
              size="txtInriaSerifBold50"
            >
              Welcome
            </Text>
            <Text
              className="mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInriaSerifRegular25"
            >
              Enter your USC account credentials
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start mt-4 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Username:
                </Text>
                <div className="border border-black-900 border-solid h-[42px] mt-[7px] rounded-[10px] w-full"></div>
                <Text
                  className="mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Password:
                </Text>
                <div className="border border-black-900 border-solid h-[42px] mt-2.5 rounded-[10px] w-full"></div>
              </div>
            </div>
          </div>
          <Text
            className="mt-3 text-black-900 text-xl underline"
            size="txtInriaSansRegular20"
          >
            Forgot username/password
          </Text>
          <div className="flex flex-col font-inriasans items-center justify-start mr-[5px] mt-11 w-[99%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Date of birth:
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2.5 w-[84%] md:w-full">
                <Text
                  className="mb-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Month:
                </Text>
                <Text
                  className="sm:ml-[0] ml-[172px] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Day:
                </Text>
                <Text
                  className="mb-0.5 sm:ml-[0] ml-[66px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Year:
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[5px] w-full">
                <Img
                  className="h-[42px]"
                  src="images/img_month.svg"
                  alt="month_One"
                />
                <Img
                  className="h-[42px]"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Img
                  className="h-[42px]"
                  src="images/img_month.svg"
                  alt="year_One"
                />
              </div>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold font-inriaserif leading-[normal] min-w-[184px] mt-[47px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/homepage")}
            shape="round"
            color="pink_900"
            size="sm"
            variant="fill"
          >
            Log In
          </Button>
          <Text
            className="mt-12 text-black-900 text-xl"
            size="txtInriaSansRegular20"
          >
            <span className="text-black-900 font-inriasans text-left font-normal">
              Don’t have an account?{" "}
            </span>
            <a
              href="javascript:"
              className="text-black-900 font-inriasans text-left font-normal underline"
            >
              Register here.
            </a>
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
