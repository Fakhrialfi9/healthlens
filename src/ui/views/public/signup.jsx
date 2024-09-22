import { useState } from "react";
import { Input, Button, IconButton } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
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
  TexSubtHeadline,
  SignInMethode,
  LinkSignIn,
  FormSignIn,
  InputGroup,
  ButtonSignInWithGoogle,
  ButtonSignInWithFacebook,
  CardBannerSignIn,
  BannerSignIn,
  TermConditions,
  LinkTermCondition,
  PasswordParameter,
} from "../../../assets/style/views/public/signupStyle";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaEye, FaEyeSlash } from "react-icons/fa";
import { ArrowLeft, AtSign, IdCard } from "lucide-react";
import Typography from "@mui/joy/Typography";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import BannerImage from "../../../../public/media/banner/brooke-lark-nTZOILVZuOg-unsplash.jpg";
import AlertSnackBar from "../../../lib/alert.jsx";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("danger");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setSnackbarMessage("Passwords do not match!");
      setSnackbarColor("danger");
      setSnackbarOpen(true);
      return;
    }

    console.log("Form submitted:", formData);

    setSnackbarMessage("Account created successfully!");
    setSnackbarColor("success");
    setSnackbarOpen(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Main>
      <Content>
        <LeftContent>
          <Navbar>
            <Logo>Health Lens</Logo>
            <TextGoback component={RouterLink} to='/'>
              <ArrowLeft size={15} /> Go Back
            </TextGoback>
          </Navbar>

          <Divider />

          <Headline>
            <TextHeadline>Create an Account</TextHeadline>
            <TexSubtHeadline>
              Already have an account?
              <LinkSignIn component={RouterLink} to='/'>
                Sign In
              </LinkSignIn>
            </TexSubtHeadline>
          </Headline>

          <FormSignIn onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type='text'
                name='firstName'
                placeholder='Enter Your First Name'
                value={formData.firstName}
                onChange={handleInputChange}
                required
                sx={{ width: "100%" }}
                endDecorator={<IdCard size={17} />}
              />

              <Input
                type='text'
                name='lastName'
                placeholder='Enter Your Last Name'
                value={formData.lastName}
                onChange={handleInputChange}
                required
                sx={{ width: "100%" }}
                endDecorator={<IdCard size={17} />}
              />
            </InputGroup>

            <Input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{ width: "100%" }}
              endDecorator={<AtSign size={17} />}
            />

            <PasswordParameter sx={{ "--hue": Math.min(formData.password.length * 10, 120) }}>
              <Input
                type={showPassword ? "text" : "password"}
                name='password'
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleInputChange}
                required
                endDecorator={
                  <IconButton onClick={togglePasswordVisibility} size='sm' sx={{ cursor: "pointer" }}>
                    {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                  </IconButton>
                }
                sx={{ width: "100%" }}
              />

              <Typography level='body-xs' sx={{ alignSelf: "flex-end" }}>
                {formData.password.length < 3 && "Very weak"}
                {formData.password.length >= 3 && formData.password.length < 6 && "Weak"}
                {formData.password.length >= 6 && formData.password.length < 10 && "Strong"}
                {formData.password.length >= 10 && "Very strong"}
              </Typography>
            </PasswordParameter>

            <PasswordParameter sx={{ "--hue": Math.min(formData.confirmPassword.length * 10, 120) }}>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                placeholder='Enter Your Confirm Password'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                endDecorator={
                  <IconButton onClick={toggleConfirmPasswordVisibility} size='sm' sx={{ cursor: "pointer" }}>
                    {showConfirmPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                  </IconButton>
                }
                sx={{ width: "100%" }}
              />

              <Typography level='body-xs' sx={{ alignSelf: "flex-end" }}>
                {formData.confirmPassword.length < 3 && "Very weak"}
                {formData.confirmPassword.length >= 3 && formData.confirmPassword.length < 6 && "Weak"}
                {formData.confirmPassword.length >= 6 && formData.confirmPassword.length < 10 && "Strong"}
                {formData.confirmPassword.length >= 10 && "Very strong"}
              </Typography>
            </PasswordParameter>

            <TermConditions>
              <Checkbox
                required
                label='I agree to the '
                size='sm'
                variant='solid'
                slotProps={{
                  label: {
                    sx: {
                      fontSize: "0.85rem",
                    },
                  },
                }}
              />
              <LinkTermCondition component={RouterLink} to='/termsandconditions'>
                Terms & Conditions
              </LinkTermCondition>
            </TermConditions>

            <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
              Create Your Account
            </Button>
          </FormSignIn>

          <Divider>Or Register With</Divider>

          <SignInMethode>
            <ButtonSignInWithGoogle variant='outlined' startDecorator={<FcGoogle />}>
              Google
            </ButtonSignInWithGoogle>
            <ButtonSignInWithFacebook variant='outlined' startDecorator={<FaFacebookSquare />}>
              Facebook
            </ButtonSignInWithFacebook>
          </SignInMethode>
        </LeftContent>

        <RightContent>
          <CardBannerSignIn>
            <BannerSignIn src={BannerImage}></BannerSignIn>
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

export default SignUp;
