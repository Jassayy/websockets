import React from "react";
import Messages from "./messages/Messages";
import MessageInput from "./messages/MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
     const noChatSelected = true;
     return (
          <>
               {noChatSelected ? (
                    <NoChatSelected />
               ) : (
                    <div className="md:min-w-[450px] flex flex-col ">
                         {/* header */}

                         <div className=" py-2 px-4 mb-2">
                              <span className="label-text">To:</span>
                              <span className="text-teal-200 font-mono ml-2">
                                   Riyaaaa
                              </span>
                         </div>

                         <Messages />
                         <MessageInput />
                    </div>
               )}
          </>
     );
};

export default MessageContainer;

const NoChatSelected = () => {
     return (
          <div className="flex items-center justify-center min-w-[450px] h-full  bg-opacity-50 backdrop-blur-sm">
               <div className="px-4 text-center sm:text-lg md:text-xl text-slate-100 font-mono font-semibold flex flex-col items-center gap-4">
                    <p className="text-2xl font-bold">Welcome Jasss ❤️</p>
                    <p className="text-lg">Select a chat to start messaging</p>
                    <TiMessages className="h-32 w-32 text-teal-500" />
               </div>
          </div>
     );
};
