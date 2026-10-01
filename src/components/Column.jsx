import React from "react";
import Card from "./Card";
import { MainColumn } from "./Main.styled";


const Column = ({ title, tasks }) => {
  console.log(`Колонка: ${title}, Задачи:`, tasks);

  return (
    <MainColumn>
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {tasks?.map((task, index) => {
          const taskId = task._id || task.id;
          const taskKey = taskId || `fallback-key-${index}`;
          return (
            <Card
              key={taskKey}
              card={task}
            />
          );
        })}
      </div>
    </MainColumn>
  );
};

export default Column;
