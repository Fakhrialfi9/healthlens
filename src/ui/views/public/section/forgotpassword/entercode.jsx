/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Headline,
  Box,
  TextHeadline,
  TextSubHeadline,
  FormSignIn,
  NavigationStepper,
} from "../../../../../assets/style/views/public/forgotpasswordStyle.js";
import { Button } from "@mui/joy";
import { ChevronLeft } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../../../../../public/media/icon/message.json";
import FormOTPInput from "../../../../../lib/formOTPInput.jsx";
import AlertSnackBar from "../../../../../lib/alert.jsx";

const EnterCode = ({ NextStepForm, PreviousStepForm }) => {
  const [otp, setOtp] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "danger",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateOTP(otp)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid 5-digit OTP code.",
        color: "danger",
      });
    } else {
      const isOTPValid = checkOTP(otp);

      if (isOTPValid) {
        setSnackbar({
          open: true,
          message: "Congratulations, your code is correct!",
          color: "success",
        });

        setTimeout(() => {
          NextStepForm();
          setSnackbar((prev) => ({ ...prev, open: false }));
        }, 2500);
      } else {
        setSnackbar({
          open: true,
          message: "The code you entered is incorrect.",
          color: "danger",
        });
      }
    }
  };

  const validateOTP = (code) => {
    return code.length === 5 && /^[0-9]+$/.test(code);
  };

  const checkOTP = (code) => {
    return code === "12345";
  };

  return (
    <>
      <Headline>
        <Box>
          <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 65, height: 65 }} />
        </Box>
        <TextHeadline>Enter Code</TextHeadline>
        <TextSubHeadline>Please enter the 5-digit code sent to your email.</TextSubHeadline>
      </Headline>

      <FormSignIn onSubmit={handleSubmit}>
        <FormOTPInput value={otp} onChange={(value) => setOtp(value)} />

        <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
          Submit OTP Code
        </Button>
      </FormSignIn>

      <NavigationStepper>
        <Button startDecorator={<ChevronLeft size={15} />} variant='outlined' color='danger' onClick={PreviousStepForm}>
          Back
        </Button>
      </NavigationStepper>

      <AlertSnackBar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        color={snackbar.color}
        variant='solid'
        open={snackbar.open}
        message={snackbar.message}
        setOpen={(open) => setSnackbar((prev) => ({ ...prev, open }))}
      />
    </>
  );
};

export default EnterCode;
