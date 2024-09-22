import styled from "styled-components";

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
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
  padding: 5rem;
  gap: 1.5rem;
  overflow: auto !important;
  background-color: var(--background-color-solid-100);

  @media (max-width: 576px) {
    padding: 2.5rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 5rem;
  }
`;

export const Headline = styled.h2`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin: 0;
  padding: 0;
  font-size: 1.35rem;
  font-weight: 700;
  gap: 1rem;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
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

export const SubHeadline = styled.h5`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  gap: 0.5rem;
`;

export const PointTermAndCondition = styled.ol`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin: 0;
  margin-left: 2rem;
  padding: 0;
  gap: 0.25rem;
`;

export const PointItemTermAndCondition = styled.li`
  &::marker {
    content: "→ ";
    font-weight: bold;
    color: var(--text-color-solid-0);
  }
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
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin: 0;
  padding: 0;
  font-size: 1.35rem;
  font-weight: 700;
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
