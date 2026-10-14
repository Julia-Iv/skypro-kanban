import styled from "styled-components";
export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap !important;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 15px;
`;

export const HeaderLogo = styled.div`
  flex-shrink: 0;
  img {
    width: 85px;
    display: block;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: nowrap !important;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  position: relative;
`;

export const CreateTaskLink = styled.a`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #33399b;
  }
/*
  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }*/
`;
export const HeaderUser = styled.button`
flex-shrink: 0;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;

  &::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid currentColor;
    border-bottom: 1.9px solid currentColor;
    transform: rotate(-45deg);
    margin-left: 6px;
    flex-shrink: 0;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }
&[data-open="true"]::after {
    transform: rotate(135deg);
  }

  &:hover {
    color: #33399b;
  }
`;

export const PopUserExitBtn = styled.button`
  display: block;
  margin: 20px auto 0 auto;    /* Центрирует кнопку и делает отступ сверху от почты */
  width: 72px;
  height: 30px;
  background: transparent;    /* Прозрачный фон */
  color: #565EEF;             /* Фиолетовый цвет текста */
  border: 1px solid #565EEF;   /* Фиолетовая рамка */
  border-radius: 4px;         /* Скругление углов */
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;          /* Центрирует текст по вертикали */
  text-align: center;
  text-decoration: none;      /* Убирает стандартное подчеркивание ссылки */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #565EEF; /* При наведении закрашивается фиолетовым */
    color: #FFFFFF;            /* Текст становится белым */
  }
`;
export const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 42px;
  right: 0;
  width: 213px;
  height: auto;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 30px 0px rgba(26, 54, 98, 0.05);
  padding: 34px;
  text-align: center;
  z-index: 5;

  .pop-user-set__name {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }
  .pop-user-set__mail {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 0;
  }
`;