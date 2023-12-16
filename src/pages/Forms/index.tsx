import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";
import Header from "components/Header";

type TableRowType = {
  rowrectanglefiftyfour?: string;
  rowformtitle: string;
  status: string;
};

const FormsPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    { rowformtitle: "Upload", status: "Upload Required" },
    { rowformtitle: "Upload", status: "Upload Required" },
    { rowformtitle: "Upload", status: "Upload Required" },
    { rowformtitle: "Upload", status: "Upload Required" },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowrectanglefiftyfour", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center p-6 sm:px-5">
            <div className="bg-white-A700 border border-black-900 border-solid h-[25px] mb-2 ml-2 mr-[62px] rounded-[5px] w-[25px]"></div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[143px] p-5">
            <div className="bg-blue_gray-100 border border-black-900 border-solid h-[25px] rounded-[5px] w-[25px]"></div>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowformtitle", {
        cell: (info) => (
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pr-3 py-3">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansRegular24"
            >
              CAP Consent Form
            </Text>
            <Button
              className="cursor-pointer leading-[normal] mb-[7px] min-w-[161px] md:ml-[0] ml-[218px] text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="pink_900"
              size="sm"
              variant="fill"
            >
              Download
            </Button>
            <Button
              className="border-[3px] border-pink-900 border-solid cursor-pointer leading-[normal] mb-[5px] min-w-[114px] md:ml-[0] ml-[98px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[887px]">
            <Text
              className="my-[17px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Form Title
            </Text>
            <Text
              className="my-[17px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Download
            </Text>
            <Text
              className="mb-3.5 mt-5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInriaSansLight24"
            >
              Upload
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="py-[26px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtInriaSansRegular24"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[193px] pb-[15px] pt-[21px] sm:px-5 px-[35px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtInriaSansLight24"
          >
            Status
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[243px] w-full">
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1224px] mx-auto md:px-5 w-full">
            <div className="flex flex-row font-inriasans gap-2 items-start justify-start w-1/4 md:w-full">
              <Text
                className="common-pointer mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 underline"
                size="txtInriaSansRegular32"
                onClick={() => navigate("/documents")}
              >
                Documents{" "}
              </Text>
              <Text
                className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInriaSansRegular32"
              >
                <>&gt;&gt; Forms</>
              </Text>
            </div>
            <Text
              className="mt-2 text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInriaSerifBold48"
            >
              Forms
            </Text>
            <div className="overflow-auto font-inriasans mt-[19px] w-full">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={"border-b border-blue_gray-100_01"}
                headerClass="bg-blue_gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
