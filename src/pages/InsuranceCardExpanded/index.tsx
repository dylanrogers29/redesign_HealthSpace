import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const InsuranceCardExpandedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriasans items-center justify-start mx-auto pb-[27px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[115px] mt-[66px] md:px-5 w-[36%] md:w-full">
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
          <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1223px] mt-[23px] mx-auto p-[15px] md:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
            <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] ml-4 md:ml-[0] md:mt-0 my-1 rounded-[5px] w-[25px]"></div>
            <Text
              className="md:ml-[0] ml-[81px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Added On
            </Text>
            <Text
              className="md:ml-[0] ml-[162px] md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Added By
            </Text>
            <Text
              className="md:ml-[0] ml-[106px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Plan Provider
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1188px] mt-4 mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[5px] w-full">
              <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
              <Text
                className="md:ml-[0] ml-[77px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                7/24/2020 3:39 PM
              </Text>
              <Text
                className="md:ml-[0] ml-[71px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Patient
              </Text>
              <Text
                className="md:ml-[0] ml-[130px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Blue Cross Blue Shield
              </Text>
              <Img
                className="h-[38px] md:ml-[0] ml-[347px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between mt-2.5 w-full">
              <div className="flex md:flex-1 flex-col gap-[13px] items-center justify-start w-[54%] md:w-full">
                <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="md:ml-[0] ml-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansLight24"
                    >
                      Member Name
                    </Text>
                    <Text
                      className="border border-black-900 border-solid md:ml-[0] ml-[3px] pl-[15px] sm:pr-5 pr-[35px] pt-1.5 rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansRegular24"
                    >
                      Cocky Gamecock
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-6 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansLight24"
                    >
                      Member ID
                    </Text>
                    <Text
                      className="border border-black-900 border-solid pl-[15px] sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansRegular24"
                    >
                      XXXXXXXXXXXXXXXXXX
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] mt-7 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansLight24"
                    >
                      Group Number
                    </Text>
                    <Text
                      className="border border-black-900 border-solid md:ml-[0] ml-[5px] pl-[15px] sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansRegular24"
                    >
                      XXXXXXXXXXX
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInriaSansLight24"
                    >
                      Full Address
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[295px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="black_900"
                      size="xl"
                      variant="outline"
                    >
                      123 Address town, city, zip
                    </Button>
                    <div className="h-16 md:h-[69px] mt-[33px] relative w-full">
                      <Text
                        className="absolute left-[1%] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                        size="txtInriaSansLight24"
                      >
                        Web Address
                      </Text>
                      <Text
                        className="absolute border border-black-900 border-solid bottom-[0] inset-x-[0] mx-auto pl-[15px] sm:pr-5 pr-[35px] pt-1.5 rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                        size="txtInriaSansRegular24"
                      >
                        my.sc.edu
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[99%] md:w-full">
                  <div className="md:h-9 h-[62px] relative w-[48%] sm:w-full">
                    <Text
                      className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                      size="txtInriaSansLight24"
                    >
                      Plan Type
                    </Text>
                    <Text
                      className="absolute border border-black-900 border-solid bottom-[0] inset-x-[0] mx-auto pl-[15px] sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                      size="txtInriaSansRegular24"
                    >
                      PPO
                    </Text>
                  </div>
                  <div className="h-16 md:h-9 relative w-[48%] sm:w-full">
                    <Text
                      className="absolute left-[1%] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                      size="txtInriaSansLight24"
                    >
                      Phone Number
                    </Text>
                    <Text
                      className="absolute border border-black-900 border-solid bottom-[0] inset-x-[0] mx-auto pl-[15px] sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                      size="txtInriaSansRegular24"
                    >
                      803-111-1111
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start mb-[51px] md:mt-0 mt-5 p-[107px] md:px-10 sm:px-5 rounded-[20px]">
                <Text
                  className="my-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  Insurance card image here
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[5px] mt-[13px] w-[53%] md:w-full">
              <div className="md:h-9 h-[62px] relative w-[13%] md:w-full">
                <Text
                  className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                  size="txtInriaSansLight24"
                >
                  CoPay
                </Text>
                <Text
                  className="absolute border border-black-900 border-solid bottom-[0] inset-x-[0] mx-auto pl-3.5 sm:pr-5 pr-[25px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                  size="txtInriaSansRegular24"
                >
                  $25
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[54px]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Rx Bin
                </Text>
                <Text
                  className="border border-black-900 border-solid mt-0.5 pl-3.5 sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansRegular24"
                >
                  XXXXXX
                </Text>
              </div>
              <div className="md:h-9 h-[62px] md:ml-[0] ml-[38px] relative w-[47%] md:w-full">
                <Text
                  className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                  size="txtInriaSansLight24"
                >
                  Employer
                </Text>
                <Text
                  className="absolute border border-black-900 border-solid bottom-[0] inset-x-[0] mx-auto pl-[15px] sm:pr-5 pr-[35px] py-[3px] rounded-[10px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                  size="txtInriaSansRegular24"
                >
                  None
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-100_01 h-px max-w-[1225px] mt-5 mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default InsuranceCardExpandedPage;
