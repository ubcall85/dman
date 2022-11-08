import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import Top from "./components/Top.jsx";

function App() {

  return (
    <div className="container">
         <Top/>
    </div>
  );
}

export default App;
