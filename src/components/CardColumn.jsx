import Card from "./Card";
const CardColumn = () => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <Card />
    </div>
  );
};

export default CardColumn;
