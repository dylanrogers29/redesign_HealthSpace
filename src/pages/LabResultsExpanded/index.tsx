import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const LabResultsExpandedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[236px] w-full">
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col justify-start max-w-[1223px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-2.5 items-center justify-start md:ml-[0] ml-[5px] w-[36%] md:w-full">
              <Text
                className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/medicalrecords")}
              >
                Medical Records
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Lab Results</>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-2.5 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
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
                className="h-10 md:ml-[0] ml-[249px] w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[97px] mt-[61px] w-[57%] md:w-full">
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Name:
              </Text>
              <Text
                className="md:ml-[0] ml-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Cocky Gamecock
              </Text>
              <Text
                className="md:ml-[0] ml-[125px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Ordered By:
              </Text>
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Scott, Warren MD
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[98px] mt-[7px] w-[68%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                ID:
              </Text>
              <Text
                className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                CXXXXXXXX
              </Text>
              <Text
                className="md:ml-[0] ml-[215px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Order #:
              </Text>
              <Text
                className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                L1260799-04 (00000001400038)
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[98px] mt-2 w-[55%] md:w-full">
              <Text
                className="md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Age:
              </Text>
              <Text
                className="md:ml-[0] ml-[22px] md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                20 yrs at the time of result
              </Text>
              <Text
                className="mb-[3px] ml-9 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Collected:
              </Text>
              <Text
                className="ml-2 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                2/8/2022 2:36 PM
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[97px] mt-1.5 w-[55%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                DOB:
              </Text>
              <Text
                className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                XX/XX/XXXX
              </Text>
              <Text
                className="md:ml-[0] ml-[188px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Received:
              </Text>
              <Text
                className="md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                2/8/2022 2:36 PM
              </Text>
            </div>
            <div className="flex flex-row font-inriasans gap-[26px] items-center justify-start md:ml-[0] ml-[97px] mt-2 w-[10%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansBold24Black900"
              >
                Sex:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Male
              </Text>
            </div>
            <Img
              className="h-[466px] sm:h-auto md:ml-[0] ml-[85px] mt-[26px] object-cover w-[92%] md:w-full"
              src="images/img_image2.png"
              alt="imageTwo"
            />
            <div className="flex flex-col font-inriasans items-center justify-start mt-[88px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-blue_gray-100_01 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-[96%] md:w-full">
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[96%] md:w-full">
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[96%] md:w-full">
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
        </div>
      </div>
    </>
  );
};

export default LabResultsExpandedPage;
