import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
     return (
          <>
               <div className="h-screen p-4 flex justify-center items-center">
                    <Routes>
                         <Route exact path="/" element={<Home />} />
                         <Route exact path="/login" element={<Login />} />
                         <Route exact path="/signup" element={<SignUp />} />
                    </Routes>
               </div>
          </>
     );
}

export default App;
