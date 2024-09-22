import styled from "styled-components";
import Link from "@mui/joy/Link";

export const Main = styled.main`
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
  padding: 0;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const LeftContent = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: auto;
  max-width: 65%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0 3rem;
  gap: 2rem;
  overflow: hidden !important;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 3rem !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 3rem !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
    padding: 0 2rem 0 1rem !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
    padding: 0 3rem 0 2rem !important;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 65% !important;
    min-width: 65% !important;
    max-width: 65% !important;
  }

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 65% !important;
    min-width: 65% !important;
    max-width: 65% !important;
  }
`;

export const Headline = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  gap: 0.5rem;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
`;

export const Box = styled.code`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 3rem;
  min-width: 3rem;
  max-width: 3rem;
  height: 3rem;
  min-height: 3rem;
  max-height: 3rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  border-radius: var(--border-radius-md);
  background-color: var(--background-color-solid-100);
`;

export const TextHeadline = styled.h2`
  text-align: center;
  font-size: 1.65rem;
  font-weight: 700;
`;

export const TextSubHeadline = styled.h6`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const FormSignIn = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
`;

export const PasswordParameter = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;
`;

export const NavigationStepper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
`;

export const RightContent = styled.section`
  posisition: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: auto;
  max-width: 35%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 3rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--background-color-solid-50);
  border: 0.1rem solid var(--diver-color-solid-0);

  @media (max-width: 576px) {
    display: none !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    display: none !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 35% !important;
    min-width: 35% !important;
    max-width: 35% !important;
  }

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 35% !important;
    min-width: 35% !important;
    max-width: 35% !important;
  }
`;

export const Navigation = styled.div`
  posisition: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  margin-top: auto;
  padding: 0;
  gap: 0.5rem;
`;

export const TextGoback = styled(Link)`
  color: var(--text-color-solid-0) !important;
  font-weight: 500 !important;
  font-size: 0.85rem !important;
  gap: 0.25rem;

  &:hover {
    color: var(--text-color-solid-500) !important;
    text-decoration: none !important;
  }
`;
