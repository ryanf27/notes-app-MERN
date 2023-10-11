import { useState } from "react";
import "./login.css";
import Navigation from "../../components/navigation/Navigation";
import Contact from "../../components/contact/Contact";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <Navigation />
      <div className="login">
        <div className="formComponent">
          <div className="loginContent">
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
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group row-container">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <div className="loginBtnContainer">
              <button className="formButton" type="submit">
                Login
              </button>
              <a href="/register">
                Dont have an account? <span>Sign up</span>
              </a>
            </div>
          </form>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Login;
