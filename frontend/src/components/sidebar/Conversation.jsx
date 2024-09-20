import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={` flex gap-2 items-center hover:bg-gray-300 rounded-xl p-2 px-6 cursor-pointer transition-all ease-in-out duration-700 ${
          isSelected
            ? "bg-sky-500 shadow-md shadow-sky-300 text-white"
            : "bg-white hover:shadow-md hover:shadow-gray-700 text-black"
        }
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="">
            <p className="font-bold">{conversation.fullName}</p>
            <p
              className={`text-sm ${
                isOnline ? "text-orange-300" : "text-gray-500"
              }`}
            >
              {isOnline ? "Active Now" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      {/* {!lastIdx && <div className="divider my-0 py-0 h-1" />} */}
    </>
  );
};
export default Conversation;
