import { Routes, Route, useParams, Outlet } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import { Profile } from "./pages/Profile";
import { Language } from "./pages/categories/language/Language";
import Alphabet from "./pages/categories/language/alphabet/Alphabet";
import Study from "./pages/categories/language/study/Study";
import Beginner from "./pages/categories/language/study/levels/beginner/Beginner";
import "./App.scss";
import { Header } from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
    
		<Outlet/>
    </div>
  );
}

export default App;
