import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin();
    navigate("/");
  };

  return (
    <div>
      <h1>Вход</h1>
      <button onCick={handleLogin}>Войти</button>
    </div>
  );
};
export default LoginPage;
