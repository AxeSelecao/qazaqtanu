import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Header } from "./Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};
