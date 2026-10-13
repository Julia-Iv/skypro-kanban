const FormNewCreate = ({ isLoading }) => {

   return (
    <button 
      className="form-new__create _hover01" 
      id="btnCreate"
      type="submit"          // Явно указываем тип submit для отправки формы
      disabled={isLoading}  // Блокируем кнопку во время загрузки
      style={{
        opacity: isLoading ? 0.6 : 1,       // Визуально приглушаем кнопку при загрузке
        cursor: isLoading ? "not-allowed" : "pointer" // Меняем курсор
      }}
    >
      {isLoading ? "Создание..." : "Создать задачу"}
    </button>
  );
};
export default FormNewCreate;