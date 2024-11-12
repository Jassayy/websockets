import React from "react";
import SideBar from "../../components/SideBar";
import MessageContainer from "../../components/MessageContainer";

const Home = () => {
     return (
          <>
               <div className="flex justify-center items-center ">
                    <div className=" flex sm:h-[450px] md:h-[550px] bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-2xl p-4 min-w-[80%]">
                         <SideBar />
                         <MessageContainer />
                    </div>
               </div>
          </>
     );
};

export default Home;
