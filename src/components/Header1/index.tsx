import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="bg-pink-900 flex flex-col items-center justify-end p-[11px] w-full">
          <div className="flex flex-col gap-9 justify-start mt-6 w-[94%] md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[34px] w-[79%] md:w-full">
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
              <Text
                className="common-pointer ml-16 md:ml-[0] md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                size="txtInriaSansRegular30"
                onClick={() => navigate("/schedulereschedule")}
              >
                Appointments
              </Text>
              <Line className="bg-white-A700 md:h-0.5 h-[42px] mb-0.5 md:ml-[0] ml-[65px] w-0.5 md:w-full" />
              <Text
                className="common-pointer md:ml-[0] ml-[68px] md:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                size="txtInriaSansRegular30"
                onClick={() => navigate("/documents")}
              >
                Documents
              </Text>
              <Line className="bg-white-A700 md:h-0.5 h-[42px] ml-16 md:ml-[0] md:mt-0 mt-0.5 w-0.5 md:w-full" />
            </div>
          </div>
        </div>
        <Button
          className="common-pointer cursor-pointer font-bold font-inriasans leading-[normal] min-w-[251px] md:ml-[0] ml-[1161px] mr-7 md:mt-0 mt-[147px] rounded-tl-[20px] rounded-tr-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
          onClick={() => navigate("/medicalrecords")}
          color="white_A700"
          size="lg"
          variant="fill"
        >
          Medical Records
        </Button>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
