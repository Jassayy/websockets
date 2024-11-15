import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
     return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
     const [socket, setSocket] = useState(null);
     const [onlineUsers, setOnlineUsers] = useState(null);
     const { authUser } = useAuthContext();

     useEffect(() => {
          if (authUser) {
               const socket = io("https://websockets-162i.onrender.com", {
                    query: {
                         userId: authUser.user._id,
                    },
               });

               setSocket(socket);

               socket.on("getOnlineUsers", (users) => {
                    setOnlineUsers(users);
               });

               return () => {
                    socket.close();
               };
          } else {
               if (socket) {
                    socket.close();
                    setSocket(null);
               }
          }
     }, [authUser]);
     return (
          <SocketContext.Provider value={{ socket, onlineUsers }}>
               {children}
          </SocketContext.Provider>
     );
};
