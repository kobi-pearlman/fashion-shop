import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";
import { signInWithEmail, signInWithGoogle } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmail(email, password)
    setUserCredentials({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label={"Email"}
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label={"Password"}
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton type="button" onClick={() => signInWithGoogle()} isGoogleSignIn>
            sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInWithEmail: (email, password) => dispatch(signInWithEmail(email, password)),
    signInWithGoogle: () => dispatch(signInWithGoogle())
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
