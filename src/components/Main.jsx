import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledMain, MainBlock, MainContent } from "./Main.styled";

import Column from "./column";

const Main = ({ cards, onCardClick }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <MainContent>
            {/* Рендерим колонки и передаем в них соответствующие массивы Card */}
            {statusList.map((status) => {
              const filteredTasks =
                cards?.filter(
                  (card) => (card.status || card["Статус"]) === status
                ) || [];

              return (
                <Column
                  key={status} //  Добавлен уникальный ключ для самой колонки
                  title={status}
                  tasks={filteredTasks}
                />
              );
            })}
          </MainContent>
        </MainBlock>
      </div>
      <Outlet />
    </StyledMain>
  );
};

export default Main;
