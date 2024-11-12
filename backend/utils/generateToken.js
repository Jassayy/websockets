import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
     const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
          expiresIn: "15d",
     });

     res.cookie("jwt", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000,
          httpOnly: true, //prevent xss attacks
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production", //only set cookie over https in production
     });
};

export default generateTokenAndSetCookie;
