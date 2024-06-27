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
      <div className=" mt-8 mx-3">
        <Menu></Menu>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
