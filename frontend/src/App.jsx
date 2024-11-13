import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import audio from "./assets/clairedelune.mp3";

function App() {
     const { authUser } = useAuthContext();
     const audioRef = useRef(null);
     const [audioInitialized, setAudioInitialized] = useState(false);

     useEffect(() => {
          const isPlaying = localStorage.getItem("audioPlaying") === "true";
          if (audioInitialized && audioRef.current) {
               if (isPlaying) {
                    audioRef.current.currentTime =
                         localStorage.getItem("audioCurrentTime") || 0;
                    audioRef.current.play();
               }
          }
     }, [audioInitialized]);

     const handlePlayPause = () => {
          if (audioRef.current) {
               if (audioRef.current.paused) {
                    audioRef.current.play();
                    localStorage.setItem("audioPlaying", "true");
               } else {
                    audioRef.current.pause();
                    localStorage.setItem("audioPlaying", "false");
               }
               localStorage.setItem(
                    "audioCurrentTime",
                    audioRef.current.currentTime
               );
          }
     };

     const initializeAudio = () => {
          if (audioRef.current) {
               audioRef.current
                    .play()
                    .then(() => {
                         setAudioInitialized(true); // Mark audio as initialized
                         localStorage.setItem("audioPlaying", "true");
                    })
                    .catch((error) => {
                         console.log(
                              "Autoplay prevented, user interaction needed."
                         );
                    });
          }
     };

     return (
          <>
               <div className="flex justify-center items-center h-screen flex-col gap-3">
                    {!audioInitialized && (
                         <button
                              onClick={() => {
                                   initializeAudio();
                                   setTimeout(() => {
                                        document.querySelector(
                                             ".play-music-button"
                                        ).style.transition =
                                             "opacity 0.5s ease";
                                        document.querySelector(
                                             ".play-music-button"
                                        ).style.opacity = "0";
                                   }, 100);
                              }}
                              className="play-music-button bg-transparent bg-clip-padding gap-2 backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-2xl flex text-white h-16 justify-center items-center rounded-full px-6 float
                              "
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="20"
                                   height="20"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M3 22V2l18 10-18 10z" />
                              </svg>
                              <span>Play Music</span>
                         </button>
                    )}
                    <audio
                         ref={audioRef}
                         src={audio}
                         loop
                         onClick={handlePlayPause}
                    ></audio>
                    <Routes>
                         <Route
                              path="/"
                              element={
                                   authUser ? (
                                        <Home />
                                   ) : (
                                        <Navigate to="/login" />
                                   )
                              }
                         />
                         <Route
                              path="/login"
                              element={
                                   authUser ? <Navigate to="/" /> : <Login />
                              }
                         />
                         <Route
                              path="/signup"
                              element={
                                   authUser ? <Navigate to="/" /> : <SignUp />
                              }
                         />
                    </Routes>
                    <Toaster />
               </div>
          </>
     );
}

export default App;
