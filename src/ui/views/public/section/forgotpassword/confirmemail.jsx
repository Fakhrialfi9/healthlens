/* eslint-disable react/prop-types */
import { useState } from "react";
import { Headline, Box, TextHeadline, TextSubHeadline, FormSignIn } from "../../../../../assets/style/views/public/forgotpasswordStyle.js";
import { AtSign } from "lucide-react";
import { Input, Button } from "@mui/joy";
import Lottie from "lottie-react";
import animationData from "../../../../../../public/media/icon/mail.json";
import AlertSnackBar from "../../../../../lib/alert.jsx";

const ConfirmEmail = ({ NextStepForm }) => {
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "danger",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      const emailExists = checkEmailExists(email);

      if (emailExists) {
        setSnackbar({
          open: true,
          message: "We have sent a code to your email!",
          color: "success",
        });

        setTimeout(() => {
          NextStepForm();
          setSnackbar((prev) => ({ ...prev, open: false }));
        }, 2500);
      } else {
        setSnackbar({
          open: true,
          message: "Email not found!",
          color: "danger",
        });
      }
    } else {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address.",
        color: "danger",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmailExists = (email) => {
    return email === "fakhrialfi9@gmail.com";
  };

  return (
    <>
      <Headline>
        <Box>
          <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 65, height: 65 }} />
        </Box>
        <TextHeadline>Confirmation Email</TextHeadline>
        <TextSubHeadline>Please enter your email address below to receive a confirmation code.</TextSubHeadline>
      </Headline>

      <FormSignIn onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          placeholder='Enter Your Email'
          autoComplete='off'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "100%" }}
          endDecorator={<AtSign size={17} />}
        />

        <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
          Send Email
        </Button>
      </FormSignIn>

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

export default ConfirmEmail;
