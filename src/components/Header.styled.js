import styled from "styled-components";
export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
box-sizing: border-box;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
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
  &:hover {
    color: #33399b;
  }
`;
