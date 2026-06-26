import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "dharm@gmail.com" && password === "1906") {
      localStorage.setItem("login", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
        })
      );

      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000, #1a1a1a, #2c2c2c)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "420px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
        }}
      >
        <div className="text-center mb-4">
          <i
            className="fa-solid fa-user-circle"
            style={{
              fontSize: "70px",
              color: "#0d6efd",
            }}
          ></i>

          <h2 className="mt-3 fw-bold text-white">
            Welcome Back
          </h2>

         
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-white">
              Email
            </label>

            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">
              Password
            </label>

            <div className="input-group">
              <input
                type={showPass ? "text" : "password"}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => setShowPass(!showPass)}
              >
                <i
                  className={`fa-solid ${
                    showPass ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
           
          
          </div>

          <button
            className="btn w-100 py-2 fw-bold"
            style={{
              background: "#0d6efd",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Login
          </button>
        </form>

       

        <hr style={{ borderColor: "#555" }} />

        <div className="text-center">
         

          <br />

       
        </div>
      </div>
    </div>
  );
}