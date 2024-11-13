import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
     const { authUser } = useAuthContext();
     console.log(authUser.user._id);
     const { selectedConversation } = useConversation();
     const fromMe = message.senderId === authUser.user._id;
     const background = fromMe ? "bg-blue-500" : "bg-slate-800";
     const formattedTime = extractTime(message.createdAt);

     const chatClassName = fromMe ? "chat-end" : "chat-start";
     return (
          <>
               <div className={`chat ${chatClassName}`}>
                    <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                              <img
                                   alt="Tailwind CSS chat bubble component"
                                   src={
                                        fromMe
                                             ? authUser.user.profilePic
                                             : selectedConversation.profilePic
                                   }
                              />
                         </div>
                    </div>

                    <div className={`chat-bubble ${background} text-white`}>
                         {message.message}
                    </div>
                    <div className="chat-footer opacity-50 text-xs flex gap-1">
                         {formattedTime}
                    </div>
               </div>
          </>
     );
};

export default Message;
