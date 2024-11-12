import React from "react";

const Conversation = () => {
     return (
          <>
               <div className="flex gap-2 items-center hover:bg-slate-800 rounded px-1 py-2 cursor-pointer w-full">
                    <div className="avatar online">
                         <div className="w-12 rounded-full ">
                              <img
                                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                   alt="User Avatar"
                                   className="rounded-full "
                              />
                         </div>
                    </div>
                    <div className=" w-full flex px-2 justify-between ">
                         <p>Jassssss</p>
                         <span>⚽️</span>
                    </div>
               </div>
               <div className="divider py-0 my-0 h-1 bg-slate-900"></div>
          </>
     );
};

export default Conversation;
