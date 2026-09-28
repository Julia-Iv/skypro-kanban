import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useAuth } from "./AuthContext";
import { api } from "../api";

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const { token, isAuthenticated } = useAuth(); // Получаем токен напрямую из AuthContext
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setTasks([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    api
      .getTasks(token)
      .then((data) => {
        const serverTasks = data.tasks || data;
        const formattedTasks = serverTasks.map((task) => ({
          ...task,
          status: task.status || "Без статуса",
        }));
        setTasks(formattedTasks);
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

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      isLoading,
      error,
      setError,
    }),
    [tasks, isLoading, error],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks должен использоваться внутри TaskProvider");
  }
  return context;
};
