import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import PopNewCard from "./components/PopNewCard";
import PopBrowse from "./components/PopBrowse";
import AddTaskPage from "./pages/AddTaskPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import { cardsData } from "./data.js";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper" style={appStyles}>
      {selectedCard && (
        <PopBrowse card={selectedCard} onClose={() => setSelectCard(null)} />
      )}
      {isLoading ? (
        <div style={loaderStyles}>
          <h2>Данные загружаются...</h2>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main
                  cards={cards}
                  onCardClick={(task) => {
                    console.log(
                      "3. App.jsx получил задачу и записывает в стейт:",
                      task,
                    );

                    setSelectCard(task);
                  }}
                />
              </>
            }
          />
          <Route
            path="/add-task"
            element={
              <>
                <Header />
                <Main
                  cards={cards}
                  onCardClick={(task) => setSelectCard(task)}
                />
                <PopNewCard />
              </>
            }
          />

          <Route
            path="/task/:id"
            element={
              <>
                <Header />
                <TaskPage />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

const appStyles = {
  minHeight: "100vh",
  backgroundColor: "#eaeef6",
};

const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "sans-serif",
  color: "#565eef",
};

const contentStyles = {
  padding: "20px",
};

export default App;
