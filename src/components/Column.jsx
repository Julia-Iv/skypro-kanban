import Card from './Card';

const Column = ({ title, tasks }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      
      <div className="cards">
        {tasks.map((task) => (
          <Card
            key={task.id}
            themeClass={task.themeClass}
            themeText={task.themeText}
            title={task.title}
            date={task.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
