import styled from "styled-components";

export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100dvh;
  min-height: 100dvh;
  max-height: 100dvh;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const Pages = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 1rem;
  opacity: 0;
  transition: opacity 2s ease-out;

  &.active {
    opacity: 1;
  }
`;
