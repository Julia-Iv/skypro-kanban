import React from "react";
import Card from "./Card";
import { MainColumn } from "./Main.styled";

const topicStyles = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

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
              id={taskId}
              themeClass={topicStyles[task.topic] || "default"}
              themeText={task.topic}
              title={task.title}
              date={task.date}
            />
          );
        })}
      </div>
    </MainColumn>
  );
};

export default Column;
