import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const HealthHistoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-20 w-full">
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1228px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-[9px] items-center justify-start ml-1 md:ml-[0] w-2/5 md:w-full">
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
                <>&gt;&gt; Health History</>
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-3 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Health History
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[46px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Allergies
            </Text>
            <div className="bg-blue_gray-100 flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-end mt-1 p-[5px] rounded-tl-[20px] rounded-tr-[20px] w-full">
              <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] md:mt-0 my-1 rounded-[5px] w-[25px]"></div>
              <Text
                className="md:ml-[0] ml-[73px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Item you are allergic to
              </Text>
              <Text
                className="md:ml-[0] ml-[174px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Type of Reaction
              </Text>
              <Text
                className="md:ml-[0] ml-[261px] mr-6 md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Approx. Date of Onset
              </Text>
            </div>
            <div className="flex flex-col font-inriasans items-center justify-start mt-4 w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[35px] w-[86%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="md:ml-[0] ml-[73px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    NO KNOWN DRUG ALLERGY
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[554px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    03/21/2021
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[35px] mt-3 w-[86%] md:w-full">
              <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
              <Text
                className="md:ml-[0] ml-[73px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                NO KNOWN MATERIAL ALLERGY
              </Text>
              <Text
                className="md:ml-[0] ml-[509px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                03/21/2021
              </Text>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-2 w-full" />
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start ml-7 md:ml-[0] mt-[5px] w-[19%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus"
              />
              <Text
                className="mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Allergy
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-16 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Medications
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start ml-1 md:ml-[0] mt-[5px] w-full">
              <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[5px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[25px] md:mt-0 my-1 rounded-[5px] w-[25px]"></div>
                <Text
                  className="md:ml-[0] ml-[76px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Name of Medication
                </Text>
                <Text
                  className="md:ml-[0] ml-[202px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Dosage and Directions
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-inriasans items-center justify-start mt-2.5 w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[35px] w-[49%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[0] ml-[73px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    NO ACTIVE MEDS
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[237px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    X INDEF
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start ml-7 md:ml-[0] w-[22%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus_One"
              />
              <Text
                className="my-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Medication
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[68px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Medical Conditions
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start ml-1 md:ml-[0] mt-1 w-full">
              <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[5px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[25px] md:mt-0 my-1 rounded-[5px] w-[25px]"></div>
                <Text
                  className="md:ml-[0] ml-[76px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Name of Condition
                </Text>
                <Text
                  className="md:ml-[0] ml-[217px] md:mt-0 my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Date of Condition
                </Text>
                <Text
                  className="md:ml-[0] ml-[239px] md:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInriaSansLight24"
                >
                  Continuous Symptoms
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-inriasans items-center justify-start mt-[9px] w-full">
              <div className="flex flex-col gap-2 justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[35px] w-[79%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="md:ml-[0] ml-[73px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    Concussion
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[295px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    09/2021
                  </Text>
                  <Text
                    className="h-[29px] md:ml-[0] ml-[336px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    No
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start ml-7 md:ml-[0] mt-0.5 w-[21%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus_Two"
              />
              <Text
                className="my-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Condition
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[57px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Family History
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start ml-1 md:ml-[0] mt-[5px] w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <div className="flex flex-row gap-[73px] items-start justify-start md:ml-[0] ml-[35px] w-[33%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    NO KNOWN FAMILY HISTORY
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start md:ml-[0] ml-[31px] mt-0.5 w-1/4 md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus_Three"
              />
              <Text
                className="mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Family History
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-[46px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Hospitalization
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start ml-1 md:ml-[0] mt-2.5 w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-start justify-start md:ml-[0] ml-[35px] w-[35%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    NO KNOWN HOSPITALIZATIONS
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start md:ml-[0] ml-[31px] w-[26%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus_Four"
              />
              <Text
                className="mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Hospitalization
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-[46px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInriaSerifRegular30"
            >
              Surgeries/Procedures
            </Text>
            <div className="flex flex-col font-inriasans items-center justify-start mt-[7px] w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <div className="flex flex-row gap-[73px] items-start justify-start md:ml-[0] ml-[35px] w-[30%] md:w-full">
                  <div className="border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInriaSansRegular24"
                  >
                    NO KNOWN PROCEDURES
                  </Text>
                </div>
                <Line className="bg-blue_gray-100_01 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row font-inriasans gap-[65px] items-end justify-start ml-7 md:ml-[0] mt-[3px] w-[21%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_icroundplus.svg"
                alt="icroundplus_Five"
              />
              <Text
                className="my-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                Add Procedure
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthHistoryPage;
