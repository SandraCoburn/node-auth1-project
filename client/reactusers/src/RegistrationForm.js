import React, { useState } from "react";

import axios from "axios";

import {
  InputDiv,
  InputLabel,
  LoginButton,
  LoginBox,
  AppTitle
} from "./styled/StyledComponents_Forms";

const RegistrationForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    event.persist();
    setUser({
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    axios.defaults.withCredentials = true;
    event.preventDefault();
    console.log("event info", event);
    axios
      .post("http://localhost:4000/api/auth/register")
      .then(res => {
        console.log("registration", res);
      })
      .catch(err => console.log(err));
  };
  return (
    <LoginBox>
      <form onSubmit={handleSubmit}>
        <AppTitle>Users Backend Registration</AppTitle>
        <InputDiv>
          <InputLabel>Create an account</InputLabel>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={handleChange}
          />
        </InputDiv>
        <InputDiv>
          <InputLabel>Password</InputLabel>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
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
