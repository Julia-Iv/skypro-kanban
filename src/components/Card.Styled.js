import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-y: auto;
    gap: 12px;
  }
`;
export const CardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  min-height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const themeStyles = {
  _orange: { bg: "#FFE4C2", color: "#FF6D00" },
  _green: { bg: "#B4FDD1", color: "#06B16E" },
  _purple: { bg: "#E9D4FF", color: "#9A48F1" },
  _gray: { bg: "#94A6BE", color: "#FFFFFF" },
};

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    themeStyles[props.$theme] ? themeStyles[props.$theme].bg : "#FFE4C4"};

  p {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) =>
      themeStyles[props.$theme] ? themeStyles[props.$theme].color : "#FF6D00"};
  }
`;

export const CardBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
    height: 13px;
    
  }
  p {
    margin-left: 6px;
    font-family: "Roboto", Arial, Helvetica, sans-serif; /* Подключаем Roboto */
    font-size: 10px; /* Размер шрифта по макету */
    font-weight: 400; /* Начертание (Regular). Если нужно жирнее, поставьте 500 или 600 */
    line-height: 13px; /* Высота строки для аккуратного выравнивания */
    color: #94A6BE; /* Фирменный серый цвет из вашего CSS */
    letter-spacing: 0.2px; /* Межзнаковый интервал */
  }
`;
