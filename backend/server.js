import express from "express";
import dotenv from "dotenv";

import messageRoutes from "./routes/message.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToDB from "./db/database.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(express.json()); //parse incoming request with json
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 5000, () => {
     connectToDB();
     console.log(`Server is running on port ${process.env.PORT}`);
});
