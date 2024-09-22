import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import Conversations from "../sidebar/Conversations";
import LogoutButton from "../sidebar/LogoutButton";
import SearchInput from "../sidebar/SearchInput";
import Header from "../sidebar/Header";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="drawer px-5 border-b border-gray-400">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <div className="py-2 mb-2">
                <div className="avatar flex items-center gap-2">
                  <label htmlFor="my-drawer" className="md:hidden">
                    <TfiMenu className="text-black text-3xl cursor-pointer" />
                  </label>
                  <div className="w-10 ml-5 rounded-full">
                    <img
                      src={selectedConversation.profilePic}
                      alt="user avatar"
                    />
                  </div>
                  <span className="text-black font-bold">
                    {selectedConversation.fullName} <br />
                    <span
                      className={`text-sm ${
                        onlineUsers.includes(selectedConversation._id)
                          ? "text-blue-500"
                          : "text-gray-500"
                      }`}
                    >
                      {onlineUsers.includes(selectedConversation._id)
                        ? "Online"
                        : "Offline"}
                    </span>
                  </span>
                </div>
              </div>
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
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  const name = authUser.fullName;
  const firstName = name.split(" ");
  return (
    <div className="flex flex-col h-full">
      <div className="drawer px-8 py-4 md:hidden">
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
      </div>
      <div className="flex-1 content-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
          <p>Hey {firstName[0]} 👋</p>
          <p>Select a chat to start messaging</p>
        </div>
      </div>
    </div>
  );
};
