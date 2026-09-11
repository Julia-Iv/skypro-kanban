import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AddTaskPage from "./pages/AddTaskPage";
import TaskPage from "./pages/TaskPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPages from "./pages/NotFoundPage";

const AppRoutes = ({ isAuth, onLogin, onLogout }) => {
  return (
    <Routes>
      {/*Публичные маршруты */}
      <Route path="/Login" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/register" element={<RegisterPage />} />

      {/*Защищенные маршруты */}
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage onLogout={onLogout} />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route
          path="/exit"
          element={
            <div>
              <h1>Модальное окно выхода</h1>
            </div>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
};
 export default AppRoutes;