import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopExit.styled";

const PopExit = ({ onConfirm }) => {
  const navigate = useNavigate();
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/"); //вызываем функцию закрытия модалки
  };

  return (
    <PopExitContainer id="popExit" onClick={handleCancel}>
      <PopExitBlock onClick={(e) => e.stopPropagation()}>
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
