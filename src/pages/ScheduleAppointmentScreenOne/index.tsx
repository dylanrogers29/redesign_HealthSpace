import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import ScheduleRescheduleCalendar from "components/ScheduleRescheduleCalendar";

const ScheduleAppointmentScreenOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter justify-start mx-auto pb-8 w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="bg-pink-900 flex flex-1 flex-col font-inriaserif items-center justify-end mb-2.5 p-[11px] w-full">
              <div className="flex flex-col gap-9 items-center justify-start mt-6 w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start w-[98%] md:w-full">
                  <Text
                    className="common-pointer md:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInriaSansRegular30"
                    onClick={() => navigate("/homepage")}
                  >
                    Home
                  </Text>
                  <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[84px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
                  <Text
                    className="common-pointer md:ml-[0] ml-[68px] md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInriaSansRegular30"
                    onClick={() => navigate("/messagescreen")}
                  >
                    Messages
                  </Text>
                  <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[74px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
                  <Line className="bg-white-A700 md:h-0.5 h-[42px] mb-0.5 md:ml-[0] ml-[318px] w-0.5 md:w-full" />
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
              className="cursor-pointer font-bold font-inriasans leading-[normal] min-w-[251px] md:ml-[0] ml-[556px] mr-[633px] md:mt-0 mt-[156px] rounded-tl-[20px] rounded-tr-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Appointments
            </Button>
          </header>
        </div>
        <div className="flex flex-col md:gap-10 gap-[106px] justify-start ml-20 md:ml-[0] mt-[53px] md:px-5 w-[79%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              Please select a visit type:
            </Text>
            <div className="flex flex-col font-inriasans gap-[54px] items-start justify-start ml-0.5 md:ml-[0] mt-[62px] w-full">
              <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-[41%] md:w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[14px] w-[27px]"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Allergy, Immunization & Travel
                </Text>
              </div>
              <div className="flex flex-row gap-[18px] items-start justify-start w-[18%] md:w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[14px] w-[27px]"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Counseling
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[14px] w-[27px]"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Healthy Campus Initiatives (Balanced Eating, STI Screening,
                  Wellness Coaching)
                </Text>
              </div>
              <div className="flex flex-row gap-[18px] items-start justify-start w-[28%] md:w-full">
                <div className="border-[3px] border-black-900 border-solid h-7 rounded-[14px] w-[27px]"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Groups/Workshops
                </Text>
              </div>
            </div>
            <div className="flex flex-row font-inriasans items-center justify-end md:ml-[0] ml-[562px] mt-[69px] w-[7%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansBold32"
                >
                  1/3
                </Text>
              </div>
              <Img
                className="common-pointer h-[29px] ml-0.5"
                src="images/img_arrowright_gray_900_01.svg"
                alt="arrowright"
                onClick={() => navigate("/scheduleappointmentscreentwo")}
              />
            </div>
          </div>
          <div className="flex flex-col font-inriaserif gap-[30px] items-start justify-start ml-6 md:ml-[0] w-[45%] md:w-full">
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

export default ScheduleAppointmentScreenOnePage;
