import { useNavigate } from "react-router-dom";
import { Headline, Box, TextHeadline, TextSubHeadline, FormSignIn } from "../../../../../assets/style/views/public/forgotpasswordStyle.js";
import { Button } from "@mui/joy";
import { Smile } from "lucide-react";

const EnterCode = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Headline>
        <Box>
          <Smile />
        </Box>
        <TextHeadline>Password Update Successful</TextHeadline>
        <TextSubHeadline>You have successfully completed all steps for updating your password. Your password has now been refreshed.</TextSubHeadline>
      </Headline>

      <FormSignIn onSubmit={handleSubmit}>
        <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
          Go to Sign In
        </Button>
      </FormSignIn>
    </>
  );
};

export default EnterCode;
