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
  const [users, setUsers] = useState({ username: "", password: "" });

  const handleChange = event => {
    event.persist();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const addNewUser = async user => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        user
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const getUsers = async userInfo => {
    try {
      const res = await axios.get("http://localhost:400/api/users");
      console.lot("data for users", res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async event => {
    axios.defaults.withCredentials = true;
    event.preventDefault();
    console.log("event info", event);
    const newUserId = await addNewUser();
    const newUser = {
      ...user,
      id: newUserId
    };
    setUsers({ ...users, newUser });
    // axios
    //   .post("http://localhost:4000/api/auth/register")
    //   .then(res => {
    //     console.log("registration", res);
    //   })
    //   .catch(err => console.log(err));
  };
  return (
    <LoginBox>
      <form onSubmit={event => handleSubmit(event)}>
        <AppTitle>Users Backend Registration</AppTitle>
        <InputDiv>
          <InputLabel htmlFor="username">Create a username</InputLabel>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </InputDiv>
        <InputDiv>
          <InputLabel>Password</InputLabel>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </InputDiv>
        <LoginButton type="submit">Create Account</LoginButton>
      </form>
      <LoginButton onClick={event => getUsers(event)}>Get Users</LoginButton>
      <h4>Current Users:</h4>
      {/* {users.map(user => (
        <p key={user.id}>{user.username}</p>
      ))} */}
      {/* <Link className="sign_up_link" to="">
        Already have an account? Login
      </Link> */}
    </LoginBox>
  );
};
export default RegistrationForm;
