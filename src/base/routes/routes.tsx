import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/public.jsx";
import SignInView from "../../ui/views/public/sigin.jsx";
import SignUpView from "../../ui/views/public/signup.jsx";
import ForgotPasswordView from "../../ui/views/public/forgotpassword.jsx";
import TermsAndConditions from "../../ui/views/public/termsandconditions.jsx";

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<SignInView />} />
          <Route path='/signup' element={<SignUpView />} />
          <Route path='/forgotpassword' element={<ForgotPasswordView />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
