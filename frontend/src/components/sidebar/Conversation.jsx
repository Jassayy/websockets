import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
     const { selectedConversation, setSelectedConversation } =
          useConversation();

     const isSelected = selectedConversation?._id === conversation._id;

     const { onlineUsers } = useSocketContext();

     const isOnline =
          Array.isArray(onlineUsers) && onlineUsers.includes(conversation._id);
     return (
          <>
               <div
                    className={`flex gap-2 items-center hover:bg-slate-800 rounded px-1 py-2 cursor-pointer w-full
                    ${isSelected ? "bg-slate-800" : ""}`}
                    onClick={() => {
                         setSelectedConversation(conversation);
                    }}
               >
                    <div className={`avatar ${isOnline ? "online" : ""}`}>
                         <div className="w-12 rounded-full ">
                              <img
                                   src={conversation.profilePic}
                                   alt="User Avatar"
                                   className="rounded-full "
                              />
                         </div>
                    </div>
                    <div className=" w-full flex px-2 justify-between ">
                         <p>
                              {conversation.fullName.charAt(0).toUpperCase() +
                                   conversation.fullName.slice(1)}
                         </p>
                         <span>{emoji}</span>
                    </div>
               </div>
               {!lastIdx && (
                    <div className="divider py-0 my-0 h-1 bg-slate-900"></div>
               )}
          </>
     );
};

export default Conversation;
