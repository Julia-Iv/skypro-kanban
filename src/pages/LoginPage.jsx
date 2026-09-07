import React from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() && password.trim()) {
      onLogin(); // Меняем стейт авторизации на true
      navigate("/"); // Перенаправляем на главную
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  return (
        <div style={overlayStyles}>
      <div style={modalStyles}>
        <h3>Выйти из аккаунта?</h3>
        <div style={btnGroupStyles}>
          <button onClick={handleConfirmExit} style={{ ...actionBtnStyles, backgroundColor: "#565eef", color: "#white" }}>
            Да, выйти
          </button>
          <button onClick={handleCancelExit} style={{ ...actionBtnStyles, backgroundColor: "transparent", border: "1px solid #565eef", color: "#565eef" }}>
            Нет, остаться
          </button>
          </div>
      </div>
    </div>
  );
};

const overlayStyles = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999 };
const modalStyles = { backgroundColor: "#fff", padding: "30px", borderRadius: "12px", textAlign: "center", width: "320px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" };
const btnGroupStyles = { display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" };
const actionBtnStyles = { padding: "10px 20px", borderRadius: "8px", border: "none", fontWeight: "600", cursor: "pointer", fontSize: "14px" };


export default LoginPage;
