"use client";

import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // validation to check if any field is empty
    if (!email || !password) {
      alert('Both email and password are required!');
      return;
    }

    alert('Validation passed! Now you can proceed with login.');
   
    
  };
  
  return (
    <div>
      <div className="screenMiddleDiv">
        <div className="formDiv">
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-center">Login</h2>

            <div>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="my-6">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="formButton">
              Login
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
