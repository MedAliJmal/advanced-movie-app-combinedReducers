import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createLibrary, registerAccount } from "../redux/actions";
import { Link, Navigate } from "react-router-dom";

const LoginComp = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");

  const { AllUsers, isAuth, LoggedUser } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      Username: name,
      Email: email,
      userRole: role,
      PW: password,
    };
    if (AllUsers.find((el) => el.Email.toUpperCase() === email.toUpperCase())) {
      alert("this mail is already registered");
    } else {
      dispatch(registerAccount(newUser));
      dispatch(createLibrary(newUser));
      alert("registered successfully");
    }
  };

  return (
    <div>
      {isAuth && LoggedUser ? (
        <Navigate to="/movies" />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Form style={{ width: "50%" }} onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <label htmlFor="">Role :</label>
              <select
                name=""
                id=""
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
          <div className="separation"></div>
          <div>
            <h2>if you already have an account click down below</h2>
            <Link to="/login">
              {" "}
              <Button>Go to login</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComp;
