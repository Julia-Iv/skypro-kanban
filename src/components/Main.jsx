import { useState } from "react";
import { Outlet } from "react-router-dom"
import {
  StyledMain,
  MainBlock,
  MainContent,
} from "./Main.styled";

import Column from "./column";

const Main = ({ cards, onCardClick }) => {
  const tasksNoStatus = cards.filter((card) => card.status === "Без статуса");
  const tasksNeedDo = cards.filter((card) => card.status === "Нужно сделать");
  const tasksInWork = cards.filter((card) => card.status === "В работе");
  const tasksTesting = cards.filter((card) => card.status === "Тестирование");
  const tasksDone = cards.filter((card) => card.status === "Готово");

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <MainContent>
            {/* Рендерим колонки и передаем в них соответствующие массивы Card */}
           
            <Column title="Без статуса" tasks={tasksNoStatus}  />
            <Column title="Нужно сделать" tasks={tasksNeedDo} />
            <Column title="В работе" tasks={tasksInWork} />
            <Column title="Тестирование" tasks={tasksTesting} />
            <Column title="Готово" tasks={tasksDone} />
          </MainContent>
        </MainBlock>
      </div>
      <Outlet />
    </StyledMain>
  );
};

export default Main;
