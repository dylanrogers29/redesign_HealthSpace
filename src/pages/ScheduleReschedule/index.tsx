import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import ScheduleRescheduleCalendar from "components/ScheduleRescheduleCalendar";

const ScheduleReschedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriaserif items-center justify-start mx-auto pb-10 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header2 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between max-w-[1292px] mt-[116px] mx-auto md:px-5 w-full">
            <div className="flex flex-col font-inriaserif items-center justify-start">
              <div className="flex flex-col gap-[33px] justify-start w-full">
                <Text
                  className="ml-2 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSerifRegular40"
                >
                  Current Appointments:
                </Text>
                <div className="flex flex-col font-inter h-[497px] md:h-auto items-start justify-start w-[502px] sm:w-full">
                  <ScheduleRescheduleCalendar className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-[30px] sm:px-5 rounded-[16px] shadow-bs w-auto sm:w-full" />
                </div>
              </div>
            </div>
            <Input
              name="popup"
              placeholder="Click your appointment on the calendar to view its information."
              className="font-inriasans leading-[normal] md:text-[22px] p-0 placeholder:text-gray-900 sm:text-xl text-2xl text-left w-full"
              wrapClassName="md:flex-1 mb-[403px] md:mt-0 mt-[89px] md:w-full"
              shape="round"
              size="sm"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[964px] mr-[26px] mt-[35px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/schedulingquestionnnaire")}
            shape="round"
            color="pink_900"
            size="sm"
            variant="fill"
          >
            Schedule New Appointment
          </Button>
        </div>
      </div>
    </>
  );
};

export default ScheduleReschedulePage;
