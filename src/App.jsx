import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import top from "./components/top.jsx";

function App() {

  return (
    <div className="container">
         <top/>
    </div>
  );
}

export default App;
