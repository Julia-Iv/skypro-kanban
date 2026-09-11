import { useState } from "react";
import { Link } from "react-router-dom";
import PopExit from "./PopExit";
import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  CreateTaskLink,
  HeaderUser,
} from "./Header.styled";

const Header = () => {
  //управление видимостью меню и модалки
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // const [isPopExitOpen, setIsPopExitOpen] = useState(false);
  //переключение состояния открыть-закрыть
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleLogout = () => {
    console.log("Выход из аккаунта");
    setIsPopExitOpen(false);
  };

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/">
              <img src="./public/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderNav>
            <CreateTaskLink as={Link} to="/add-task">
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

                <Link 
                  to="/exit" 
                  className="_hover03"
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                  onClick={() => setIsMenuOpen(false)} // Закрываем маленькое меню при клике
                >
                  Выйти
                </Link>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
      
    </StyledHeader>
  );
};
export default Header;
