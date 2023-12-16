import React from "react";

import { Button, Img, Text } from "components";

const AppointmentPopupPage: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inriaserif sm:gap-10 md:gap-10 gap-[218px] items-end justify-end mx-auto pb-[66px] md:px-10 sm:px-5 px-[66px] w-full">
        <div className="border-[3px] border-gray-200 border-solid h-11 mb-[135px] md:mt-0 mt-[167px] rounded-[22px] w-[45px]"></div>
        <div className="bg-gray-200 flex md:flex-col flex-row md:gap-5 items-start justify-center mb-[135px] p-3 md:px-5 rounded-[20px] w-[56%] md:w-full">
          <div className="flex ml-2 md:ml-[0] md:mt-0 mt-1 relative w-[93%] md:w-full">
            <div className="md:h-[180px] h-[181px] my-auto w-[69%] sm:w-full">
              <div className="absolute flex flex-col gap-2 h-full inset-[0] items-start justify-center m-auto w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtInriaSerifBold24"
                >
                  Physical Examination
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtInriaSerifRegular20"
                  >
                    <>
                      Date: 09/19/2023
                      <br />
                      Time: 12:00 p.m.
                      <br />
                      Location: Student Health Center
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start right-[4%] top-[0]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtInriaSerifRegular24"
                >
                  Dr. Evil, MD
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-center justify-start mb-[11px] ml-[-75px] mt-auto w-[44%] z-[1]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[273px] text-center text-xl"
                shape="round"
                color="pink_900"
                size="sm"
                variant="fill"
              >
                Reschedule Appointment
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[273px] text-center text-xl"
                shape="round"
                color="pink_900"
                size="sm"
                variant="fill"
              >
                Cancel Appointment
              </Button>
            </div>
          </div>
          <Button
            className="flex h-[35px] items-center justify-center mr-[9px] rounded-[17px] w-[35px]"
            shape="round"
            color="gray_700"
            size="xs"
            variant="outline"
          >
            <Img
              className="h-6"
              src="images/img_arrowright_gray_700.svg"
              alt="arrowright"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AppointmentPopupPage;
