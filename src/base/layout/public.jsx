import { useState, useEffect } from "react";
import { Main, Pages } from "../style/publicStyle.js";
import { Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../../lib/loadingspinner.jsx";

const Public = () => {
  const [loading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setFadeOut(false);
    };

    const handleComplete = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      setTimeout(() => {
        setIsPageVisible(true);
      }, 1050);
    };

    handleStart();

    const timer = setTimeout(handleComplete, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <LoadingSpinner fadeOut={fadeOut} />
      ) : (
        <Main>
          <Pages className={isPageVisible ? "active" : ""}>
            <Outlet />
          </Pages>
        </Main>
      )}
    </>
  );
};

export default Public;
