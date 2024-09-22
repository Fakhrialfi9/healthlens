/* eslint-disable no-unused-vars */
import { useState, CSSProperties } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Main, Content, LeftContent, RightContent, Navigation, TextGoback } from "../../../assets/style/views/public/forgotpasswordStyle.js";
import { ArrowLeft } from "lucide-react";
import StepperFortgotPassword from "../../../lib/stepperFortgotPassword.jsx";
import ConfirmEmail from "./section/forgotpassword/confirmemail.jsx";
import EnterCode from "./section/forgotpassword/entercode.jsx";
import NewPassword from "./section/forgotpassword/newpassword.jsx";
import CompleteStep from "./section/forgotpassword/completestep.jsx";
import ScaleLoader from "react-spinners/ScaleLoader";

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const steps = [
    { component: <ConfirmEmail NextStepForm={() => handleNextStep(1)} /> },
    { component: <EnterCode NextStepForm={() => handleNextStep(2)} PreviousStepForm={() => handlePreviousStep(0)} /> },
    { component: <NewPassword NextStepForm={() => handleNextStep(3)} PreviousStepForm={() => handlePreviousStep(1)} /> },
    { component: <CompleteStep NextStepForm={() => handleNextStep(4)} PreviousStepForm={() => handlePreviousStep(2)} /> },
  ];

  const handleNextStep = (step) => {
    setLoading(true);
    setTimeout(() => {
      setActiveStep(step);
      setLoading(false);
    }, 1500);
  };

  const handlePreviousStep = (step) => {
    setActiveStep(step);
  };

  return (
    <Main>
      <Content>
        <LeftContent>{loading ? <ScaleLoader color='var(--primary-color)' /> : steps[activeStep].component}</LeftContent>

        <RightContent>
          <StepperFortgotPassword activeStep={activeStep} />

          <Navigation>
            <TextGoback component={RouterLink} to='/'>
              <ArrowLeft size={15} /> Go Back to Sign In
            </TextGoback>
          </Navigation>
        </RightContent>
      </Content>
    </Main>
  );
};

export default ForgotPassword;
