import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const ImmunizationsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-64 w-full">
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col justify-start max-w-[1224px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-[9px] items-start justify-start ml-1.5 md:ml-[0] w-2/5 md:w-full">
              <Text
                className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-black-900 underline"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/medicalrecords")}
              >
                Medical Records
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Immunizations</>
              </Text>
            </div>
            <Text
              className="ml-1.5 md:ml-[0] mt-2 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Immunizations
            </Text>
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row font-inriasans sm:gap-5 items-center justify-start mt-5 p-[17px] rounded-tl-[20px] rounded-tr-[20px] w-full">
              <Text
                className="sm:ml-[0] ml-[23px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Procedure
              </Text>
              <Text
                className="sm:ml-[0] ml-[406px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Event Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[67px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Comment
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inriasans sm:gap-10 items-center justify-between md:ml-[0] ml-[38px] mt-3.5 w-[52%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID mRNALNP 30mcg Pfizer Dose1
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                04/05/2021
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-3 w-full" />
            <div className="flex sm:flex-col flex-row font-inriasans sm:gap-10 items-center justify-between md:ml-[0] ml-[37px] mt-[13px] w-[52%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                COVID mRNALNP 30mcg Pfizer Dose1
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                04/27/2021
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[11px] w-full" />
            <div className="flex flex-row font-inriasans sm:gap-10 items-start justify-between md:ml-[0] ml-[37px] mt-2.5 w-[52%] md:w-full">
              <Text
                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Hepatitis A, Unspecified
              </Text>
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                04/18/2005
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[9px] w-full" />
            <div className="flex sm:flex-col flex-row font-inriasans sm:gap-10 items-start justify-between md:ml-[0] ml-[37px] mt-2 w-[52%] md:w-full">
              <Text
                className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Influenza-inactivated (Administered)
              </Text>
              <Text
                className="mb-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                10/28/2022
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[9px] w-full" />
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[37px] mt-[7px] w-[95%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                PPD
              </Text>
              <Text
                className="md:ml-[0] ml-[472px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                07/14/2020
              </Text>
              <Text
                className="md:ml-[0] ml-[54px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Interpretation: NEGATIVE; Result: 0 mm; 0mm
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-2.5 w-full" />
            <div className="flex flex-row font-inriasans gap-[23px] items-end justify-start md:ml-[0] ml-[31px] mt-2 w-[21%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus"
              />
              <Text
                className="my-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Immunization
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImmunizationsPage;
