import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const MessageScreenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col sm:gap-10 md:gap-10 gap-[63px] items-center justify-end mx-auto w-full">
        <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="bg-pink-900 flex flex-1 flex-col font-inriaserif items-center justify-end p-[11px] w-full">
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
                <Line className="bg-white-A700 md:h-0.5 h-[42px] md:ml-[0] ml-[267px] md:mt-0 mt-0.5 w-0.5 md:w-full" />
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
            className="cursor-pointer font-bold font-inriasans leading-[normal] min-w-[251px] md:ml-[0] ml-[264px] mr-[925px] md:mt-0 mt-[147px] rounded-tl-[20px] rounded-tr-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            Messages
          </Button>
        </header>
        <div className="md:h-[2022px] sm:h-[769px] h-[776px] max-w-[1376px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col font-inriasans h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col gap-[33px] justify-start w-full">
              <Input
                name="searchbar"
                placeholder="Search Messages"
                className="leading-[normal] p-0 placeholder:text-gray-700 text-left text-xl w-full"
                wrapClassName="flex md:ml-[0] ml-[381px] w-[71%]"
                prefix={
                  <Img
                    className="mt-auto mb-px h-6 mr-[9px]"
                    src="images/img_mdisearch.svg"
                    alt="mdi:search"
                  />
                }
                shape="round"
                color="black_900"
                variant="outline"
              ></Input>
              <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-between w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-start justify-between w-[31%] md:w-full">
                  <div className="flex sm:h-[606px] md:h-[615px] h-[627px] justify-end sm:mt-0 mt-[9px] relative w-[94%] sm:w-full">
                    <Img
                      className="h-[455px] mb-[57px] mt-auto mx-auto"
                      src="images/img_messageboundaries.svg"
                      alt="messageboundari"
                    />
                    <div className="absolute flex flex-col gap-[11px] h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="h-[115px] relative w-full">
                        <div className="flex flex-col gap-[5px] h-full items-center justify-start m-auto w-[95%]">
                          <div className="flex flex-row font-inter gap-[29px] items-start justify-between w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtInterSemiBold20"
                              >
                                University Health Services
                              </Text>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Have You Gotten Your Flu Shot?
                              </Text>
                            </div>
                            <Text
                              className="text-gray-400 text-xl"
                              size="txtInterSemiBold20Gray400"
                            >
                              10/0...{" "}
                            </Text>
                          </div>
                          <Text
                            className="text-black-900 text-lg w-full"
                            size="txtInriaSansRegular18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec tincidunt eleme...
                          </Text>
                        </div>
                        <div className="absolute bg-gray-400_75 h-[115px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                        <List
                          className="flex flex-col gap-4 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row font-inter items-center justify-between w-full">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  University Health Services
                                </Text>
                                <Text
                                  className="text-gray-400 text-xl"
                                  size="txtInterSemiBold20Gray400"
                                >
                                  10/0...{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Subject
                              </Text>
                              <Text
                                className="mt-[3px] text-black-900 text-lg w-full"
                                size="txtInriaSansRegular18"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec tincidunt eleme...
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row font-inter items-center justify-between w-full">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  University Health Services
                                </Text>
                                <Text
                                  className="text-gray-400 text-xl"
                                  size="txtInterSemiBold20Gray400"
                                >
                                  10/0...{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Subject
                              </Text>
                              <Text
                                className="mt-[3px] text-black-900 text-lg w-full"
                                size="txtInriaSansRegular18"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec tincidunt eleme...
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row font-inter items-center justify-between w-full">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  University Health Services
                                </Text>
                                <Text
                                  className="text-gray-400 text-xl"
                                  size="txtInterSemiBold20Gray400"
                                >
                                  10/0...{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Subject
                              </Text>
                              <Text
                                className="mt-[3px] text-black-900 text-lg w-full"
                                size="txtInriaSansRegular18"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec tincidunt eleme...
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row font-inter items-center justify-between w-full">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  University Health Services
                                </Text>
                                <Text
                                  className="text-gray-400 text-xl"
                                  size="txtInterSemiBold20Gray400"
                                >
                                  10/0...{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Subject
                              </Text>
                              <Text
                                className="text-black-900 text-lg w-full"
                                size="txtInriaSansRegular18"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec tincidunt eleme...
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  University Health Services
                                </Text>
                                <Text
                                  className="text-gray-400 text-xl"
                                  size="txtInterSemiBold20Gray400"
                                >
                                  10/0...{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Subject
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[686px]"
                    src="images/img_scrollbar.svg"
                    alt="scrollbar"
                  />
                </div>
                <div className="flex md:flex-1 flex-col font-inriasans items-center justify-start w-[69%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInriaSansBold30"
                      >
                        Have You Gotten Your Flu Shot?
                      </Text>
                      <Text
                        className="mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInriaSansRegular25"
                      >
                        From: University Health Services
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-1 w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInriaSansRegular25"
                        >
                          To: Cocky Gamecock
                        </Text>
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-right"
                          size="txtInriaSansRegular25"
                        >
                          Date: 10/04/2023 8:30am
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-400 h-px mt-[13px] w-full" />
                    <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[21px] w-[99%] md:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInriaSansRegular30Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec tincidunt elementum vestibulum. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Donec lobortis ante sed ipsum
                        commodo, ac interdum nisi placerat. Quisque quis nunc
                        arcu. Nullam varius magna vitae velit pretium congue.
                        Morbi at fringilla orci. Praesent diam turpis, iaculis
                        id commodo id, aliquet at nunc. Pellentesque congue nec
                        turpis sed varius. Praesent fringilla, nunc feugiat
                        faucibus consequat, velit eros efficitur lectus, at
                        dignissim eros nisi vel mi. Aenean vitae consequat
                        lacus. Aliquam sem ipsum, placerat id augue nec,
                        ultrices luctus metus.
                      </Text>
                      <div className="bg-blue_gray-100 h-[326px] mb-[198px] md:mt-0 mt-0.5 rounded-md w-[2%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Input
            name="composemessage"
            placeholder="Compose Message"
            className="font-bold font-inriaserif leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-center w-full"
            wrapClassName="flex left-[1%] ml-5 rounded-[15px] top-[0] w-1/4"
            prefix={
              <Img
                className="h-[38px] mr-[22px] right-[2%] absolute my-auto"
                src="images/img_edit.svg"
                alt="edit"
              />
            }
            color="pink_900"
          ></Input>
        </div>
      </div>
    </>
  );
};

export default MessageScreenPage;
