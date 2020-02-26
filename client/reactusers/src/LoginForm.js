import React from "react";
import {
  LoginBox,
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton
} from "./styled/StyledComponents_Forms";

const LoginForm = () => {
  return (
    <LoginBox>
      <form>
        <InputDiv>
          <InputLabel>Username</InputLabel>
          <input id="username" name="username" type="text" />
        </InputDiv>
        <InputDiv>Password</InputDiv>
        <input id="password" name="password" type="password" />
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </LoginBox>
  );
};

export default LoginForm;
