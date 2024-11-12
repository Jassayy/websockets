import React from "react";
import { CiLogout } from "react-icons/ci";
const LogoutButton = () => {
     return (
          <div className="mt-auto">
               <CiLogout className="w-[25px] h-[25px] cursor-pointer hover:text-slate-600 " />
          </div>
     );
};

export default LogoutButton;
