import { useState } from "react";
import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  CreateTaskLink,
  HeaderUser,
} from "./Header.styled";

const Header = () => {
  //управление видимостью модалки
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //переключение состояния открыть-закрыть
  const toggleMenu = (e) => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="./public/logo.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <CreateTaskLink href="#popNewCard">
              Создать новую задачу
            </CreateTaskLink>

            <HeaderUser
              data-open={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              Ivan Ivanov
            </HeaderUser>

            {isMenuOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="use-set-react"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
};
export default Header;
