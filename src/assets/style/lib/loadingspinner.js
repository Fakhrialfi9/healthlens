import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-solid-200);
  z-index: 9999;
  gap: 1rem;
  transition: all 1s ease;
`;

export const Spinner = styled.div`
  border: 0.2rem solid var(--background-color-solid-400);
  border-top: 0.2rem solid var(--primary-color);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
