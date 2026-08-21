import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import PopExit from "./components/PopExit";
import PopNewCard from "./components/PopNewCard";
import PopBrowse from "./components/PopBrowse";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout (() => {
      setCards(CardsData);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer); //очищаем таймер
  })

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

