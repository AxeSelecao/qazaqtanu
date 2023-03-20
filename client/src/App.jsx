import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Main } from "./layouts/Main";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import "./App.scss";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
