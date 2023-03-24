import { Routes, Route, useParams } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import { Profile } from "./pages/Profile";
import { Language } from "./pages/categories/language/Language";
import Alphabet from "./pages/categories/language/alphabet/Alphabet";
import Study from "./pages/categories/language/oqu/Study";
import "./App.scss";
import { Header } from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authorization" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/language" element={<Language />} />
        <Route path="/language/alphabet" element={<Alphabet />} />
        <Route path="/language/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
