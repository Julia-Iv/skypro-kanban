import React from "react";
import { useParams } from "react-router-dom";

const TaskPage = () => {
  const { id } = useParams();
  return;
  <div>
    <h1>Задача #{id} (Просмотр и редактрование)</h1>
  </div>;
};
export default TaskPage;
