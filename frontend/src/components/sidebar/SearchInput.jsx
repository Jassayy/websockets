import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
     const [search, setSearch] = useState("");
     const { setSelectedConversation } = useConversation();
     const { conversations } = useGetConversations();

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!search) return;
          if (search.length < 3) {
               return toast.error("Search must be at least 3 characters");
          }
          const conversation = conversations.find((c) =>
               c.fullName.toLowerCase().includes(search.toLowerCase())
          );

          if (conversation) {
               setSelectedConversation(conversation);
               setSearch("");
          } else {
               toast.error("No user found");
          }
     };
     return (
          <form
               className="flex items-center gap-2 w-full  justify-between"
               onSubmit={handleSubmit}
          >
               <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered rounded-full flex-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
               />
               <button className="btn btn-circle border-1 border-transparent bg-teal-500 text-white hover:bg-teal-700 hover:bg-transparent hover:border-1 hover:border-teal-500">
                    <CiSearch className="w-6 h-6 outline-none" />
               </button>
          </form>
     );
};

export default SearchInput;
