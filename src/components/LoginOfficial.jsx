import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { Link, Navigate } from "react-router-dom";

const LoginOfficial = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { AllUsers, isAuth } = useSelector((state) => state.userReducer);
  let existantUser = AllUsers.find(
    (el) => el.Email.toUpperCase() === email.toUpperCase()
  );

  const handleLogin = (e) => {
    e.preventDefault();
    existantUser && password === existantUser.PW
      ? dispatch(loginUser(existantUser))
      : alert("WRONG INFORMATION");
  };

  return (
    <div>
      {isAuth ? (
        <Navigate to="/movies" />
      ) : (
        <Form style={{ width: "50%" }} onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              pattern=".{6,}"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Your password length should be at least 6
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>
            if you dont have an accout <Link to="/">Register Here</Link>
          </p>
        </Form>
      )}
    </div>
  );
};

export default LoginOfficial;
