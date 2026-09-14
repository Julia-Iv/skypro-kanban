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
import { api } from "./api";
import { Navigate } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Добавляем стейт для пользователя. При старте пытаемся взять его из localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Получаем токен из объекта пользователя, если он есть
  const token = user?.token || null;

  useEffect(() => {
    // Если пользователь не залогинен, загрузку карточек делать не нужно
    if (!token) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    api
      .getTasks(token)
      .then((data) => {
        setCards(data.tasks);
        setError(null);
      })
      .catch((err) => {
        console.error("Не удалось загрузить задачи:", err);
        setError("Ошибка загрузки данных. Пожалуйста, попробуйте позже.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCards([]);
  };

 
  return (
    <div className="wrapper" style={appStyles}>
      {isLoading ? (
        <div style={loaderStyles}>
          <h2>Данные загружаются...</h2>
        </div>
      ) : error ? ( // Обработка сценария ошибки на сервере
        <div style={loaderStyles}>
          <h2 style={{ color: "#ef5656" }}>{error}</h2>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              user ? (
              <>
                <Header user={user} />
                <Main cards={cards} />
                <Outlet />
              </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route
              path="exit"
              element={<PopExit onConfirm={handleLogout} />}
            />
            <Route
              path="add-task"
              element={<PopNewCard setCards={setCards} token={token} />}
            />

            <Route
              path="task/:id"
              element={<TaskPage cards={cards} setCards={setCards} token={token}/>}
            />
          </Route>
          <Route path="/login" element={<LoginPage setUser={setUser} user={user} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} user={user} />} />
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


export default App;
