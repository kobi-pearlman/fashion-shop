import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";


import "./sign-up.scss";
import { signUpWithEmail } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { useState } from "react";

const SignUp = ({ signUpWithEmail }) => {


  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, displayName, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      alert("the passwords do not match");
      return;
    }
    signUpWithEmail({ email, password, displayName })
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };



  return (
    <div className="sign-up">
      <h2 className="title">I dont have account</h2>
      <span>sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    signUpWithEmail: userCredentials => dispatch(signUpWithEmail(userCredentials))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
