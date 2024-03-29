import React, { useState } from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import EntriesEmployeesColumnThree from "components/EntriesEmployeesColumnThree";

import { CloseSVG } from "../../assets/images";

const topOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EntriesEmployeesPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("handleButtonClick clicked!", isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const tableData = React.useRef([
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("employeeusernamOne", {
        cell: (info) => (
          <Text
            className="pl-5 py-[35px] text-blue_gray-700 text-sm"
            size="txtInterRegular20"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm"
            size="txtInterRegular18"
          >
            Employee User Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("pklnumber", {
        cell: (info) => (
          <div className="flex flex-row sm:gap-10 items-center justify-between p-2">
            <Text
              className="text-blue_gray-700 text-sm"
              size="txtInterRegular20"
            >
              Designation/Role/
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm"
            size="txtInterRegular18"
          >
            Role
          </Text>
        ),
      }),
      tableColumnHelper.accessor("customername", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-end p-3">
            <div className="bg-gray-50 cursor-pointer flex items-center justify-center mr-1.5 px-[20px] py-4 rounded-lg">
              <Img
                className="h-3 w-3"
                alt="edit_One"
                src="images/img_edit_blue_gray_200.svg"
              />
            </div>
            <Button
              className="bg-gray-50 cursor-pointer flex items-center justify-center px-[50px] py-3 rounded-lg"
              rightIcon={
                <Img
                  className="h-3 ml-2"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
            >
              <div className="sm:px-5 text-blue_gray-200 text-end text-sm">
                {info?.getValue()}
              </div>
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm text-right pr-20"
            size="txtInterRegular18"
          >
            Actions
          </Text>
        ),
      }),
    ];
  }, []);

  const [topvalue, setTopvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex font-plusjakartasans mx-auto relative min-w-full max-w-full overflow-auto ">
        {/* Sid Bar */}
        <Sidebar
          className={`"!sticky  bg-white-A700 flex h-screen xs:hidden justify-start my-auto overflow-hidden top-[0]" ${
            toggleMenu ? "menu-close" : "menu-open"
          }`}
        >
          {/* Menu Toggler */}
          <div
            className={`"bg-white-A700 flex flex-row h-12 items-center justify-start p-3 rounded-lg w-12" ${
              toggleMenu ? "" : "hidden"
            }`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <Img
              className="h-5 w-5"
              src="images/img_menualt02.svg"
              alt="menualtTwo"
            />
          </div>

          {/* ASG Text */}
          <div
            className={`"flex flex-col ml-2 my-5" ${
              toggleMenu ? "" : "hidden"
            }`}
          >
            <Text
              className="italic md:text-5xl sm:text-[42px] text-[18px] text-red-800 tracking-[-2.24px]"
              size="txtPlusJakartaSansExtraBoldItalic56"
            >
              <span className="text-red-800 font-inter text-left font-extrabold italic">
                A
              </span>
              <span className="text-red-800 font-inter text-left font-extrabold italic">
                G
              </span>
              <span className="text-red-800 font-inter text-left font-extrabold italic">
                S
              </span>
            </Text>
          </div>

          {/* Notifications */}
          {/* <div
            className={`"bg-white-A700 font-inter h-12 md:h-6 p-2 relative rounded-lg w-12" ${
              toggleMenu ? "" : "hidden"
            }`}
          >
            <Img
              className="absolute h-6 inset-[0] justify-center m-auto w-6"
              src="images/img_notification.svg"
              alt="notification"
            />
            <Text
              className="absolute bg-red-800 flex h-4 items-center justify-center right-[17%] rounded-[50%] text-[10px] text-center text-white-A700 top-[17%] w-4"
              size="txtInterBold10"
            >
              2
            </Text>
          </div> */}

          <div
            className={`"flex flex-row gap-[5px] h-[100px] md:h-auto items-center justify-start mx-4 pl-1 pr-2.5 py-6" ${
              toggleMenu ? "hidden" : ""
            }`}
          >
            <div className="flex flex-row gap-3 h-[71px] md:h-auto items-center justify-start w-auto">
              <div
                className="bg-white-A700 flex flex-col h-12 items-center justify-start p-3 rounded-lg w-12"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <Img
                  className="h-5 w-5"
                  src="images/img_menualt02.svg"
                  alt="menualtTwo"
                />
              </div>
              <div className="flex flex-col  items-center justify-between w-[121px]">
                <Text
                  className="italic md:text-5xl sm:text-[42px] text-[24px] text-red-800 tracking-[-2.24px] w-[121px]"
                  size="txtPlusJakartaSansExtraBoldItalic56"
                >
                  <span className="text-red-800 font-inter text-left font-extrabold italic">
                    A
                  </span>
                  <span className="text-red-800 font-inter text-left font-extrabold italic">
                    G
                  </span>
                  <span className="text-red-800 font-inter text-left font-extrabold italic">
                    S
                  </span>
                </Text>
              </div>
            </div>
            {/* <div className="bg-white-A700 font-inter h-12 md:h-6 p-2 relative rounded-lg w-12">
              <Img
                className="absolute h-6 inset-[0] justify-center m-auto w-6"
                src="images/img_notification.svg"
                alt="notification"
              />
              <Text
                className="absolute bg-red-800 flex h-4 items-center justify-center right-[17%] rounded-[50%] text-[10px] text-center text-white-A700 top-[17%] w-4"
                size="txtInterBold10"
              >
                2
              </Text>
            </div> */}
          </div>

          {/* Menu */}
          <Menu
            menuItemStyles={{
              button: {
                padding: "15px 15px 15px 16px",
                width: "100%",
                gap: "16px",
                color: "#9098a5",
                fontWeight: 500,
                fontSize: "18px",
                borderRadius: "8px",
                [`&:hover, &.ps-active`]: {
                  backgroundColor: "#ffffffff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img
                className="h-5 w-5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            )}
            className="flex flex-col font-inter items-center justify-start mb-[89px] pl-3 sm:pr-5 pr-0 pt-[17px]"
          >
            <div className="flex flex-col items-center justify-start pb-[9px]">
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_facesmile.svg"
                    alt="facesmile"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    AGS Admin
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_clipboardlist.svg"
                    alt="clipboardlist"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Quotations
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_gridalt.svg"
                    alt="gridalt"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Performa Center
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_enterprise.svg"
                    alt="enterprise"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Showroom Center
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="images/img_truck.svg"
                    alt="truck"
                  />
                }
                label={
                  <Text
                    className="flex-1 mt-[3px] tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Logistics Center
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_chartpiealt01.svg"
                    alt="chartpiealtOne"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Stock
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-5 w-5"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                }
                label={
                  <Text
                    className="flex-1 tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Entries
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="images/img_banknotes.svg"
                    alt="banknotes"
                  />
                }
                label={
                  <Text
                    className="flex-1 mt-[3px] tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Payments Center
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="images/img_fileplus.svg"
                    alt="fileplus"
                  />
                }
                label={
                  <Text
                    className="flex-1 mt-[3px] tracking-[-0.36px]"
                    size="txtInterSmall12"
                  >
                    Buyer Center
                  </Text>
                }
              >
                <MenuItem>
                  <span
                    className="text-sm font-light"
                    style={{ color: "red !important" }}
                  >
                    Submenu Item
                  </span>
                </MenuItem>
              </SubMenu>
            </div>
            <Img
              className="h-px"
              src="images/img_scrollbar.svg"
              alt="scrollbar"
            />
            <div className="flex flex-col items-center justify-end mt-[25px]">
              <MenuItem
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="images/img_settingsalt.svg"
                    alt="settingsalt"
                  />
                }
              >
                <Text className="tracking-[-0.36px]" size="txtInterSmall12">
                  Settings
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-6 mb-1 w-6"
                    src="images/img_logout.svg"
                    alt="logout"
                  />
                }
              >
                <Text className="tracking-[-0.36px]" size="txtInterSmall12">
                  Signout
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>

        {/* Page Content */}
        {/* overflow-hidden */}
        <div className="flex flex-col font-inter h-screen items-center justify-start max-w-full p-5 w-full z-[1]  ">
          <div className="bg-gray-50 flex flex-col gap-6 h-[1060px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-[24px">
            <EntriesEmployeesColumnThree
              onClick={handleButtonClick}
              // handleToggleModal={() => {setIsModalOpen(!isModalOpen)}}
              className="bg-white-A700 flex flex-col gap-8 items-start justify-center p-5 rounded-[16px]"
            />
            <div className="flex flex-col items-start justify-start min-w-full  ">
              <div className="bg-white-A700 flex flex-col md:h-auto items-start justify-end p-5 sm:px-5 rounded-[16px] min-w-full">
                <div className="min-w-full">
                  {/* <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={"bg-white-A700 border border-gray-50"}
                    headerClass="bg-white-A700 border border-gray-50"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="modal fixed top-[5%] left-[30%] z-10 min-w-[45vw] rounded-xl bg-white-A700 p-6 mx-auto flex items-center justify-center">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex items-center justify-between w-full">
              <span className="text-gray font-medium text-[16px]">Add New</span>
              <button className=" bg-gray-200 flex items-center justify-center py-1 px-2 rounded-md text-xs font-light text-white-A700">
                x
              </button>
            </div>
            <div className="flex flex-col items-center gap-5 my-5  w-full">
              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>

              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>

              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>

              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>
            </div>

            <div className="flex items-center justify-between w-full mt-6">
              <span className="text-gray font-medium text-[16px]">
                User permissions
              </span>
            </div>
            <div className="flex flex-col items-center gap-5 my-5 w-full">
              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>

              <div className="flex items-center gap-5 w-full">
                <Input
                  name="top"
                  placeholder="User Name"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
                <Input
                  name="top"
                  placeholder="Phone Number"
                  className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                  wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                ></Input>
              </div>

              <div className="flex items-center justify-end w-full gap-2 mt-3">
                <div
                  className="px-5 py-3 text-center rounded-lg bg-gray-200"
                  onClick={handleButtonClick}
                >
                  Back
                </div>
                <div
                  className="px-9 py-3 text-center rounded-lg bg-black text-white-A700"
                  onClick={handleButtonClick}
                >
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EntriesEmployeesPage;
