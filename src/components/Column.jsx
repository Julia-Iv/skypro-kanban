import React from "react";
import Card from "./Card";
import { MainColumn } from "./Main.styled";

const Column = ({ title, tasks }) => {
  console.log(`Колонка: ${title}, Задачи:`, tasks);

  // Проверяем: если задач нет (массив пустой или undefined)
  const hasNoTasks = !tasks || tasks.length === 0;

  return (
    <MainColumn>
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {hasNoTasks ? (
          // Отображаем заглушку, если список пуст
          <div 
            className="empty-state" 
            style={{ 
              textAlign: "center", 
              padding: "20px", 
              color: "#94a3b8", 
              fontSize: "14px",
              fontStyle: "italic" 
            }}
          >
            Новых задач нет
          </div>
        ) : (
        tasks.map((task, index) => {
          const taskId = task._id || task.id;
          const taskKey = taskId || `fallback-key-${index}`;
          return <Card key={taskKey} card={task} />;
        
        })
      )}
      
        </div>
    </MainColumn>
  );
};

export default Column;
