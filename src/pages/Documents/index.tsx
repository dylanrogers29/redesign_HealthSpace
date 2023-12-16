import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const DocumentsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriasans items-center justify-start mx-auto pb-[99px] w-full">
        <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="md:gap-5 gap-[68px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1218px] min-h-[auto] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col md:gap-10 gap-[63px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInriaSerifBold48"
              >
                Documents
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtInriaSansRegular32"
              >
                Your go-to spot for documents from your Doctors @ USC.
              </Text>
            </div>
            <div
              className="common-pointer bg-blue_gray-100 flex flex-1 flex-col gap-[15px] items-center justify-start p-6 sm:px-5 rounded-[20px] w-full"
              onClick={() => navigate("/forms")}
            >
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInriaSansBold40"
              >
                Forms
              </Text>
              <Img
                className="h-[140px] mb-2 w-[140px]"
                src="images/img_fluentform20filled.svg"
                alt="fluentform20fil"
              />
            </div>
            <div
              className="common-pointer bg-blue_gray-100 flex flex-1 flex-col gap-[15px] items-center justify-center p-6 sm:px-5 rounded-[20px] w-full"
              onClick={() => navigate("/letters")}
            >
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInriaSansBold40"
              >
                Letters
              </Text>
              <Img
                className="h-[140px] mb-[9px] w-[140px]"
                src="images/img_clarityenvelopesolid.svg"
                alt="clarityenvelope"
              />
            </div>
            <div
              className="common-pointer bg-blue_gray-100 flex flex-1 flex-col gap-[19px] items-center justify-center p-[23px] sm:px-5 rounded-[20px] w-full"
              onClick={() => navigate("/referrals")}
            >
              <Text
                className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInriaSansBold40"
              >
                Referrals
              </Text>
              <Img
                className="h-[140px] mb-[5px] w-[140px]"
                src="images/img_healthiconsreferral.svg"
                alt="healthiconsrefe"
              />
            </div>
            <div
              className="common-pointer bg-blue_gray-100 flex flex-1 flex-col gap-[19px] justify-end p-[26px] sm:px-5 rounded-[20px] w-full"
              onClick={() => navigate("/handouts")}
            >
              <Text
                className="mr-[104px] mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInriaSansBold40"
              >
                Handouts
              </Text>
              <Img
                className="h-[134px] md:ml-[0] ml-[74px] mr-[59px]"
                src="images/img_group98.svg"
                alt="groupNinetyEight"
              />
            </div>
            <div
              className="common-pointer bg-blue_gray-100 flex flex-1 flex-col gap-[19px] items-center justify-end p-5 rounded-[20px] w-full"
              onClick={() => navigate("/insurancecard")}
            >
              <Text
                className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInriaSansBold40"
              >
                Insurance Info
              </Text>
              <Img
                className="h-[140px] w-[140px]"
                src="images/img_solarcard2bold.svg"
                alt="solarcard2bold"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
