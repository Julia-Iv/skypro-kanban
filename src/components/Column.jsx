import React from "react";
import Card from "./Card";
import { MainColumn } from "./Main.styled";

const topicStyles = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

const Column = ({ title, tasks }) => {
  return (
    <MainColumn>
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {tasks?.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            themeClass={topicStyles[task.topic] || "default"}
            themeText={task.topic}
            title={task.title}
            date={task.date}
          />
        ))}
      </div>
    </MainColumn>
  );
};

export default Column;
