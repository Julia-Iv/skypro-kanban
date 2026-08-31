import { useState } from "react";
import {
  StyledMain,
  MainBlock,
  MainContent,
} from "./Main.styled";

import Column from "./column";

const Main = ( { onCardClick }) => {
  // Общий массив задач для доски
  const tasksNoStatus = [
    {
      id: 1,
      themeClass: "_orange",
      themeText: "Web Design",
      title: "Название задачи 1",
      date: "30.10.23",
    },
    {
      id: 2,
      themeClass: "_purple",
      themeText: "Copywriting",
      title: "Название задачи 2",
      date: "30.10.23",
    },
  ];

  const tasksInWork = [
    {
      id: 3,
      themeClass: "_green",
      themeText: "Research",
      title: "Название задачи в работе",
      date: "31.10.23",
    },
  ];

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <MainContent>
            {/* Рендерим колонки и передаем в них соответствующие массивы Card */}
           
            <Column title="Без статуса" tasks={tasksNoStatus} onCardClick={onCardClick} />
            <Column title="Нужно сделать" tasks={tasksNoStatus} onCardClick={onCardClick}/>
            <Column title="В работе" tasks={tasksInWork} onCardClick={onCardClick}/>
            <Column title="Тестирование" tasks={tasksNoStatus} onCardClick={onCardClick}/>
            <Column title="Готово" tasks={tasksNoStatus} onCardClick={onCardClick}/>
          </MainContent>
        </MainBlock>
      </div>
    </StyledMain>
  );
};

export default Main;
