import Card from './Card';
import { MainColumn } from './Main.styled';

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
            themeClass={task.themeClass}
            themeText={task.themeText}
            title={task.title}
            date={task.date}
          />
        ))}
      </div>
    </MainColumn>
  );
};

export default Column;
