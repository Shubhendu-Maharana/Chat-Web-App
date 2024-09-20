import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="pb-3 flex gap-5 items-center">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={authUser.profilePic} alt="Profile Picture" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl text-red-500 font-semibold">Hey,</span>
        <span className="text-3xl text-blue-500 font-semibold">
          {authUser.fullName}
        </span>
      </div>
    </div>
  );
};

export default Header;
