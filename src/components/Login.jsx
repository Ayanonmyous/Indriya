import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="mt-20 flex justify-center items-center h-screen bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-white p-4 rounded shadow-md w-96"
        >
          <h2 className="text-2xl mb-6 font-bold">Login</h2>
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

export default Login;
