import { useState } from "react";
import "./Register_Login.css";
import Navigation from "../../components/navigation/Navigation";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register">
      <Navigation />
      <div className="formComponent">
        <div className="registerContent">
          <h2>Welcome Back to Notes App</h2>
          <p>
            Login to access your notes and to-do lists, and collaborate with
            others on projects.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group row-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="keepLoggedIn"
              />
              <label className="form-check-label" htmlFor="keepLoggedIn">
                Keep me logged in
              </label>
            </div>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button className="btn btn-primary formButton" type="submit">
            Login
          </button>

          <a href="/register">
            Dont have an account? <span>Sign up</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
