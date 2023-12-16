import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const InsuranceCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriasans items-center justify-start mx-auto pb-[403px] w-full">
        <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start mt-[66px] md:px-10 sm:px-5 px-[115px] w-full">
          <div className="flex flex-col items-start justify-start w-[43%] md:w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-2 items-start justify-start w-[81%] md:w-full">
              <Text
                className="common-pointer sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/documents")}
              >
                Documents{" "}
              </Text>
              <Text
                className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Insurance Card</>
              </Text>
            </div>
            <Text
              className="mt-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Insurance Card
            </Text>
            <Text
              className="mt-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Please upload images of your Insurance Cards here
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1225px] mt-[23px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] p-[15px] rounded-tl-[20px] rounded-tr-[20px] w-full">
            <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] ml-4 md:ml-[0] md:mt-0 my-1 rounded-[5px] w-[25px]"></div>
            <Text
              className="md:ml-[0] ml-[81px] md:mt-0 my-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Added On
            </Text>
            <Text
              className="md:ml-[0] ml-[162px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Added By
            </Text>
            <Text
              className="md:ml-[0] ml-[106px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Company Name
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[34px] mt-3.5 w-[97%] md:w-full">
            <div className="bg-white-A700 border border-black-900 border-solid h-[25px] mb-[9px] md:mt-0 mt-1.5 rounded-[5px] w-[25px]"></div>
            <Text
              className="md:ml-[0] ml-[72px] md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansRegular24"
            >
              7/24/2020 3:39 PM
            </Text>
            <Text
              className="md:ml-[0] ml-[76px] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansRegular24"
            >
              Patient
            </Text>
            <Text
              className="md:ml-[0] ml-[130px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansRegular24"
            >
              Blue Cross Blue Shield
            </Text>
            <Img
              className="h-10 md:ml-[0] ml-[341px] w-10"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
          <Line className="bg-blue_gray-100_01 h-px mt-[11px] w-full" />
          <div className="flex flex-row gap-[70px] items-end justify-start md:ml-[0] ml-[25px] mt-3.5 w-[21%] md:w-full">
            <Img
              className="h-10 w-10"
              src="images/img_icroundplus.svg"
              alt="icroundplus"
            />
            <Text
              className="my-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansRegular24"
            >
              Add New Card
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceCardPage;
