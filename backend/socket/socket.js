import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
     cors: {
          origin: "http://localhost:3000",
          credentials: true,
          methods: ["GET", "POST"],
     },
});

export const getRecieverSocketId = (recieverId) => {
     return userSocketMap[recieverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
     console.log("A user is connected : ", socket.id);
     // socket.on("error", (err) => {
     //      console.log("error in socket: ", err);
     // });
     const userId = socket.handshake.query.userId;
     if (userId !== undefined) {
          userSocketMap[userId] = socket.id;
     }
     io.emit("getOnlineUsers", Object.keys(userSocketMap));

     socket.on("disconnect", () => {
          console.log("user disconnected : ", socket.id);
          delete userSocketMap[userId];
          io.emit("getOnlineUsers", Object.keys(userSocketMap));
     });
});

export { app, io, server };
