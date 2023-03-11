import { useState } from "react";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import "./App.scss";

function App() {
  return (
    <div className="App">
		<Header />
      <Main />
    </div>
  );
}

export default App;
