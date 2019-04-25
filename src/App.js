import React from "react";
import Header from "./components/Header/Header";
import modules from "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <main className={modules.main} />
    </div>
  );
}

export default App;
