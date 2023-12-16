import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const AppointmentHistoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[527px] w-full">
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
          <Header1 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1223px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row font-inriasans gap-[9px] items-start justify-start md:ml-[0] ml-[5px] w-[47%] md:w-full">
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
                <>&gt;&gt; Appointment History</>
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-3 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Appointment History
            </Text>
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row font-inriasans sm:gap-5 items-center justify-start mt-[15px] p-[15px] rounded-tl-[20px] rounded-tr-[20px] w-full">
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
            <div className="flex sm:flex-col flex-row font-inriasans sm:gap-10 items-start justify-between md:ml-[0] ml-[37px] mt-[13px] w-[91%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                03/21/2021
              </Text>
              <Text
                className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                GIBBS, BROOKE B MD
              </Text>
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInriaSansRegular24"
              >
                PRIMARY CARE
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentHistoryPage;
