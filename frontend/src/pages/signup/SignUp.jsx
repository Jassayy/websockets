import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
     const [fullName, setFullName] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [gender, setGender] = useState("");

     const { signup, loading } = useSignup();

     const handleCheckBoxChange = (gender) => {
          setGender(gender);
     };
     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log({ fullName, username, password, email, gender });
          await signup({ fullName, username, password, email, gender });
     };
     return (
          <div className="flex flex-col items-center justify-center min-w-[90%] mx-auto md:min-w-[500px]">
               <div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-2xl p-4">
                    <h1 className="text-3xl font-semibold text-center text-slate-200 md:text-4xl">
                         SignUp
                         <span className="text-teal-400 ">Websockets</span>
                    </h1>

                    <form onSubmit={handleSubmit}>
                         <div>
                              <label className="label p-2">
                                   <span className="text-base label-text">
                                        Full Name
                                   </span>
                              </label>
                              <input
                                   type="text"
                                   placeholder="Enter full name"
                                   className="w-full input input-bordered h-10 "
                                   value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}
                              />
                         </div>
                         <div>
                              <label className="label p-2">
                                   <span className="text-base label-text">
                                        Username
                                   </span>
                              </label>
                              <input
                                   type="text"
                                   placeholder="Enter username"
                                   className="w-full input input-bordered h-10 "
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                              />
                         </div>
                         <div>
                              <label className="label p-2">
                                   <span className="text-base label-text">
                                        Password
                                   </span>
                              </label>
                              <input
                                   type="password"
                                   placeholder="Enter password"
                                   className="w-full input input-bordered h-10 "
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                              />
                         </div>
                         <div>
                              <label className="label p-2">
                                   <span className="text-base label-text">
                                        Email
                                   </span>
                              </label>
                              <input
                                   type="email"
                                   placeholder="Enter email"
                                   className="w-full input input-bordered h-10 "
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />
                         </div>
                         <GenderCheckBox
                              onCheckBoxChange={handleCheckBoxChange}
                              selectedGender={gender}
                         />
                         <div className="mt-4 mb-4">
                              <Link
                                   to="/login"
                                   className="text-sm hover:underline hover:text-blue-400"
                              >
                                   ALready have an account? Login here
                              </Link>
                         </div>
                         <div>
                              <button
                                   className="btn btn-accent btn-outline w-full text-center"
                                   disabled={loading}
                              >
                                   {loading ? (
                                        <span className="loading loading-spinner text-warning"></span>
                                   ) : (
                                        "Sign Up"
                                   )}
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default SignUp;
