import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
     const { loading, logout } = useLogout();
     return (
          <div className="mt-auto">
               {!loading ? (
                    <CiLogout
                         className="w-[25px] h-[25px] cursor-pointer hover:text-slate-600 "
                         onClick={logout}
                    />
               ) : (
                    <span className="loading loading-spinner text-accent"></span>
               )}
          </div>
     );
};

export default LogoutButton;
