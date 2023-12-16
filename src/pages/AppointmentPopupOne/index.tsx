import React from "react";

import { Button, Img, Text } from "components";

const AppointmentPopupOnePage: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inriaserif sm:gap-10 md:gap-10 gap-[218px] items-start justify-end mx-auto pb-[193px] md:px-10 sm:px-5 px-[193px] w-full">
        <div className="border-[3px] border-gray-200 border-solid h-11 md:mt-0 mt-[167px] rounded-[22px] w-[45px]"></div>
        <div className="h-[198px] md:h-[200px] mb-5 relative w-[58%] md:w-full">
          <div className="absolute bg-gray-200 flex flex-col inset-x-[0] items-end justify-start mx-auto p-3.5 rounded-[20px] top-[0] w-full">
            <Button
              className="flex h-[35px] items-center justify-center mb-[85px] mr-0.5 rounded-[17px] w-[35px]"
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
          <div className="absolute bottom-[0] md:h-[180px] h-[181px] left-[3%] w-[74%] sm:w-full">
            <div className="absolute flex flex-col gap-2 h-full inset-[0] items-start justify-center m-auto w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtInriaSerifBold24"
              >
                Allergy Testing
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
        </div>
      </div>
    </>
  );
};

export default AppointmentPopupOnePage;
