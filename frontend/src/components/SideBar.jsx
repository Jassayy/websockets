import React from "react";
import SearchInput from "./sidebar/SearchInput";
import Conversations from "./sidebar/Conversations";
import LogoutButton from "./sidebar/LogoutButton";

const SideBar = () => {
     return (
          <div className="flex flex-col p-4 min-w-[400px] border-r border-slate-600">
               <SearchInput />
               <div className="divider px-3"></div>
               <Conversations />
               <LogoutButton />
          </div>
     );
};

export default SideBar;
