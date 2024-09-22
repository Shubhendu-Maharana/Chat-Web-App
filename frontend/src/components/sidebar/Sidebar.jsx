import Conversations from "./Conversations";
import Header from "./Header";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import React from "react";

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
    </div>
  );
};
export default Sidebar;
