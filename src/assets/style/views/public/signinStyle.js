import styled from "styled-components";
import Button from "@mui/joy/Button";
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
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 35%;
  max-width: 35%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0 3rem 0 2rem;
  gap: 1.5rem;

  @media (max-width: 576px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 1rem !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 1rem !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0 1rem !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
    padding: 0 2rem 0 1rem !important;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
    padding: 0 2rem 0 1rem !important;
  }

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }
`;

export const Navbar = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const Logo = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const TextGoback = styled(Link)`
  color: var(--primary-color) !important;
  font-weight: 500 !important;
  font-size: 0.85rem !important;
  gap: 0.25rem;

  &:hover {
    color: var(--text-color-solid-0) !important;
    text-decoration: none !important;
  }
`;

export const Headline = styled.div`
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
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1.25rem;
`;

export const TextHeadline = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
`;

export const TextSubHeadline = styled.h5`
  font-size: 0.95rem;
  font-weight: 300;
`;

export const SignInMethod = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: auto;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
`;

export const ButtonSignInWithGoogle = styled(Button)`
  width: 100% !important;
  min-width: auto !important;
  max-width: 100% !important;
  white-space: nowrap;
`;

export const ButtonSignInWithFacebook = styled(Button)`
  width: 100% !important;
  min-width: auto !important;
  max-width: 100% !important;
  white-space: nowrap;
`;

export const FormSignIn = styled.form`
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
  gap: 1.25rem;
`;

export const RememberMeForgotPassword = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const LinkForgotPassword = styled(Link)`
  font-size: 0.85rem !important;
  font-weight: 400 !important;
  padding: 0 !important;
`;

export const SignUp = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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
`;

export const TextCreateAccount = styled.h6`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: auto;
  min-width: auto;
  max-width: auto;
  height: auto;
  min-height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.25rem;
  font-size: 0.85rem !important;
  font-weight: 300;
`;

export const LinkCreateAccount = styled(Link)`
  font-size: 0.85rem !important;
`;

export const RightContent = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 65%;
  max-width: 65%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 576px) {
    display: none !important;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    display: none !important;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: none !important;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }

  @media (min-width: 1401px) and (max-width: 1600px) {
    width: 50% !important;
    min-width: 50% !important;
    max-width: 50% !important;
  }
`;

export const CardBannerSignIn = styled.div`
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
`;

export const BannerSignIn = styled.img`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: bottom;
  border-radius: var(--border-radius-lg);
`;
