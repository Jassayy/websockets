import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
     try {
          const { fullName, username, password, email, gender } = req.body;

          if (!fullName || !username || !password || !email) {
               return res
                    .status(400)
                    .json({ error: "All fields are required" });
          }

          const existedUser = await User.findOne({
               $or: [{ username }, { email }],
          });

          if (existedUser) {
               return res.status(400).json({
                    error: "Username or email already exists. Try logging in.",
               });
          }

          //Hashing the password
          const hashedPassword = await bcrypt.hash(password, 10);

          const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
          const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

          const newUser = await User.create({
               fullName,
               username,
               password: hashedPassword,
               email,
               gender,
               profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
          });

          const user = await User.findOne({ _id: newUser._id }).select(
               "-password"
          );

          if (!user) {
               return res.status(400).json({
                    error: "Invalid User Data",
               });
          }
          //generate token using jwt

          await generateTokenAndSetCookie(user?._id, res);

          return res.status(201).json({
               user,
               message: "User registered successfully",
          });
     } catch (error) {
          console.log("Error in SignUp :: ", error.message);
          res.status(500).json({ error: "Internal server error" });
     }
};

export const login = async (req, res) => {
     try {
          const { username, password } = req.body;

          if (!username || !password) {
               return res
                    .status(400)
                    .json({ error: "All fields are required" });
          }

          // Fetch the user from the database
          const user = await User.findOne({ username });

          // Check if user exists
          if (!user) {
               return res
                    .status(404)
                    .json({ error: "User not found. Try Signing up" });
          }

          // Compare password with the hashed password stored in the database
          const isPasswordCorrect = await bcrypt.compare(
               password,
               user.password || " " //! || " " is important or else error occurs
          );

          if (!isPasswordCorrect) {
               return res.status(401).json({ error: "Invalid password" });
          }

          await generateTokenAndSetCookie(user?._id, res);

          return res
               .status(200)
               .json({ user, message: "User logged in successfully" });
     } catch (error) {
          console.log("Error in login :: ", error.message);
          return res.status(500).json({ error: "Internal server error" });
     }
};

export const logout = (req, res) => {
     try {
          res.clearCookie("jwt", "", { maxAge: 0 });
          return res
               .status(200)
               .json({ message: "User logged out successfully" });
     } catch (error) {
          console.log("Error in logout :: ", error.message);
          return res.status(500).json({ message: "Internal server error" });
     }
};
