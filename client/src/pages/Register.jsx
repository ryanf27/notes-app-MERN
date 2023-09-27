import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import "./Register_Login.css";
import Navigation from "../components/Navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register">
      <Navigation />
      <div className="formComponent">
        <div className="registerContent">
          <h2>Welcome to Notes App</h2>
          <p>
            To get started, simply register for a free Notes App account. It
            only takes a few minutes and is completely free.
          </p>

          <p>Trusted by over 1 million users.</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <FormControl
              className="formControl"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <FormControl
              className="formControl"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <FormControl
              className="formControl"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
          <Button className="formButton" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
