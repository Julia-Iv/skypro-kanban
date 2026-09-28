import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // При старте инициализируем пользователя из localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Функция входа
  const login = useCallback((userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }, []);

  // Функция выхода
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null); // Удаляем данные пользователя
  }, []);

  // Мемоизируем значение, чтобы избежать лишних перерендеров
  const value = useMemo(
    () => ({
      user,
      token: user?.token || null,
      isAuthenticated: !!user,
      login,
      logout,
      setUser
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
// Кастомный хук для удобного использования в компонентах
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};

export default AuthContext;
