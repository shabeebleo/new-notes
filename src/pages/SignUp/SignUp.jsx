import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { validateEmail, validatePassword } from "../../utils/helper";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
    if (!name) {
      console.log("name check");
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("please enter a valid email");
      return;
    }
 
    if (!validatePassword(password)) {
      if(password==""){
        setError("enter password");
        return;
      }
      setError("min password length 4");
      return;
    }
    setError(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="mb-7 text-2xl">SignUp</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
              className="input-box mb-3"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className="input-box"
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {error && <p className="text-red-600 pt-1 text-sm">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p>
              Already have an account?{" "}
              <Link className="font-medium underline text-primary" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
