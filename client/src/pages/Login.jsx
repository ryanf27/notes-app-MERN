import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormCheck,
  Nav,
} from "react-bootstrap";
import { useState } from "react";
import "./Register_Login.css";
import Navigation from "../components/Navigation";

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
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <div className="rowContainer">
            <FormCheck type="checkbox" label="Keep me logged in" />
            <Nav.Link href="/forgot-password">Forgot password?</Nav.Link>
          </div>
          <Button className="formButton" type="submit">
            Login
          </Button>

          <Nav.Link href="/register">
            Dont have an account? <span>Sign up</span>
          </Nav.Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
