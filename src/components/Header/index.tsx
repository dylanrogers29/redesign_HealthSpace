import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="bg-pink-900 flex flex-col items-center justify-end p-[11px] w-full">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
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
              <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[281px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
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
          className="common-pointer cursor-pointer font-bold font-inriasans leading-[normal] min-w-[251px] md:ml-[0] ml-[858px] mr-[331px] md:mt-0 mt-[147px] rounded-tl-[20px] rounded-tr-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
          onClick={() => navigate("/documents")}
          color="white_A700"
          size="lg"
          variant="fill"
        >
          Documents
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
