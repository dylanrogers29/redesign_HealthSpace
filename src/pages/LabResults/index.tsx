import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const LabResultsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[369px] w-full">
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1223px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-[9px] items-start justify-start md:ml-[0] ml-[5px] w-[36%] md:w-full">
              <Text
                className="common-pointer sm:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 underline"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/medicalrecords")}
              >
                Medical Records
              </Text>
              <Text
                className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Lab Results</>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-2 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Lab Results
            </Text>
            <div className="bg-blue_gray-100 flex flex-row font-inriasans md:gap-10 gap-[125px] items-center justify-start mt-5 p-[17px] rounded-tl-[20px] rounded-tr-[20px] w-full">
              <Text
                className="ml-[23px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Collection Date
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Test Name
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[41px] mt-1.5 w-[96%] md:w-full">
              <Text
                className="md:mt-0 mt-2 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                02/08/2022
              </Text>
              <Text
                className="md:ml-[0] ml-[156px] md:mt-0 mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID-19 (PHARM/SALIVA 2019 Novel Coronavirus), RT-PCR
              </Text>
              <Img
                className="h-10 md:ml-[0] ml-[247px] w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <Line className="bg-blue_gray-100_01 h-px md:ml-[0] ml-[3px] mt-2.5 w-full" />
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[41px] mt-[5px] w-[96%] md:w-full">
              <Text
                className="md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                02/04/2022
              </Text>
              <Text
                className="md:ml-[0] ml-[158px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID-19 (PHARM/SALIVA 2019 Novel Coronavirus), RT-PCR
              </Text>
              <Img
                className="h-10 md:ml-[0] ml-[247px] w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown_One"
              />
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[5px] w-full" />
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[41px] mt-1 w-[96%] md:w-full">
              <Text
                className="md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                01/18/2022
              </Text>
              <Text
                className="md:ml-[0] ml-[165px] md:mt-0 mt-2 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID-19 (PHARM/SALIVA 2019 Novel Coronavirus), RT-PCR
              </Text>
              <Img
                className="h-10 md:ml-[0] ml-[247px] w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Two"
              />
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[7px] w-full" />
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[43px] mt-[3px] w-[96%] md:w-full">
              <Text
                className="md:mt-0 mt-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                11/19/2021
              </Text>
              <Text
                className="md:ml-[0] ml-[173px] md:mt-0 mt-2 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID-19 (PHARM/SALIVA 2019 Novel Coronavirus), RT-PCR
              </Text>
              <Img
                className="h-10 md:ml-[0] ml-[247px] w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Three"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabResultsPage;
