import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-10 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Welcome Back</h2>

        <form onSubmit={submitHandler} className="flex flex-col">
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-gray-400 text-sm mb-1 block">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
              type="email"
              placeholder="Enter your email"
              autoComplete='email'
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-1 block">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
              type="password"
              placeholder="Enter your password"
              autoComplete='current-password'
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition duration-200">
            Log In
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account? <a href="#" className="text-emerald-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
