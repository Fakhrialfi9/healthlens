/* eslint-disable react/prop-types */
import { SpinnerWrapper, Spinner } from "../assets/style/lib/loadingspinner.js";

const LoadingSpinner = ({ fadeOut, ...rest }) => {
  return (
    <SpinnerWrapper {...rest} style={{ transform: fadeOut ? "translateY(-100%)" : "translateY(0)" }}>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
