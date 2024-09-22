import { useNavigate } from "react-router-dom";
import {
  Main,
  Content,
  Headline,
  SubHeadline,
  PointTermAndCondition,
  PointItemTermAndCondition,
  FormSignIn,
} from "../../../assets/style/views/public/termsandconditions.js";
import { Button } from "@mui/joy";
import { TermsAndConditions as termsData } from "../../../data/public/termsandconditions.js";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  return (
    <Main>
      <Content>
        {termsData.map((term, index) => (
          <Headline key={index}>
            {term.headline}
            <div>
              <SubHeadline>
                {term.subheadline}

                {term.points && (
                  <PointTermAndCondition>
                    {term.points.map((point, idx) => (
                      <PointItemTermAndCondition key={idx}>{point}</PointItemTermAndCondition>
                    ))}
                  </PointTermAndCondition>
                )}
              </SubHeadline>
            </div>
          </Headline>
        ))}

        <FormSignIn onSubmit={handleSubmit}>
          <Button type='submit' variant='solid' color='primary' sx={{ width: "100%" }}>
            I Understand
          </Button>
        </FormSignIn>
      </Content>
    </Main>
  );
};

export default TermsAndConditions;
