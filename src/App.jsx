import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import PopNewCard from "./components/PopNewCard";
import PopExit from "./components/PopExit";
import TaskPage from "./pages/TaskPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { TaskProvider, useTasks } from "./context/TaskContext.jsx";

function AppContent() {
  // Достаем состояние авторизации и метод выхода напрямую из AuthContext
  const { user, logout } = useAuth();

  // Достаем список задач, статус загрузки и ошибку напрямую из TaskContext
  const { tasks, isLoading, error } = useTasks();

  
  return (
    <div className="wrapper" style={appStyles}>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Header user={user} />
                {/* Если есть ошибка, выводим её сообщение, иначе рендерим доску */}
                {error ? (
                  <div style={loaderStyles}>
                    <h2 style={{ color: "#ef5656" }}>{error}</h2>
                  </div>
                ) : (
                  <Main cards={tasks} isLoading={isLoading} />
                )}
                <Outlet />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="exit" element={<PopExit onConfirm={logout} />} />
          <Route path="add-task" element={<PopNewCard />} />
          <Route path="task/:id" element={<TaskPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Маршрут для обработки несуществующих страниц */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

// Корневой компонент настраивает иерархию контекстов
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </AuthProvider>
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
  height: "70vh",
  fontFamily: "sans-serif",
  color: "#565eef",
};

export default App;
