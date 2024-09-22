import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="py-4 flex h-full w-full bg-[#f2f6ff]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
