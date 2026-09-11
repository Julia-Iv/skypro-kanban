import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import PopNewCard from "./components/PopNewCard";
import PopExit from "./components/PopExit";
//import PopBrowse from "./components/PopBrowse";
import TaskPage from "./pages/TaskPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { cardsData } from "./data.js";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [selectedCard, setSelectCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper" style={appStyles}>
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
                <Main cards={cards} />
                <Outlet />
              </>
            }
          >
            <Route
              path="exit"
              element={<PopExit onConfirm={() => console.log("Выход")} />}
            />
            <Route path="add-task" element={<PopNewCard />} />

            <Route path="task/:id" element={<TaskPage cards={cards} />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
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
//работа с API