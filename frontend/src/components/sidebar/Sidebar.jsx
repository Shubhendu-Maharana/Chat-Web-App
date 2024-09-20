import Conversations from "./Conversations";
import Header from "./Header";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div className="h-full p-8 hidden md:flex flex-col border-r border-gray-200">
        <Header />
        <SearchInput />
        <div className="divider px-3 my-4"></div>
        <Conversations />
        <LogoutButton />
      </div>
      {/* <div className="drawer p-10 md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <TfiMenu className="text-black text-3xl cursor-pointer" />
          </label>
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-8 h-full bg-blue-200 text-base-content">
            <label htmlFor="my-drawer">
              <IoClose className="text-black text-3xl cursor-pointer" />
            </label>
            <Header />
            <SearchInput />
            <div className="divider px-3 my-4"></div>
            <Conversations />
            <LogoutButton />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Sidebar;
