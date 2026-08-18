import Card from "./card";
const Cards = () => {

const cardItems = [
    {
      id: 1,
      themeClass: '_orange',
      themeText: 'Web Design',
      title: 'Название задачи',
      date: '30.10.23',
    },
    {
      id: 2,
      themeClass: '_purple',
      themeText: 'Copywriting',
      title: 'Название задачи',
      date: '30.10.23',
    },
    {
      id: 3,
      themeClass: '_orange',
      themeText: 'Web Design',
      title: 'Название задачи',
      date: '30.10.23',
    },
    {
      id: 4,
      themeClass: '_green',
      themeText: 'Research',
      title: 'Название задачи',
      date: '30.10.23',
    },
  ];

  return (
    <div className="cards">
      {cardItems.map((item) => (
        <Card
          key={item.id} 
          themeClass={item.themeClass}
          themeText={item.themeText}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Cards;


