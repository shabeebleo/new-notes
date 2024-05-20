import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { validateEmail,validatePassword } from "../../utils/helper";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error 
    if (!validateEmail(email)) {
      setError("please enter a valid email");
      return;
    }
    if (!validatePassword(password)) {
        setError("please enter a password");
        return;
      }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin} >
            <h4 className="mb-7 text-2xl">Login</h4>
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
              not registered yet?{" "}
              <Link className="font-medium underline text-primary" to="/signup">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
