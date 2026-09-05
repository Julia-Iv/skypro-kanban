import React from "react";
import {
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopExit.styled";

const PopExit = ({ onClose, onConfirm }) => {
  const handleCansel = (e) => {
    e.preventDefault();
    onClose(); //вызываем функцию закрытия модалки
  };

  return (
    <PopExitContainer id="popExit">
      <PopExitBlock>
        <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
        <form className="pop-exit__form" id="formExit" action="#">
          <PopExitFormGroup>
            <PopExitYes id="exitYes" onClick={onConfirm} type="button">
              Да, выйти
            </PopExitYes>
            <PopExitNo id="exitNo" onClick={handleCansel} type="button">
              Нет, остаться
            </PopExitNo>
          </PopExitFormGroup>
        </form>
      </PopExitBlock>
    </PopExitContainer>
  );
};
export default PopExit;
