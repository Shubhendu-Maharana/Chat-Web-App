import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import {
  Menu,
  Item,
  Separator,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";
import useDeleteMessage from "../../hooks/useDeleteMessage";
import toast from "react-hot-toast";

const MENU_ID = "blahblah";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const { deleteMessage } = useDeleteMessage();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu() {
    show({
      event,
      props: message,
    });
  }

  const handleMessageDelete = ({ props }) => {
    if (authUser._id === props.senderId) {
      deleteMessage(props._id);
    } else {
      toast.error("You can't delete his/her message yet :(");
    }
  };

  const handleMessageCopy = ({ props }) => {
    navigator.clipboard.writeText(props.message);
    
  };

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile Picture" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble ${shakeClass} text-white chat-bubble-success ${bubbleBgColor}`}
        onContextMenu={handleContextMenu}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs text-black flex gap-1 items-center">
        {formattedTime}
      </div>
      <Menu id={MENU_ID}>
        <Item onClick={handleMessageCopy}>Copy</Item>
        <Item onClick={handleMessageDelete}>Delete</Item>
        <Separator />
        <Item disabled>Disabled</Item>
      </Menu>
    </div>
  );
};
export default Message;
