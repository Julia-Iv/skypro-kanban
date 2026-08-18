import Column from "./column"



    const Main = () => {
  // Общий массив задач для доски
  const tasksNoStatus = [
    { id: 1, themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи 1', date: '30.10.23' },
    { id: 2, themeClass: '_purple', themeText: 'Copywriting', title: 'Название задачи 2', date: '30.10.23' }
  ];

  const tasksInWork = [
    { id: 3, themeClass: '_green', themeText: 'Research', title: 'Название задачи в работе', date: '31.10.23' }
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            
            {/* Рендерим колонки и передаем в них соответствующие массивы Card */}
            <Column title="Без статуса" tasks={tasksNoStatus} />
            <Column title="Нужно сделать" tasks={tasksNoStatus} />
            <Column title="В работе" tasks={tasksInWork} />
            <Column title="Тестирование" tasks={tasksNoStatus} />
            <Column title="Готово" tasks={tasksNoStatus} />



          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
