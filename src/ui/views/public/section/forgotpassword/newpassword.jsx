/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Headline,
  Box,
  TextHeadline,
  TextSubHeadline,
  FormSignIn,
  PasswordParameter,
  NavigationStepper,
} from "../../../../../assets/style/views/public/forgotpasswordStyle.js";
import { Mail } from "lucide-react";
import { Input, Button, IconButton } from "@mui/joy";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";
import Typography from "@mui/joy/Typography";
import AlertSnackBar from "../../../../../lib/alert.jsx";

const ConfirmEmail = ({ NextStepForm, PreviousStepForm }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [visibility, setVisibility] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "danger",
  });

  const toggleVisibility = (field) => {
    setVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getPasswordStrength = (length) => {
    if (length < 3) return "Very weak";
    if (length < 6) return "Weak";
    if (length < 10) return "Strong";
    return "Very strong";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setSnackbar({
        open: true,
        message: "Passwords do not match!",
        color: "danger",
      });
      return;
    }

    setSnackbar({
      open: true,
      message: "Password confirmed successfully!",
      color: "success",
    });

    setTimeout(() => {
      NextStepForm();
      setSnackbar((prev) => ({ ...prev, open: false }));
    }, 2500);
  };

  return (
    <>
      <Headline>
        <Box>
          <Mail />
        </Box>
        <TextHeadline>Email Confirmation</TextHeadline>
        <TextSubHeadline>Please set your new password to secure your account.</TextSubHeadline>
      </Headline>

      <FormSignIn onSubmit={handleSubmit}>
        {/* Password input */}
        <PasswordParameter sx={{ "--hue": Math.min(formData.password.length * 10, 120) }}>
          <Input
            type={visibility.showPassword ? "text" : "password"}
            name='password'
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={handleInputChange}
            required
            endDecorator={
              <IconButton onClick={() => toggleVisibility("showPassword")} size='sm' sx={{ cursor: "pointer" }}>
                {visibility.showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
              </IconButton>
            }
            sx={{ width: "100%" }}
          />
          <Typography level='body-xs' sx={{ alignSelf: "flex-end" }}>
            {getPasswordStrength(formData.password.length)}
          </Typography>
        </PasswordParameter>

        {/* Confirm password input */}
        <PasswordParameter sx={{ "--hue": Math.min(formData.confirmPassword.length * 10, 120) }}>
          <Input
            type={visibility.showConfirmPassword ? "text" : "password"}
            name='confirmPassword'
            placeholder='Confirm Your Password'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            endDecorator={
              <IconButton onClick={() => toggleVisibility("showConfirmPassword")} size='sm' sx={{ cursor: "pointer" }}>
                {visibility.showConfirmPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
              </IconButton>
            }
            sx={{ width: "100%" }}
          />
          <Typography level='body-xs' sx={{ alignSelf: "flex-end" }}>
            {getPasswordStrength(formData.confirmPassword.length)}
          </Typography>
        </PasswordParameter>

        <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
          Submit New Password
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

export default ConfirmEmail;
