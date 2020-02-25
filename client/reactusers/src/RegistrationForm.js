import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton,
  LoginBox,
  AppTitle
} from "./styled/StyledComponents_Forms";

const RegistrationForm = () => {
  return (
    <LoginBox>
      <form>
        <AppTitle>Users Backend Registration</AppTitle>
        <InputDiv>
          <InputLabel>Create an account</InputLabel>
          <input id="username" name="username" type="text" />
        </InputDiv>
        <InputDiv>
          <InputLabel>Password</InputLabel>
          <input id="password" name="password" type="password" />
        </InputDiv>
        <LoginButton type="submit">Create Account</LoginButton>
      </form>
      {/* <Link className="sign_up_link" to="">
        Already have an account? Login
      </Link> */}
    </LoginBox>
  );
};
export default RegistrationForm;
