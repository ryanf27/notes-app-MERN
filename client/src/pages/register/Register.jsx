import { useState } from "react";
import "./register.css";
import Navigation from "../../components/navigation/Navigation";
import Contact from "../../components/contact/Contact";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here
  };

  return (
    <>
      <Navigation />
      <div className="register">
        <div className="formComponent">
          <div className="registerContent">
            <h2>Welcome to Notes App</h2>
            <p>
              To get started, simply register for a free Notes App account. It
              only takes a few minutes and is completely free.
            </p>
            <p>Trusted by over 1 million users.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
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
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
            <button className="btn btn-primary formButton" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Register;
