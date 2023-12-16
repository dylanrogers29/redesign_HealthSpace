import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header3 from "components/Header3";
import ScheduleRescheduleCalendar from "components/ScheduleRescheduleCalendar";

const ScheduleAppointmentScreenTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter justify-start mx-auto pb-8 w-full">
        <div className="flex flex-col items-center w-full">
          <Header3 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[86px] justify-start ml-20 md:ml-[0] mt-[53px] md:px-5 w-[45%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] justify-start mr-[105px] w-[84%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              Please select a visit type:
            </Text>
            <div className="flex flex-col font-inriasans gap-[55px] items-start justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-4/5 md:w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 sm:mt-0 mt-[3px] rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Flu/COVID-19 Vaccine Clinic
                </Text>
              </div>
              <div className="flex flex-row gap-[18px] items-start justify-start w-[39%] md:w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Lab Testing
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Primary Care (In-Office or Televisit)
                </Text>
              </div>
            </div>
          </div>
          <div className="font-inriasans h-[39px] md:ml-[0] ml-[532px] relative w-[17%]">
            <Text
              className="absolute h-full inset-y-[0] my-auto right-1/4 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInriaSansBold32"
            >
              2/3
            </Text>
            <Img
              className="absolute h-[29px] inset-[0] justify-center m-auto"
              src="images/img_arrows.svg"
              alt="arrows"
            />
          </div>
        </div>
        <div className="flex flex-col font-inriaserif gap-[30px] items-start justify-start md:ml-[0] ml-[104px] mt-[182px] md:px-5 w-[35%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInriaSerifRegular40"
            >
              Availability:
            </Text>
          </div>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col h-[497px] md:h-auto items-start justify-start w-[502px] sm:w-full">
                <ScheduleRescheduleCalendar className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-[30px] sm:px-5 rounded-[16px] shadow-bs w-auto sm:w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inriaserif items-center mt-16 md:px-10 sm:px-5 px-[495px] w-full">
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/schedulereschedule")}
            shape="round"
            color="pink_900"
            size="sm"
            variant="fill"
          >
            Schedule Appointment
          </Button>
        </div>
      </div>
    </>
  );
};

export default ScheduleAppointmentScreenTwoPage;
