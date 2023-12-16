import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const ReferralsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[610px] w-full">
        <div className="flex flex-col md:gap-10 gap-[66px] justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[115px] md:px-5 w-[24%] md:w-full">
            <div className="flex flex-row font-inriasans gap-2 items-start justify-start w-full">
              <Text
                className="common-pointer mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 underline"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/documents")}
              >
                Documents{" "}
              </Text>
              <Text
                className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Referrals</>
              </Text>
            </div>
            <Text
              className="mt-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Referrals
            </Text>
            <Text
              className="mt-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              No Referrals to Display
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralsPage;
