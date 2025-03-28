"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../component/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [ ] = useState(false); // Moved to top level

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError(""); // Clear error if fields are filled
    alert("Login successful!"); // Replace with actual authentication logic
  };

  return (
    
    <main>
      <nav><Navbar /></nav>

      <div className="py-30 px-6 bg-white text-center">
        <h2 className="text-center mb-4">Alumni Portal Login</h2>

        <div className="row justify-content-center">
          
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <form onSubmit={handleLogin}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}