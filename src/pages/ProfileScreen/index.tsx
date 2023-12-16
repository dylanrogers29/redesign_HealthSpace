import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const ProfileScreenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inriaserif items-center justify-start mx-auto pb-[29px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col h-[83px] items-center justify-start mb-[92px] md:ml-[0] ml-[1297px] mr-[60px] md:mt-0 mt-[39px] p-0.5 rounded-[41px] w-[83px]">
              <Img
                className="h-[75px] mb-1 w-[75px]"
                src="images/img_iconamoonprofilefill.svg"
                alt="iconamoonprofil"
              />
            </div>
            <div className="bg-pink-900 flex flex-1 flex-col items-center justify-end p-[11px] w-full">
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
                  <div className="bg-white-A700 flex flex-col h-[83px] items-center justify-start md:ml-[0] ml-[570px] md:mt-0 mt-[3px] p-0.5 rounded-[41px] w-[83px]">
                    <Img
                      className="h-[75px] mb-1 w-[75px]"
                      src="images/img_iconamoonprofilefill.svg"
                      alt="iconamoonprofil_One"
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
          </header>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1277px] mt-[33px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start mb-[22px] w-[23%] md:w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-[81%] md:w-full">
                <Img
                  className="h-[218px]"
                  src="images/img_pfpicon.svg"
                  alt="pfpicon"
                />
                <Button
                  className="cursor-pointer leading-[normal] min-w-[231px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  color="black_900"
                  size="md"
                  variant="outline"
                >
                  Change profile pic
                </Button>
              </div>
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col font-inriasans gap-[13px] items-center justify-center p-[11px] rounded-[20px] w-full"
                onClick={() => navigate("/insurancecard")}
              >
                <Text
                  className="mt-3 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInriaSansBold40"
                >
                  Insurance Info
                </Text>
                <Img
                  className="h-[117px] mb-[5px]"
                  src="images/img_solarcard2bold.svg"
                  alt="solarcard2bold"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[22px] w-[69%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtInriaSerifBold48"
                >
                  Edit Profile & Settings
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-between mt-[25px] w-full">
                  <div className="h-[83px] relative w-[49%] md:w-full">
                    <Text
                      className="mb-[-1.29px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                      size="txtInterRegular25"
                    >
                      First Name *
                    </Text>
                    <div className="bg-blue_gray-100 h-[54px] mt-auto mx-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterRegular25"
                    >
                      Last Name *
                    </Text>
                    <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-full"></div>
                  </div>
                </div>
                <div className="flex flex-row font-inter sm:gap-10 items-center justify-between mt-3.5 w-[67%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterRegular25"
                  >
                    Preferred Name *
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterRegular25"
                  >
                    Birth Date *
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                  <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[49%]"></div>
                  <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[49%]"></div>
                </div>
                <Text
                  className="mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterRegular25"
                >
                  Email Address *
                </Text>
                <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-full"></div>
                <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-between mt-[29px] w-full">
                  <div className="h-[83px] md:mt-0 mt-0.5 relative w-[49%] md:w-full">
                    <Text
                      className="mb-[-1.68px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                      size="txtInterRegular25"
                    >
                      Gender Identity *
                    </Text>
                    <div className="bg-blue_gray-100 h-[54px] mt-auto mx-auto rounded-[5px] w-full"></div>
                  </div>
                  <div className="h-[83px] mb-0.5 relative w-[49%] md:w-full">
                    <Text
                      className="mb-[-1.56px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                      size="txtInterRegular25"
                    >
                      Pronouns
                    </Text>
                    <div className="bg-blue_gray-100 h-[54px] mt-auto mx-auto rounded-[5px] w-full"></div>
                  </div>
                </div>
                <div className="font-inter h-[83px] mt-[23px] relative w-full">
                  <Text
                    className="mb-[-1.54px] ml-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                    size="txtInterRegular25"
                  >
                    Race/Ethnicity *
                  </Text>
                  <div className="bg-blue_gray-100 h-[54px] mt-auto mx-auto rounded-[5px] w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1261px] mt-3.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col font-inter items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterRegular30"
                >
                  Phone
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[3px] mt-[7px] w-[79%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[22%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterRegular25"
                    >
                      Primary *
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[211px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                      color="blue_gray_100"
                      size="sm"
                      variant="fill"
                    >
                      ___ - ___ - ____
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[11px] items-start justify-start ml-12 md:ml-[0] w-[22%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterRegular25"
                    >
                      Mobile
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[211px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                      color="blue_gray_100"
                      size="sm"
                      variant="fill"
                    >
                      ___ - ___ - ____
                    </Button>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[49px] w-[48%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterRegular25"
                      >
                        Home
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[211px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        ___ - ___ - ____
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterRegular25"
                      >
                        Work
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[211px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        ___ - ___ - ____
                      </Button>
                    </div>
                  </List>
                </div>
                <Text
                  className="ml-2.5 md:ml-[0] mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterRegular25"
                >
                  + Phone Number
                </Text>
                <div className="flex flex-row gap-[22px] items-start justify-start md:ml-[0] ml-[11px] mt-[9px] w-[27%] md:w-full">
                  <div className="bg-blue_gray-100 h-[27px] mb-1 w-[12%]"></div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterRegular25"
                  >
                    Enable Text Messaging
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-3 w-full" />
              </div>
            </div>
            <div className="flex flex-col font-inter items-center justify-start mt-[30px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[190px] relative w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start mb-[undefinedpx] ml-auto mr-3 mt-9 w-[26%] z-[1]">
                    <div className="flex flex-row gap-[61px] items-start justify-start w-[62%] md:w-full">
                      <Text
                        className="mb-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterRegular25"
                      >
                        State *
                      </Text>
                      <Text
                        className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterRegular25"
                      >
                        Zip *
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[36%]"></div>
                      <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[59%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[undefinedpx] mt-11 w-[43%] z-[1]">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterRegular25"
                    >
                      Street *
                    </Text>
                    <div className="bg-blue_gray-100 h-[54px] mt-[3px] rounded-[5px] w-full"></div>
                  </div>
                  <Text
                    className="mb-[-0.68px] ml-[557px] mt-[46px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                    size="txtInterRegular25"
                  >
                    City *
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[148px] items-start justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      Address
                    </Text>
                    <Line className="bg-black-900 h-px ml-1 md:ml-[0] w-full" />
                  </div>
                  <div className="bg-blue_gray-100 h-[54px] mb-[undefinedpx] ml-auto mr-[354px] mt-auto rounded-[5px] w-[28%] z-[1]"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-[23px] items-end justify-between mt-[23px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-[18px] justify-start mb-1">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30"
                      >
                        Medical
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[7px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterRegular25"
                    >
                      Current Primary Care Clinician
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100 h-[54px] md:mt-0 mt-9 rounded-[5px] w-[70%]"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[15px] w-[99%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterRegular25"
                  >
                    Current Primary Therapist
                  </Text>
                  <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[74%]"></div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-3.5 w-[99%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtInterRegular25"
                  >
                    Current Psychiatric Prescriber
                  </Text>
                  <div className="bg-blue_gray-100 h-[54px] rounded-[5px] w-[70%]"></div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-inriaserif leading-[normal] min-w-[161px] md:ml-[0] ml-[1092px] mt-[53px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              shape="round"
              color="pink_900"
              size="sm"
              variant="fill"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreenPage;
