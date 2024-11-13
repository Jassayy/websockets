import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
     const [loading, setLoading] = useState(false);
     const { setAuthUser } = useAuthContext();

     const signup = async ({ fullName, username, password, email, gender }) => {
          const success = handleInputErrors(
               fullName,
               username,
               password,
               email,
               gender
          );

          if (!success) return;
          setLoading(true);
          try {
               const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                         fullName,
                         username,
                         password,
                         email,
                         gender,
                    }),
               });

               const data = await res.json();
               console.log(data);

               if (data.error) {
                    throw new Error(data.error);
               }

               //!STORE USER IN LOCAL STORAGE
               localStorage.setItem("authUser", JSON.stringify(data));
               //!update the context
               setAuthUser(data);
               toast.success("Signup successful!");
          } catch (error) {
               toast.error(error.message);
          } finally {
               setLoading(false);
          }
     };
     return { signup, loading };
};

export default useSignup;

function handleInputErrors(fullName, username, password, email, gender) {
     if (!fullName || !username || !password || !email || !gender) {
          toast.error("Please fill all the fields");
          return false;
     }

     if (password.length < 6) {
          toast.error("Password must be at least 6 characters");
          return false; // Added return false to prevent signup if password is less than 6 characters
     }

     return true;
}
