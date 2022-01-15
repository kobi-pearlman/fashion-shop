import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import "./sign-in.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
          value={userCredentials.email}
          required
          handleChange={handleChange}
          label={"Email"}
        />

        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          required
          handleChange={handleChange}
          label={"Password"}
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
