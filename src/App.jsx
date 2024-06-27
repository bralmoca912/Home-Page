import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./shared/Menu";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border text-3xl">
        <Menu></Menu>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
