import React from "react";
import Calendar from "../components/Calendar";

const MainPage = ({ onLogout }) => (
  <div>
    <h1>Главная страница</h1>
    <button onClick={onLogout}>Выйти</button>
    <Calendar />
  </div>
);

export default MainPage;
