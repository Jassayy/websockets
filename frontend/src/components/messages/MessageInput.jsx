import React from "react";
import { LuSend } from "react-icons/lu";
const MessageInput = () => {
     return (
          <div className="px-4  ">
               <form>
                    <div className="w-full flex justify-center items-center gap-2 relative ">
                         <input
                              type="text"
                              className="input input-bordered text-sm rounded-lg p-3 bg-transparent text-white w-full"
                              placeholder="Send a message"
                         />
                         <LuSend className=" h-8 w-8 cursor-pointer hover:text-slate-500 absolute inset-y-0 end-0  mt-2 mr-2" />
                    </div>
               </form>
          </div>
     );
};

export default MessageInput;
