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
  PopUserSet,
  PopUserExitBtn
} from "./Header.styled";

const Header = ({ user }) => {
  //управление видимостью меню и модалки
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // const [isPopExitOpen, setIsPopExitOpen] = useState(false);
  //переключение состояния открыть-закрыть
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
              {user?.name || "Пользователь"}
            </HeaderUser>

            {isMenuOpen && (
  <PopUserSet id="use-set-react">
    <p className="pop-user-set__name">{user?.name || "Пользователь"}</p>
    <p className="pop-user-set__mail">{user?.login || ""}</p>
    
    <PopUserExitBtn 
      as={Link} 
      to="/exit" 
      onClick={() => setIsMenuOpen(false)}
    >
      Выйти
    </PopUserExitBtn>
  </PopUserSet>
)}
          </HeaderNav>
        </HeaderBlock>
      </div>
      
    </StyledHeader>
  );
};
export default Header;
