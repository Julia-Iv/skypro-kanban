import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  

  @media screen and (max-width: 1200px) {
    display: block;
      }
`;
export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

// Контейнер, который аккуратно выровняет анимацию по центру блока
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px; /* Чтобы область не сжималась в полоску во время загрузки */
`;

// Красивое синее кольцо, которое будет крутиться
export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 123, 255, 0.1); /* Полупрозрачная основа */
  border-radius: 50%;
  border-top-color: #565eef; /* Яркий цвет активной части (под цвет кнопок Канбана) */
  animation: ${spin} 1s linear infinite;
`;
