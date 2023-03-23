import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Main } from "./layouts/Main";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import { Profile } from "./pages/Profile";
import "./App.scss";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
