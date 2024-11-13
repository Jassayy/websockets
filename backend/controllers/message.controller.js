import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { getRecieverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
     try {
          const { message } = req.body;
          const { id: recieverId } = req.params;

          const senderId = req.user._id;

          //!find conversation between these two users
          let conversation = await Conversation.findOne({
               participants: {
                    $all: [senderId, recieverId],
               },
          });

          if (!conversation) {
               //?if not, create a new conversation
               conversation = await Conversation.create({
                    participants: [senderId, recieverId],
                    //! no need to add messages cuz by default its an empty array in model.js
               });
          }

          const newMessage = new Message({
               senderId,
               recieverId,
               message,
          });

          //*if newMessage just push to messages array
          if (newMessage) {
               conversation.messages.push(newMessage);
          }

          await Promise.all([conversation.save(), newMessage.save()]);

          //! Add socket io functionality here
          const recieverSocketId = getRecieverSocketId(recieverId);

          if (recieverSocketId) {
               io.to(recieverSocketId).emit("newMessage", newMessage);
          }

          return res.status(201).json(newMessage);
     } catch (error) {
          console.log("Error in send message controller: ", error.message);
          return res.status(500).json({ error: "Internal Server Error" });
     }
};

export const getMessages = async (req, res) => {
     try {
          const { id: userToChatId } = req.params;
          const senderId = req.user._id;

          const conversation = await Conversation.findOne({
               participants: {
                    $all: [senderId, userToChatId],
               },
          }).populate("messages"); //!doesnt give messages array but actual messages

          if (!conversation) {
               return res.status(200).json([]);
          }

          const messages = conversation.messages;

          return res.status(200).json(messages);
     } catch (error) {
          console.log("error in get messages controller: ", error.message);
          return res.status(500).json({ error: "Internal Server Error" });
     }
};
