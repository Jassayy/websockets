import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
     return (
          <form className="flex items-center gap-2 w-full  justify-between">
               <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered rounded-full flex-1"
               />
               <button className="btn btn-circle border-1 border-transparent bg-teal-500 text-white hover:bg-teal-700 hover:bg-transparent hover:border-1 hover:border-teal-500">
                    <CiSearch className="w-6 h-6 outline-none" />
               </button>
          </form>
     );
};

export default SearchInput;
