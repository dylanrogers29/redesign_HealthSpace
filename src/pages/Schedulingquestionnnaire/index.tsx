import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const SchedulingquestionnnairePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriaserif items-center justify-start mx-auto pb-[41px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header2 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col gap-[19px] items-center justify-start max-w-[1245px] mt-[84px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-[99%] sm:w-full"
              size="txtInriaSerifRegular40"
            >
              Please answer the following questionnaire before scheduling your
              appointment.
            </Text>
            <div className="flex flex-col font-inriasans gap-[11px] items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtInriaSansRegular32"
              >
                Are you currently experiencing chest pain, shortness of breath,
                severe pain, uncontrolled bleeding or any other medical
                emergency?
              </Text>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[43%] md:w-full">
                <div className="flex flex-row gap-[18px] items-start justify-between w-[18%]">
                  <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInriaSansRegular32"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-between w-[17%]">
                  <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInriaSansRegular32"
                  >
                    No
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inriasans gap-1.5 items-center justify-start max-w-[1245px] mt-20 mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtInriaSansRegular32"
            >
              Are you in immediate danger of harming yourself or someone else,
              or experiencing a mental health emergency?
            </Text>
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[43%] md:w-full">
              <div className="flex flex-row gap-[18px] items-start justify-between w-[18%]">
                <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Yes
                </Text>
              </div>
              <div className="flex flex-row gap-[18px] items-start justify-between w-[17%]">
                <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  No
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inriasans gap-11 items-center justify-start max-w-[1197px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="md:h-[444px] h-[478px] relative w-full">
              <Text
                className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900 top-[0]"
                size="txtInriaSansRegular32"
              >
                Select YES if any of the following statements are true:
              </Text>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>
                  1. In the past 10 days have you been diagnosed with COVID-19,
                  been tested, or still experience symptoms from recent COVID-19
                  disease?
                  <br />
                  <br />
                  2. In the past 10 days, have you lived with, or been in close
                  contact (within 6 feet for 15 minutes or more) with anyone who
                  has been diagnosed, isolated, quarantined or under
                  investigation for COVID-19?
                  <br />
                  <br />
                  3. Are you currently sick with any of the following symptoms:
                  fever, cough, mild or moderate difficulty breathing, sore
                  throat, muscles aches or body aches, vomiting or diarrhea, new
                  loss of taste or smell?
                </>
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[45%] md:w-full">
              <div className="flex flex-row gap-[18px] items-start justify-between w-[18%]">
                <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  Yes
                </Text>
              </div>
              <div className="flex flex-row gap-[18px] items-start justify-between w-[17%]">
                <div className="border-[3px] border-black-900 border-solid h-7 mt-1 rounded-[50%] w-7"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInriaSansRegular32"
                >
                  No
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap font-inriaserif md:gap-10 items-center justify-between max-w-[1296px] mt-[120px] mx-auto md:px-5 w-full">
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[212px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/schedulereschedule")}
              shape="round"
              color="pink_900"
              size="sm"
              variant="fill"
            >
              Cancel
            </Button>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[212px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/scheduleappointmentscreenone")}
              shape="round"
              color="pink_900"
              size="sm"
              variant="fill"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulingquestionnnairePage;
