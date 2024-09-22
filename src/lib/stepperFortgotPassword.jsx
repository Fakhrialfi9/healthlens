/* eslint-disable react/prop-types */
import { HeadlineStepper, SubHeadlineStepper } from "../assets/style/lib/stepperFortgotPassword.js";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const StepperFortgotPassword = ({ activeStep }) => {
  const steps = [
    {
      label: "Confirmation Email",
      subheading: "Please enter your email to receive a confirmation code.",
    },
    {
      label: "Enter Confirmation Code",
      subheading: "Check your email and enter the code sent to you.",
    },
    {
      label: "Create a New Password",
      subheading: "Set a strong password to secure your account.",
    },
    {
      label: "Finish, Your Password Registered",
      subheading: "You have successfully updated your password.",
    },
  ];

  return (
    <Stepper
      orientation='vertical'
      sx={(theme) => ({
        "--Stepper-verticalGap": "2.5rem",
        "--StepIndicator-size": "2.5rem",
        "--Step-gap": "1rem",
        "--Step-connectorInset": "0.5rem",
        "--Step-connectorRadius": "1rem",
        "--Step-connectorThickness": "4px",
        "--joy-palette-success-solidBg": "var(--primary-color)",
        [`& .${stepClasses.completed}`]: {
          "&::after": { bgcolor: "success.solidBg" },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: "4px solid",
            borderColor: "#fff",
            boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: "neutral.softDisabledColor",
        },
        [`& .${typographyClasses["title-sm"]}`]: {
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontSize: "10px",
        },
      })}>
      {steps.map((step, index) => (
        <Step
          completed={index < activeStep}
          key={index}
          indicator={
            index < activeStep ? (
              <StepIndicator variant='solid' color='success'>
                <CheckRoundedIcon />
              </StepIndicator>
            ) : (
              <StepIndicator />
            )
          }>
          <div>
            <Typography level='title-sm'>Step {index + 1}</Typography>
            <HeadlineStepper level='h4'>{step.label}</HeadlineStepper>
            <SubHeadlineStepper level='h6'>{step.subheading}</SubHeadlineStepper>
          </div>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperFortgotPassword;
