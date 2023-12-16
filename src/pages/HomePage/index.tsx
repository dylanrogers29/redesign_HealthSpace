import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import ScheduleRescheduleCalendar from "components/ScheduleRescheduleCalendar";

const HomePagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[93px] items-center justify-start mx-auto pb-[89px] w-full">
        <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="bg-pink-900 flex flex-1 flex-col font-inriaserif items-center justify-end p-[11px] w-full">
            <div className="flex flex-col gap-9 justify-start mt-6 w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[13px] w-full">
                <Img
                  className="md:flex-1 h-[71px] sm:h-auto object-cover w-[27%] md:w-full"
                  src="images/img_usclogohorizontalrgbgrev.png"
                  alt="usclogohorizont"
                />
                <Text
                  className="md:ml-[0] ml-[55px] md:mt-0 mt-[31px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 tracking-[1.65px]"
                  size="txtInriaSerifBold33"
                >
                  MyHealthSpace
                </Text>
                <div
                  className="common-pointer bg-white-A700 flex flex-col h-[83px] items-center justify-start md:ml-[0] ml-[570px] md:mt-0 mt-[3px] p-0.5 rounded-[41px] w-[83px]"
                  onClick={() => navigate("/profilescreen")}
                >
                  <Img
                    className="h-[75px] mb-1 w-[75px]"
                    src="images/img_iconamoonprofilefill.svg"
                    alt="iconamoonprofil"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-end md:ml-[0] ml-[196px] w-[86%] md:w-full">
                <Line className="bg-white-A700 md:h-0.5 h-[42px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
                <Text
                  className="common-pointer md:ml-[0] ml-[68px] md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInriaSansRegular30"
                  onClick={() => navigate("/messagescreen")}
                >
                  Messages
                </Text>
                <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[74px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
                <Text
                  className="common-pointer ml-16 md:ml-[0] md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInriaSansRegular30"
                  onClick={() => navigate("/schedulereschedule")}
                >
                  Appointments
                </Text>
                <Line className="bg-white-A700 md:h-0.5 h-[42px] mb-0.5 md:ml-[0] ml-[65px] w-0.5 md:w-full" />
                <Text
                  className="common-pointer md:ml-[0] ml-[67px] md:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInriaSansRegular30"
                  onClick={() => navigate("/documents")}
                >
                  Documents
                </Text>
                <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[65px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
                <Text
                  className="common-pointer md:ml-[0] ml-[50px] md:mt-0 mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInriaSansRegular30"
                  onClick={() => navigate("/medicalrecords")}
                >
                  Medical Records
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-inriasans leading-[normal] min-w-[251px] mr-[1189px] md:mt-0 mt-[147px] rounded-tl-[20px] rounded-tr-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            Home
          </Button>
        </header>
        <div className="sm:h-[2720px] md:h-[501px] h-[650px] max-w-[1300px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[168px] inset-x-[0] justify-start mx-auto top-[0] w-[97%]">
            <div className="flex flex-col gap-[33px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInriaSerifBold48"
              >
                Hello, Cocky Gamecock!
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                Your Upcoming Appointments
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[564px] text-2xl md:text-[22px] text-gray-700 sm:text-xl w-[56%] sm:w-full"
              size="txtInterMedium24"
            >
              <span className="text-gray-700 font-inriasans text-left font-normal">
                All student health services operate Monday-Friday from 8am-5pm.{" "}
              </span>
              <span className="text-gray-700 font-inriasans text-left font-bold">
                If you’re experiencing an emergency, please dial 9-1-1.
              </span>
              <span className="text-gray-700 font-inriasans text-left font-normal">
                {" "}
              </span>
            </Text>
          </div>
          <div className="absolute bg-gray-200 font-inriaserif md:h-[102px] h-[163px] p-[13px] right-[0] rounded-[20px] top-[13%] w-[57%] md:w-full">
            <Button
              className="common-pointer absolute bottom-[8%] cursor-pointer font-bold leading-[normal] min-w-[231px] right-[6%] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/forms")}
              shape="round"
              color="pink_900"
              size="sm"
              variant="fill"
            >
              Complete Now
            </Button>
            <div className="absolute flex flex-col font-inriasans inset-x-[0] items-start justify-start mx-auto top-[13%]">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtInriaSansBold24"
              >
                Notice:{" "}
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                size="txtInriaSansRegular24Gray900"
              >
                {" "}
                You need to complete some documents(s). Please complete and
                upload the Caps Consent form{" "}
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-inriasans items-start justify-start right-[1%] w-[57%]">
            <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] w-full" />
            <div className="flex flex-col gap-[19px] items-start justify-start mt-[27px] w-full">
              <Text
                className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/schedulereschedule")}
              >
                Schedule an appointment
              </Text>
              <Line className="bg-gray-400 h-px w-full" />
            </div>
            <div className="flex flex-col gap-[17px] items-start justify-start ml-0.5 md:ml-[0] mt-[29px] w-full">
              <Text
                className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/messagescreen")}
              >
                Message a medical professional
              </Text>
              <Line className="bg-gray-400 h-px w-full" />
            </div>
            <Text
              className="common-pointer mt-7 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInriaSansRegular32"
              onClick={() => navigate("/profilescreen")}
            >
              Update information
            </Text>
          </div>
          <div className="absolute bottom-[2%] flex flex-col font-inriaserif items-center justify-start left-[0] w-[514px] sm:w-full">
            <ScheduleRescheduleCalendar className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-[30px] sm:px-5 rounded-[16px] shadow-bs w-auto sm:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
