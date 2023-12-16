import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const MedicalClearancesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[572px] w-full">
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1223px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-[9px] items-start justify-start md:ml-[0] ml-[5px] w-[45%] md:w-full">
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
                <>&gt;&gt; Medical Clearances</>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-2 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Medical Clearances
            </Text>
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row font-inriasans sm:gap-5 items-center justify-start mt-5 p-[15px] rounded-tl-[20px] rounded-tr-[20px] w-full">
              <Text
                className="sm:ml-[0] ml-[25px] sm:mt-0 my-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[365px] sm:mt-0 my-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Provider
              </Text>
              <Text
                className="sm:ml-[0] ml-[450px] sm:mt-0 mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansLight24"
              >
                Department
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalClearancesPage;
