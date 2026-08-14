import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import PopExit from "./components/PopExit";
import PopNewCard from "./components/PopNewCard";
import PopBrowse from "./components/PopBrowse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        
        <Header />
        <Main />
        
      </div>
      
    </>
  );
}

export default App;

