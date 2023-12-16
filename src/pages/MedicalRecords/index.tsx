import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";

const MedicalRecordsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriasans items-center justify-start mx-auto pb-[107px] w-full">
        <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <List
            className="flex flex-col gap-[86px] items-center max-w-[1218px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtInriaSerifBold48"
                >
                  Medical Records
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtInriaSansRegular32"
                >
                  Keep track of all your medical needs and update any necessary
                  information.
                </Text>
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex md:flex-1 flex-col gap-[27px] items-center justify-end md:ml-[0] ml-[72px] p-[17px] rounded-[20px] w-[28%] md:w-full"
                onClick={() => navigate("/appointmenthistory")}
              >
                <Text
                  className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSansBold40"
                >
                  Appointment History
                </Text>
                <Img
                  className="h-[120px] mb-[5px] w-[120px]"
                  src="images/img_streamlinewait.svg"
                  alt="streamlinewait"
                />
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex md:flex-1 flex-col gap-3 items-center justify-center md:ml-[0] ml-[114px] p-6 sm:px-5 rounded-[20px] w-[28%] md:w-full"
                onClick={() => navigate("/healthhistory")}
              >
                <Text
                  className="mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSansBold40"
                >
                  Health History
                </Text>
                <Img
                  className="h-[140px] mb-[9px] w-[140px]"
                  src="images/img_solarhealthbold.svg"
                  alt="solarhealthbold"
                />
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col gap-[19px] items-center justify-center p-[19px] rounded-[20px] w-[28%] md:w-full"
                onClick={() => navigate("/immunizations")}
              >
                <Text
                  className="mt-3.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSansBold40"
                >
                  Immunizations
                </Text>
                <Img
                  className="h-[140px] w-[140px]"
                  src="images/img_lucidesyringe.svg"
                  alt="lucidesyringe"
                />
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-center p-[18px] rounded-[20px] w-[28%] md:w-full"
                onClick={() => navigate("/medicalclearances")}
              >
                <Text
                  className="mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[94%] sm:w-full"
                  size="txtInriaSansBold40"
                >
                  Medical Clearances
                </Text>
                <Img
                  className="h-[140px] mb-0.5 w-[140px]"
                  src="images/img_rihealthbookfill.svg"
                  alt="rihealthbookfil"
                />
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col gap-[19px] justify-end p-5 rounded-[20px] w-[28%] md:w-full"
                onClick={() => navigate("/labresults")}
              >
                <Text
                  className="md:ml-[0] ml-[13px] mr-[73px] mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSansBold40"
                >
                  Lab Results
                </Text>
                <Img
                  className="h-[140px] md:ml-[0] ml-[84px] mr-[66px] w-[140px]"
                  src="images/img_materialsymbolslabresearch.svg"
                  alt="materialsymbols"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default MedicalRecordsPage;
