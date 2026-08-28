import React from "react";
import {
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopExit.styled";

const PopExit = ({ onClose }) => {
  return (
    <PopExitContainer id="popExit">
        <PopExitBlock>
          <PopExitTitle>
            Выйти из аккаунта?
          </PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitYes>
              <PopExitNo id="exitNo" onClick ={onClose}>
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
    </PopExitContainer>
  );
};
export default PopExit;
