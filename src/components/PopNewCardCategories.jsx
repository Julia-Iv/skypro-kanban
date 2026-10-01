const PopNewCardCategories = ({ taskData, setTaskData }) => {
  const handleCategorySelect = (categoryName) => {
    setTaskData((prevData) => ({
      ...prevData,
      category: categoryName, // записываем выбранную категорию в стейт
    }));
  };

  return (
    <div className="pop-new-card__categories categories">
      <p className="categories__p subttl">Категория</p>
      <div className="categories__themes">
        {/* Категория Web Design */}
        <div
          onClick={() => handleCategorySelect("Web Design")}
          className={`categories__theme _orange ${taskData.category === "Web Design" ? "_active-category" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <p className="_orange">Web Design</p>
        </div>

        {/* Категория Research */}
        <div
          onClick={() => handleCategorySelect("Research")}
          className={`categories__theme _green ${taskData.category === "Research" ? "_active-category" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <p className="_green">Research</p>
        </div>

        {/* Категория Copywriting */}
        <div
          onClick={() => handleCategorySelect("Copywriting")}
          className={`categories__theme _purple ${taskData.category === "Copywriting" ? "_active-category" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <p className="_purple">Copywriting</p>
        </div>
      </div>
    </div>
  );
};

export default PopNewCardCategories;
