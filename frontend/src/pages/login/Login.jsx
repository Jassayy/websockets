import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const { loading, login } = useLogin();
     const handleSubmit = async (e) => {
          e.preventDefault();
          // console.log({ username, password });
          await login({ username, password });
     };

     return (
          <div className="flex flex-col items-center justify-center min-w-[90%] mx-auto md:min-w-[500px]">
               <div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-2xl p-4">
                    <h1 className="text-3xl font-semibold text-center text-slate-200 md:text-4xl">
                         Login
                         <span className="text-teal-400 ">Websockets</span>
                    </h1>

                    <form onSubmit={handleSubmit}>
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
                         <div className="mt-4 mb-4">
                              <Link
                                   to="/signup"
                                   className="text-sm hover:underline hover:text-blue-400"
                              >
                                   Don't have an account? Sign Up here
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
                                        "Login"
                                   )}
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Login;
