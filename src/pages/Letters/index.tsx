import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const LettersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[531px] w-full">
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1224px] mx-auto md:px-5 w-full">
            <div className="flex flex-row font-inriasans gap-2 items-start justify-start w-[26%] md:w-full">
              <Text
                className="common-pointer mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/documents")}
              >
                Documents{" "}
              </Text>
              <Text
                className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Letters</>
              </Text>
            </div>
            <Text
              className="mt-2 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Letters
            </Text>
            <div className="bg-blue_gray-100 flex flex-row font-inriasans md:gap-10 gap-[87px] items-center justify-start mt-[19px] p-[18px] rounded-tl-[20px] rounded-tr-[20px] w-full">
              <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] ml-[13px] rounded-[5px] w-[25px]"></div>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Letter Title
              </Text>
            </div>
            <Text
              className="mt-[11px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              No Letters to Display
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LettersPage;
