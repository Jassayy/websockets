import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import useSendMessages from "../../hooks/useSendMessages";
const MessageInput = () => {
     const [message, setMessage] = useState("");
     const { loading, sendMessage } = useSendMessages();
     const handleSubmit = async (e) => {
          e.preventDefault();

          if (!message) {
               return;
          }

          await sendMessage(message);
          setMessage("");
     };

     return (
          <div className="px-4 ">
               <form onSubmit={handleSubmit}>
                    <div className="w-full flex justify-center items-center gap-2 relative ">
                         <input
                              type="text"
                              className="input input-bordered text-sm rounded-lg p-3 bg-transparent text-white w-full"
                              placeholder="Send a message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                         />
                         <button className=" h-8 w-8 cursor-pointer hover:text-slate-500 absolute inset-y-0 end-0  mt-2 mr-2">
                              {" "}
                              {loading ? (
                                   <span className="loading loading-spinner text-error"></span>
                              ) : (
                                   <LuSend className="h-full w-full" />
                              )}
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default MessageInput;
