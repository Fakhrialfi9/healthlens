import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Input, Button, IconButton, Checkbox, Divider } from "@mui/joy";
import {
  Main,
  Content,
  LeftContent,
  RightContent,
  Navbar,
  Logo,
  TextGoback,
  Headline,
  TextHeadline,
  TextSubHeadline,
  SignInMethod,
  FormSignIn,
  ButtonSignInWithGoogle,
  ButtonSignInWithFacebook,
  CardBannerSignIn,
  BannerSignIn,
  RememberMeForgotPassword,
  SignUp,
  TextCreateAccount,
  LinkCreateAccount,
  LinkForgotPassword,
} from "../../../assets/style/views/public/signinStyle.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaEye, FaEyeSlash } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { AtSign } from "lucide-react";
import BannerImage from "../../../../public/media/banner/brooke-lark-jUPOXXRNdcA-unsplash.jpg";
import AlertSnackBar from "../../../lib/alert.jsx";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("danger");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  const handleValidation = () => {
    if (!email) {
      showSnackbar("Email is required!");
      return;
    }

    if (!password) {
      showSnackbar("Password is required!");
      return;
    }

    if (email === "test@example.com") {
      if (password === "password") {
        showSnackbar("Sign in successful!", "success");
      } else {
        showSnackbar("Incorrect password!");
      }
    } else {
      showSnackbar("Email not registered!");
    }
  };

  const showSnackbar = (message, color = "danger") => {
    setSnackbarMessage(message);
    setSnackbarColor(color);
    setSnackbarOpen(true);
  };

  return (
    <Main>
      <Content>
        <LeftContent>
          <Navbar>
            <Logo>Health Lens</Logo>
            <TextGoback href=''>
              <ArrowLeft size={15} /> Go Back
            </TextGoback>
          </Navbar>

          <Divider />

          <Headline>
            <TextHeadline>Sign In to Your Account</TextHeadline>
            <TextSubHeadline>Welcome Back! Select a Method to Sign In</TextSubHeadline>
            <SignInMethod>
              <ButtonSignInWithGoogle variant='outlined' startDecorator={<FcGoogle />}>
                Google
              </ButtonSignInWithGoogle>
              <ButtonSignInWithFacebook variant='outlined' startDecorator={<FaFacebookSquare />}>
                Facebook
              </ButtonSignInWithFacebook>
            </SignInMethod>
          </Headline>

          <Divider>Or Continue With Email</Divider>

          <FormSignIn onSubmit={handleSubmit}>
            <Input
              type='email'
              placeholder='Enter Your Email'
              autoComplete='on'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ width: "100%" }}
              endDecorator={<AtSign size={17} />}
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder='Enter Your Password'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              endDecorator={
                <IconButton onClick={togglePasswordVisibility} size='sm' sx={{ cursor: "pointer" }}>
                  {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                </IconButton>
              }
              sx={{ width: "100%" }}
            />

            <RememberMeForgotPassword>
              <Checkbox
                label='Remember Me'
                size='sm'
                variant='solid'
                slotProps={{
                  label: {
                    sx: {
                      fontSize: "0.85rem",
                      color: "var(--text-color-solid-0)",
                    },
                  },
                }}
              />
              <LinkForgotPassword component={RouterLink} to='/forgotpassword'>
                Forgot Password?
              </LinkForgotPassword>
            </RememberMeForgotPassword>

            <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
              Sign In
            </Button>
          </FormSignIn>

          <SignUp>
            <TextCreateAccount>
              Don’t Have an Account?
              <LinkCreateAccount component={RouterLink} to='/signup'>
                Sign Up
              </LinkCreateAccount>
            </TextCreateAccount>
          </SignUp>
        </LeftContent>

        <RightContent>
          <CardBannerSignIn>
            <BannerSignIn src={BannerImage} alt='Sign In Banner' />
          </CardBannerSignIn>
        </RightContent>
      </Content>

      <AlertSnackBar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        color={snackbarColor}
        variant='solid'
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
      />
    </Main>
  );
};

export default SignIn;
