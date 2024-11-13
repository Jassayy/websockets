import React from "react";

const MessageSkeleton = () => {
     return (
          <>
               <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center ">
                         <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                         <div className="flex flex-col gap-3">
                              <div className="skeleton  w-56 h-8"></div>
                              <div className="skeleton w-56 h-8"></div>
                         </div>
                    </div>
                    <div className="flex gap-3 items-center justify-end ">
                         <div className="flex flex-col gap-1"></div>
                         <div className="skeleton w-56 h-8"></div>
                         <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                    </div>
               </div>
          </>
     );
};

export default MessageSkeleton;
