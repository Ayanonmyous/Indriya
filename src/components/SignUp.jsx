import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/");
  };
  return (
    <>
      <div className=" flex justify-center items-center h-screen bg-gray-900">
        <form
          onSubmit={handleSignUp}
          className="bg-white p-4 rounded shadow-md w-96"
        >
          <h2 className="text-2xl mb-6 font-bold">Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
